const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const botsettings = require('./botsettings.json');
const fs = require('fs');
const { brotliCompress } = require('zlib');
require('./util/eventHandler')(bot);
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {

	if(err) console.log(err);

	const jsfile = files.filter(f => f.split('.').pop() === 'js');
	if(jsfile.length <= 0) {
		return console.log('[LOGS] Couldn\'t Find Commands!');
	}

	jsfile.forEach((f, i) => {
		const pull = require(`./commands/${f}`);
		bot.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			bot.aliases.set(alias, pull.config.name);
		});
	});
});

bot.on('message', async message => {
	if(message.author.bot || message.channel.type === 'dm') return;

	const prefix = botsettings.prefix;
	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = message.content.substring(message.content.indexOf(' ') + 1);

	if(!message.content.startsWith(prefix)) return;
	const commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
	if(commandfile) commandfile.run(bot, message, args);

});


bot.login(process.env.token);