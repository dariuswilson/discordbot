const mongo = require('../../mongo');
const profileSchema = require('../../schemas/profile-schema');
const economy = require('../../economy'); // We need this to add coins.

module.exports = {
	commands: ['daily'],
	cooldown: 60 * 1440,
	callback: async (message, args, text) => {
		await mongo().then(async (mongoose) => {
			try {
				const user = message.author.id;
				console.log('Connected to mongodb!');
				if (user === '!daily') {
					await economy.dailyCoins(user, 10); // Don't worry about Tdate, I'll explain later.
					message.channel.send('You have received your daily amount of 10 coins! Please try again in 24 hours.');
					return;
				}
			} finally {
				mongoose.connection.close();
			}
		});

	},
};