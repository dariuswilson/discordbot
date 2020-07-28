const Discord = require('discord.js');

module.exports = {
	commands: ['server'],
	expectedArgs: '',
	permissionError: '',
	minArgs: 0,
	maxArgs: 0,
	callback: (message, args, text) => {
		const embed = new Discord.MessageEmbed()
		.setColor(0x00FF00)
		.setTitle('Server Information')
		.setDescription('Information about this beautiful server!')
		.addField("Server Name:", `${message.guild.name}`)
		.addField("Total Members:",`${message.guild.memberCount}`);
		message.reply(embed)
},
	permissions: [],
	requiredRoles: [],
}