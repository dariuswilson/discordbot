const Discord = require('discord.js');
const economy = require('../../economy')


module.exports = {
    commands: ['pay'],
    maxArgs: 1,
    expectedArgs: "[Target user's @]",
    callback: async (message, args, text) => {
const currentAmount = economy.getBalance(message.author.id);
const transferAmount = commandArgs.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
const transferTarget = message.mentions.users.first();

if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`);
if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author}, you only have ${currentAmount}.`);
if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

economy.add(message.author.id, -transferAmount);
economy.add(transferTarget.id, transferAmount);

return message.channel.send(`Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${economy.getBalance(message.author.id)}💰`);
    }
}