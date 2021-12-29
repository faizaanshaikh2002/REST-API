const express = require("express");
const user = require("../models/user");
const router = express.Router();
const UserModel = require("../models/user");

// To Create a User
router.post("/", async (req, res) => {
	const { username, age, gender, UserNumber } = req.body;
	const newUser = new UserModel({ username, age, gender, UserNumber });
	try {
		const Data = await newUser.save();
		res.json(Data);
	} catch (err) {
		res.send(err);
	}
});

// To Get all Users
router.get("/", async (req, res) => {
	try {
		const users = await UserModel.find();
		res.json(users);
	} catch (err) {
		res.status(404).send(err)
	}
});

// To get one user
router.get("/:id", async (req, res) => {
	const { id } = req.params
	const user = await UserModel.findById(id);
	res.json(user)
})

// To Update user
router.patch("/:id", async (req, res) => {
	const { id } = req.params
	const user = await UserModel.findById(id);
	if (req.body.username != null) {
		user.username = req.body.username;
	}
	const updatedUser = await user.save();
	res.json(updatedUser)
})

// To delete user
router.delete("/:id", async (req, res) => {
	const { id } = req.params
	const user = await UserModel.findById(id);
	await user.remove();
	res.json({ message: "User Removed Succesfully!" })
})

module.exports = router; 