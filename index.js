// PACKAGES AND FILES
const Discord = require('discord.js');
const client = new Discord.Client();
const botsettings = require('./botsettings.json');
const fs = require('fs');
const { prefix } = require('./botsettings.json')
const { brotliCompress } = require('zlib');
const nodemon = require('nodemon');

client.commands = new Discord.Collection();
client.mongoose = require('./utils/mongoose');

// READ COMMMANDS FOLDER
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

// BOT ONLINE MESSAGE AND ACTIVITY MESSAGE
client.once('ready', () => { 
	console.log('I am online!');
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'ping') {
		client.commands.get('ping').execute(message, args);
	} else if (command === 'server') {
		client.commands.get('server').execute(message, args);
	} else if (command === 'seatgeek') {
		client.commands.get('seatgeek').execute(message,args);
	} else if (command === 'help') {
		client.commands.get('help').execute(message, args);
	}
});

client.mongoose.init();
client.login(process.env.token);