const mongoose = require('mongoose');
const { mongoPass } = require('./config.json');
const mongoPath = `mongodb+srv://Darius:${mongoPass}@discordbot.3bz6j.mongodb.net/discordbot?retryWrites=true&w=majority`;

module.exports = async () => {
	await mongoose.connect(mongoPath, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return mongoose;
};