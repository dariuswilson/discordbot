const Discord = require('discord.js');
const bot = new Discord.Client();
const Enmap = require('enmap');
const config = require('./config.json');
const fs = require('fs');
const { brotliCompress } = require('zlib');
require('./util/eventHandler')(bot);
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.commands = new Enmap();

fs.readdir('./commands/', (err, files) => {
	if(err) console.log(err)

	let jsfile = files.filter(f => f.split(".".toUpperCase() === "js"));
	if(jsfile.length <= 0) {
		// eslint-disable-next-line quotes
		return console.log("[LOGS] Couldn't Find Commands!");
	}

	jsfile.forEach((f, i) => {
		let pull = require(`./commands/${f}`);
		bot.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			bot.aliases.set(alias, pull.config.name);
		});
	});
});

bot.on('message', async message => {
	if(message.author.bot || message.channel.type === "dm") return;

	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	if(!message.content.startsWith(prefix)) return;
	let commandfile = bot.commands.get(cmd.slice(prefix.length)) || brotliCompress.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
	if(commandfile) commandfile.run(bot, message, args);
});


bot.login(process.env.token);