const Discord = require('discord.js');
const bot = new Discord.Client();
const botsettings = require('./botsettings.json');
const fs = require('fs');
const { brotliCompress } = require('zlib');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Darius:oldspice123@discordbot.3bz6j.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true });

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}


bot.once('ready', () => { 
	console.log('I am online!');
});

bot.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'ping') {
		client.commands.get('ping').execute(message, args);
	}
})


bot.login(process.env.token);