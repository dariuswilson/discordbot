const mongo = require('../../mongo');
const ms = require('parse-ms');

module.exports = {
	commands: ['daily'],

	callback: async (message, args, text) => {
		const timeout = 86400000;
		const amount = 10;
		const daily = await mongo.get(`daily_${message.guild.id}_${message.author.id}`);

		if(daily !== null && timeout - (Date.now () - daily) > 0) {
			const time = ms(timeout - (Date.now() - daily));

			return message.channel.send(`You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`);
		} else {
			mongo.add(`money_${message.guild.id}_${message.author.id}`, amount);
			mongo.set(`daily_${message.guild.id}_${message.author.id}`, Date.now());

			message.channel.send(`Successfully added ${amount} of coins to your account!`);
		}
	},
};