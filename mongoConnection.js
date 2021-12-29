const mongoose = require("mongoose");

const uri = process.env.DB_URI;

mongoose.connect(uri, (err) => {
	if (err) return console.log(err);
	console.log("DB Connected");
});
