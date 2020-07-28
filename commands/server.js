const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'this is a command to get server info',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		.setColor(0x00FF00)
		.setTitle('Server Information')
		.setDescription('Information about this beautiful server!')
		.addField("Server Name:", `${message.guild.name}`)
		.addField("Total Members:",`${message.guild.memberCount}`);
	}
};