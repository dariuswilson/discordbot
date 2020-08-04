const mongo = require('../../mongo');
const profileSchema = require('../../schemas/profile-schema');

module.exports = {
	commands: ['daily'],

	callback: async (message, args, text) => {
		const amount = 10;
		await mongo().then(async (mongoose) => {
			try {
				console.log('Connected to mongodb!');
				const found = await profileSchema.findOne({ userId: user });
				if (message.author) {
					message.channel.send('You have recieved your daily amount of {amount}');
					console.log(found);
				}
			} finally {
				mongoose.connection.close();
			}
		});
	},
};


// const timeout = 86400000;
// const amount = 10;
// const daily = await mongo.findOne()(`daily_${message.guild.id}_${message.author.id}`);

// if(daily !== null && timeout - (Date.now () - daily) > 0) {
// 	const time = ms(timeout - (Date.now() - daily));

// 	return message.channel.send(`You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`);
// } else {
// 	mongo.add(`money_${message.guild.id}_${message.author.id}`, amount);
// 	mongo.set(`daily_${message.guild.id}_${message.author.id}`, Date.now());

// 	message.channel.send(`Successfully added ${amount} of coins to your account!`);
// }