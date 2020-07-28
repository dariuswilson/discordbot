const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}
const profileSchema = mongoose.Schema({
    guildId: String,
    UserId: reqString,
    coins: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('profiles', profileSchema)