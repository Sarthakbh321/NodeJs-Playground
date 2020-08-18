const express = require("express");
const Message = require("../models/Messages");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("We are on messages");
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