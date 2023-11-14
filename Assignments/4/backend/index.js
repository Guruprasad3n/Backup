import express from "express";
import fileUpload from "express-fileupload";
import PDFParser from "pdf2json";
import openai from "openai";
import cors from "cors"


const app = express();
const port = 8000;

app.use(fileUpload());
app.use(express.json());
app.use(cors());

openai.apiKey = process.env.OPENAI_API_KEY;
openai.apiVersion = 'v1'
app.post("/summarization", async (req, res) => {
  try {
    // Handle the uploaded files (both TXT and PDF)
    const uploadedFiles = req.files.files;

    if (!uploadedFiles || uploadedFiles.length === 0) {
      return res
        .status(400)
        .json({ error: "Please upload at least one valid file." });
    }

    const fileContents = [];

    const uploadedFilesArray = Array.from(uploadedFiles);

    uploadedFilesArray.forEach(async (file) => {
      let content = "";
      if (file.mimetype === "text/plain") {
        // Read the contents of a TXT file
        content = file.data.toString("utf-8");
      } else if (file.mimetype === "application/pdf") {
        // Read the contents of a PDF file
        content = await extractTextFromPdf(file.data);
      }
    
      fileContents.push(content);
    });

    // Create conversation messages with system message, user request, and file contents
    const summaryRequest = req.body.summaryRequest || "";
    const messages = [
      { role: "system", content: "You are a summarization assistant." },
      {
        role: "user",
        content: `Please make a summary of the content from the below files for: ${summaryRequest}`,
      },
      ...fileContents.map((content) => ({ role: "user", content })),
    ];

    // Request a summary from the OpenAI model
    const response = await openai.ChatCompletion.create({
      model: "gpt-3.5-turbo",
      messages,
      // temperature: 0.9,
      // max_tokens: 2000,
    });

    // Return the generated summary to the client
    res.json({ summary: response.choices[0].message.content });
  } catch (e) {
    console.error("Error in /summarization route:", e);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

async function extractTextFromPdf(pdfData) {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();
    pdfParser.on("pdfParser_dataError", (errData) => {
      reject(errData);
    });
    pdfParser.on("pdfParser_dataReady", (pdfData) => {
      const text = pdfData.formImage.Pages.map((page) =>
        page.Texts.map((text) => text.R[0].T).join(" ")
      ).join("\n");
      resolve(text);
    });

    pdfParser.parseBuffer(pdfData);
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
