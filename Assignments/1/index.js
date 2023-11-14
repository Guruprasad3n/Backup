{
  // const express = require("express");
  // const app = express();
  // const cors = require("cors");
  // const axios = require("axios");
  // const dotenv = require("dotenv");
  // dotenv.config();
  // const { Configuration, OpenAIApi } = require("openai");
  // // middlewares
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));
  // app.use(cors());
  // app.get("/", (req, res) => {
  //   res.send("Welcome yo Home Page");
  // });
  // app.post("/generate-shayari", async (req, res) => {
  //   const { keyword } = req.body;
  //   // Make a request to ChatGPT to generate Shayari based on the keyword
  //   const prompt = `Generate a Shayari about ${keyword}`;
  //   const response = await axios.post(
  //     "https://api.openai.com/v1/engines/davinci/completions",
  //     {
  //       prompt,
  //       max_tokens: 50, // Adjust the token limit as needed
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  //       },
  //     }
  //   );
  //   const shayari = response.data.choices[0].text;
  //   res.json({ shayari });
  // });
  // app.listen(8080, (req, res) => {
  //   console.log(`Port Running in http://localhost:8080`);
  // });
}

const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const configuration = new Configuration({
//   organization: "org-7PVW9hp4BLWAhG7rbREYu40j",
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY,});
// // const response = await openai.listEngines();

app.get("/shayari", async (req, res) => {
  try {
    const type = req.query.type;
    const keyword = req.query.keyword;
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `Generate a Shayari ${type} about ${keyword}`, //`Shayari about ${keyword}`
        max_tokens: 100,
        // temperature: 0.7,
        // n: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const shayari = response.data.choices[0].text.trim();
    res.json({ shayari });
  } catch (error) {
    console.error("Error:", error?.response?.data);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// app.post('/gpt-integration', async(req, res)=>{
//   try{
// return res.status(200).json({message:"Working"})
//   }
//   catch(e){
//     console.log("error" + e)
//   }
// })

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, (req, res) => {
  console.log(`Server Running in Port no http://localhost:${PORT}`);
});
