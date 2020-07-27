exports.run = (client, message, args) => {
	message.channel.send('SeatGeek is an amazing app that helps you buy tickets in the easiest way possible. So please if you ever need to buy tickets to any event click the link in my description and use the promo code “David” to get $20 off your first purchase').catch(console.error);
};

exports.help ={
	name: 'seatgeek'
}