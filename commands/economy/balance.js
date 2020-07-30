const Discord = require('discord.js');
const economy = require('../../economy')

module.exports = {
  commands: ['balance', 'bal'],
  maxArgs: 1,
  expectedArgs: "[Target user's @]",
  callback: async (message, args, text) => {
    if(!message.mentions.users.first()) {
      const userId = message.author.id;
      const coins = await economy.getCoins(userId);
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL())
      .setColor(0x00FF00)
      .setDescription(`You have ${coins} coins!`);
      message.channel.send(embed)
      return;
    } else {
      const target = message.mentions.users.first();
      const userId = target.id;
      const coins = await economy.getCoins(userId);
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL())
      .setColor(0x00FF00)
      .setDescription(`${target.tag} has ${coins} coins!`);
      message.channel.send(embed)
      return;
    }
  }
}