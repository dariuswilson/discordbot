// const Discord = require('discord.js');


// module.exports = {
//     commands: ['pay'],
//     minArgs: 1,
//     expectedArgs: ["Use !pay [target user's @] [Amount of coins]"],
//     callback: async (message, args, text) => {
// const economy = require('../../economy')
// const currentAmount = economy.getBalance(message.author.id);
// const transferAmount = commandArgs.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
// const transferTarget = message.mentions.users.first();

// if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`);
// if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author}, you only have ${currentAmount}.`);
// if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

// economy.add(message.author.id, -transferAmount);
// economy.add(transferTarget.id, transferAmount);

// return message.channel.send(`Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${economy.getBalance(message.author.id)}💰`);
//     }
// }
// console.log(transferAmount)