module.exports = {
	commands: ['seatgeek'],
	expectedArgs: '',
	permissionError: '',
	minArgs: 0,
	maxArgs: 0,
	callback: (message, args, text) => {
		message.reply('SeatGeek is an amazing app that helps you buy tickets in the easiest way possible. So please if you ever need to buy tickets to any event click the link in my description and use the promo code “David” to get $20 off your first purchase!')
	},
	permissions: [],
	requiredRoles: [],
}