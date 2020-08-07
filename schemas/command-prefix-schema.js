const mongoose = require('mongo');

const commandPrefixSchema = mongoose.Schema({
	// Guild ID
	_id: {
		type: String,
		required: true,
	},

	prefix: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('guild-prefixes', commandPrefixSchema);