const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	return message.channel.send("Pong!");
};

module.exports.config = {
	name: "ping",
	description: "",
	usage: "!ping",
	accessableby: "Members",
	aliases: []
};