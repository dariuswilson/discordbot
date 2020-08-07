/* eslint-disable no-mixed-spaces-and-tabs */
// PACKAGES AND FILES
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const loadCommands = require('./commands/load-commands')
const commandBase = require('./commands/command-base');


// BOT ONLINE MESSAGE AND ACTIVITY MESSAGE
client.on('ready', async () => {
	console.log('The client is ready!');

	commandBase.loadPrefixes(client);
	loadCommands(client);
});


client.login(process.env.token);