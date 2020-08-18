const mongoose = require("mongoose"); 

const Schema = mongoose.Schema({
	text: {
		type: String,
		required: true
	},
	createdOn: {
		type: Date,
		default: Date.now,
	}
})

module.exports = mongoose.model("Messages", Schema);