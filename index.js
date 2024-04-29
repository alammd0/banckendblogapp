const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const blog = require("./router/blog");

app.use("/api/v1", blog);

app.listen(PORT, () => {
    console.log(`Server started at port No ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => { // Changed req.send() to res.send()
    res.send(`<h1>Blog Web App Only Banked Part</h1>`); // Corrected typo
});
