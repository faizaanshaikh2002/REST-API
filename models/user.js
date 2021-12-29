const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: String,
	age: {
		type: Number,
		default: 18,
		required: true,
	},
	gender: String,
	UserNumber: {
		type: Number,
		default: 12345678,
	},
});

module.exports = mongoose.model("User", UserSchema);
