const express = require("express");
const Message = require("../models/Messages");

const router = express.Router();

//GET ALL MESSAGES
router.get("/", async (req, res) => {
	try {
		const posts = await Message.find();
		res.json(posts);
	} catch(error) {
		res.json({ message: error });
	}
});

//GET 5 RANDOM MESSAGES
router.get("/random", async (req, res) => {
	try {
		const random = await Message.aggregate([{ $sample: {size: 5} }]);
		res.json(random);
	} catch(error) {
		res.json({message: error});
	}
});

router.post("/", async (req, res) => {
	console.log(req.body);

	const message = new Message({
		text: req.body.text,
		name: req.body.name
	});
	
	try {
		const saveMessage = await message.save();
		res.status(200).json(saveMessage);
	} catch(error) {
		res.json({message: error})
	}
});

module.exports = router;