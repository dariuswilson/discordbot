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

// READ COMMMANDS FOLDER
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

// BOT ONLINE MESSAGE AND ACTIVITY MESSAGE
client.on('ready', async () => {
	console.log('The client is ready!');

	const baseFile = 'command-base.js';
	const commandBase = require(`./commands/${baseFile}`);

	const readCommands = (dir) => {
	  // eslint-disable-next-line no-mixed-spaces-and-tabs
	  const files = fs.readdirSync(path.join(__dirname, dir));
		//   for (const file of files) {
		const stat = fs.lstatSync(path.join(__dirname, dir, file));
		if (stat.isDirectory()) {
		  readCommands(path.join(dir, file));
		} else if (file !== baseFile) {
		  const option = require(path.join(__dirname, dir, file));
		  commandBase(client, option);
		}};

	readCommands('commands');


	// Activity for the bot
	client.user.setPresence({
		activity: {
			name: `"${prefix}help" for help!`,
		},
	});


	client.on('message', message => {
		if(!message.content.startsWith(prefix) || message.author.bot) return;
	});
});
client.login(process.env.token);