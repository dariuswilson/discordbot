const mongoose = require('mongoose');
// const { mongoPath } = require('./config.json')

const mongoPath = 'mongodb+srv://Darius:oldspice123@discordbot.3bz6j.mongodb.net/discordbot?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return mongoose
}