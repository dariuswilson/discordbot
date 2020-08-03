const Discord = require('discord.js');
const economy = require('../../economy')
const response = require('../../response.json')
const talkedRecently = new Set();

module.exports = {
    commands: ['work'],
    callback: async (message, args, text) => {
if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000,
        }).then(collected => {

  (collected.first().content === commands) {
            const newCoins = await economy.addCoins(userId, coins)
            const math = Math.floor(Math.random() * 150) + 1;
            message.channel.send(response[Math.floor(Math.random() * response.length)]);
      // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
  }
}
    }
  }