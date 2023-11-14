const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.send("URL Shortiner")
})

app.listen(PORT, (req, res)=>{
    console.log(`Server Started in Port No http://localhost:${PORT} `)
})