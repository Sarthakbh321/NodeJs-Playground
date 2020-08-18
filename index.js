const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send(`Server is up and running ${process.env.USER_NAME}`);
});

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true}, () => {
	console.log("Connected to db!");
});


app.listen(PORT, () => console.log(`Server start on port ${PORT}`));