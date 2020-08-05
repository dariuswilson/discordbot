const mongo = require('./mongo');
const profileSchema = require('./schemas/profile-schema');

const coinsCache = {}; // { 'guildId-userId': coins }

module.exports = (client) => {};

module.exports.addCoins = async (userId, coins) => {
	return await mongo().then(async (mongoose) => {
		try {
			console.log('Running findOneAndUpdate()');

			const result = await profileSchema.findOneAndUpdate(
				{
					userId,
				},
				{
					userId,
					$inc: {
						coins,
					},
				},
				{
					upsert: true,
					new: true,
				},
			);

			console.log('RESULT:', result);

			coinsCache[`${userId}`] = result.coins;

			return result.coins;
		} finally {
			mongoose.connection.close();
		}
	});
};

module.exports.getCoins = async (userId) => {
	const cachedValue = coinsCache[`${userId}`];
	if (cachedValue) {
		return cachedValue;
	}

	return await mongo().then(async (mongoose) => {
		try {
			console.log('Running findOne()');

			const result = await profileSchema.findOne({
				userId,
			});

			console.log('RESULT:', result);

			let coins = 0;
			if (result) {
				coins = result.coins;
			} else {
				console.log('Inserting a document');
				await new profileSchema({
					userId,
					coins,
				}).save();
			}

			coinsCache[`${userId}`] = coins;

			return coins;
		} finally {
			mongoose.connection.close();
		}
	});
};

module.exports.dailyCoins = async (userId, coins, rundate) => {
	return await mongo().then(async (mongoose) => {
		try {
			console.log('Running findOneAndUpdate()');

			const result = await profileSchema.findOneAndUpdate(
				{
					userId,
				},
				{
					userId,
					$inc: {
						coins,
					},
					rundate,
				},
				{
					upsert: true,
					new: true,
				},
			);

			console.log('RESULT:', result);

			coinsCache[`${userId}`] = result.coins;

			return result.coins;
		} finally {
			mongoose.connection.close();
		}
	});
};