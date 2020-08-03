module.exports = {
	commands: ['ping'],
	expectedArgs: '',
	permissionError: '',
	minArgs: 0,
	maxArgs: 0,
	permissions: [],
	requiredRoles: [],
	callback: (message, args, text) => {
		message.reply('Pinging...')
		.then((msg) => {
			msg.edit("Pong! " + (Date.now() - msg.createdTimestamp))
	});
}
}
