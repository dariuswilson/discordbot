const mongoose = require('mongoose');

const reqString = {
    typeString,
    required: true
}

const userSchema = mongoose.Schema({
    email: reqString,
    username: reqString,
    password: reqstring
})

module.exports = mongoose.model('users', userSchema)