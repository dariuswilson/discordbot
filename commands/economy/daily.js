const Discord = require('discord.js');
const economy = require('../../economy');
const { db } = require('../../schemas/profile-schema');

module.exports = {
    commands: 'daily',

    callback: async (message, args, text) => {
        var timeout = 86400000
        var amount = 5

        var daily = await db.fetch(`daily_${message.guild.id}_${user.id}`)

        if(daily !== null && timeout - (Date.now() - daily) > 0 {
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`You have already collected your daily coins! Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`Successfully added ${amount} coins to your account!`)
        }
    }
}
