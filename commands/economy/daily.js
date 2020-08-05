const mongo = require('../../mongo');
const profileSchema = require('../../schemas/profile-schema');
const economy = require('../../economy'); // We need this to add coins.

module.exports = {
	commands: ['daily'],
	callback: async (message, args, text) => {
		const amount = 10;
		await mongo().then(async (mongoose) => {
			try {
				const user = message.author.id;
				console.log('Connected to mongodb!');
				const storeddate = await profileSchema.findOne({ userId : user }, 'rundate'); // Don't worry about rundate for now, I'll explain later.
				const sdm = storeddate.getTime() + 86400000;
				const Tdate = new Date(); // Don't worry about this for now, I'll explain later.
				const tdm = Tdate.getTime();
				if (!storeddate) {
					await economy.dailyCoins(user, 10, Tdate); // Don't worry about Tdate, I'll explain later.
					message.channel.send('You have received your daily amount of 10 coins! Please try again in 24 hours.');
					return;
				}
				if (tdm >= sdm) {
					await economy.dailyCoins(user, 10, Tdate); // Don't worry about Tdate, I'll explain later.
					message.channel.send('You have received your daily amount of 10 coins! Please try again in 24 hours.');
					return;
				} else {
					return message.channel.send('Please wait for a full 24 hours before running this command again.');
				}
			} finally {
				mongoose.connection.close();
			}
		});

	},
};