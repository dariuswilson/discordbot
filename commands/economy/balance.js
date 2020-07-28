const economy = require('../../economy')

module.exports = {
    commands: ['balance', 'bal'],
    maxArgs: 1,
    expectedArgs: "[Target user's @]",
    callback: (message) => {
        const target = message.mentions.users.first() || message.author
        const targetId = target.targetId
        
        const guildId = message.guild.guildId
        const userId = target.id

        const coins = await econoomy.getCoins(guildId, userId)

        message.reply(`That user has ${coins} coins!`)
    },
}