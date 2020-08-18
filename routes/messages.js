const express = require("express");
const Message = require("../models/Messages");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("We are on messages");
});

router.post("/", (req, res) => {
	console.log(req.body);

	const message = new Message({
		text: req.body.text
	});
	
	message.save()
	.then((data) => {
		res.status(200).send(data);
	})
	.catch((error) => {
		res.json({message: error});
	});
});

module.exports = router;