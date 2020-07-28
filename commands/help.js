const Discord = require('discord.js');

module.exports = {
	commands: ['help'],
	expectedArgs: '',
	permissionError: '',
	minArgs: 0,
	maxArgs: 0,
	callback: (message, args, text) => {
		const embed = new Discord.MessageEmbed()
		.setTitle('Help Commands')
		.setDescription('Commands you can use on the bot will be found here.')
		.setColor(0x00FF00);
	message.channel.send(embed);
},
	permissions: [],
	requiredRoles: [],
}