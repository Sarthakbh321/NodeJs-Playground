const express = require("express");
const Message = require("../models/Messages");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("We are on messages");
});

router.post("/", (req, res) => {
	console.log(req.body);
});

module.exports = router;