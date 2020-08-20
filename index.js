const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodeParser = require("body-parser");
require("dotenv").config();

//Routes import
const routes = require("./routes/messages");

const PORT = process.env.PORT || 4000;

//MIDDLEWARE
app.use(bodeParser.json());

app.get("/", (req, res) => {
	res.send(`Server is up and running`);
});

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true}, () => {
	console.log("Connected to db!");
});


app.use("/messages", routes);


app.listen(PORT, () => console.log(`Server start on port ${PORT}`));