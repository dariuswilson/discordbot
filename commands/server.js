const Discord = require('discord.js');
exports.run = (client, message, args) => {
	const embed = new Discord.MessageEmbed()
		.setColor(0x00FF00)
		.setTitle('Server Information')
		.setDescription('Information about this beautiful server!')
		.addField("Server Name:", `${message.guild.name}`)
		.addField("Total Members:",`${message.guild.memberCount}`);
	message.channel.send(embed);
};

exports.help = {
	name: 'server',
}