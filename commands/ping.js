const Discord = require('discord.js');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
	return message.channel.send("Pong!");
}

module.exports.config = {
	name: "ping",
	description: "",
	usage: "!ping",
	accessableby: "Members",
	aliases: [],
};