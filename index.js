/* eslint-disable no-mixed-spaces-and-tabs */
// PACKAGES AND FILES
const Discord = require('discord.js');
const client = new Discord.Client();
const botsettings = require('./config.json');
const fs = require('fs');
const { prefix } = require('./config.json');
const { brotliCompress } = require('zlib');
const nodemon = require('nodemon');
client.commands = new Discord.Collection();
const path = require('path');
const commandBase = require('./commands/command-base');


// BOT ONLINE MESSAGE AND ACTIVITY MESSAGE
client.on('ready', async () => {
	console.log('The client is ready!');

	commandBase.loadprefix(client);
});


client.login(process.env.token);