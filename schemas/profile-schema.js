const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true,
};

const profileSchema = mongoose.Schema({
	userId: reqString,
	coins: {
		type: Number,
		required: true,
	},
	rundate: {
		type: Date,
	},
});

module.exports = mongoose.model('profiles', profileSchema);