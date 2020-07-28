const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'help commands!',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		.setTitle('Help Commands')
		.setDescription('Commands you can use on the bot will be found here.')
		.setColor(0x00FF00);
	message.channel.send(embed);
	}
};