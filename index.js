const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap');
const { prefix } = require('./config.json');
const mongoose = require('mongoose');

client.commands = new Enmap();

mongoose.connect('mongodb+srv://Darius:oldspice123@discordbot.3bz6j.mongodb.net/Data', { userNewUrlParser: true, useUnifiedTopology: true });

client.once('ready', ()=> {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

	if (message.author.bot) return;
	if (message.content.indexOf(prefix) !== 0) return;

	const args = message.content.slice(prefix.length).trim().split(/ + /g);
	const command = args.shift().toLowerCase();

	const cmd = client.commands.get(command);
	if (!cmd) return;

	cmd.run(client, message, args);
});

// Everything above can be editted.
fs.readdir('./commands/', async (err, files) => {
	if (err) return console.error;
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		const props = require(`./commands/${file}`);
		const cmdName = file.split('.')[0];
		console.log(`Loaded command  '${cmdName}'.`);
		client.commands.set(cmdName, props);
	});
});

client.login(process.env.token);