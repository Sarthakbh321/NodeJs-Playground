const express = require("express");
const Message = require("../models/Messages");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		console.log("GET msgs")
		const posts = await Message.find();
		res.json(posts);
	} catch(error) {
		res.json({ message: error });
	}
});

router.post("/", async (req, res) => {
	console.log(req.body);

	const message = new Message({
		text: req.body.text
	});
	
	try {
		const saveMessage = await message.save();
		res.status(200).json(saveMessage);
	} catch(error) {
		res.json({message: error})
	}
});

module.exports = router;