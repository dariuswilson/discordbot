const Discord = require('discord.js');
const economy = require('../../economy')

module.exports = {
  commands: ['balance', 'bal'],
  maxArgs: 1,
  expectedArgs: "[Target user's @]",
  callback: async (message, args, text) => {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const coins = await economy.getCoins(guildId, userId)

    const embed = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag)
      .setThumbnail(message.author.avatarURL())
      .setColor(0x00FF00)
      .setDescription(`That user has ${coins} coins!`);
      message.channel.send(embed)
  },
}