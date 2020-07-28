const mongoose = require('mongoose');

module.exports = {
init: () => {
    const dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 500,
        poolSize: 5,
        connectTimeoutMS: 10000,
        family: 4
    };
    mongoose.connect('mongodb+srv://Darius:oldspice123@discordbot.3bz6j.mongodb.net/Data', 'dbOptions');
    mongoose.set('UseFindAndModify', false);
    mongoose.Promise = global.Promise;

    mongoose.connection.on('connected', () => 
    console.log('Mongoose hassuccessfully connected!');

    mongoose.connection.on('err', err =>
    console.log(`Mongoose connection error: \n${err.stack}`));
    });

    mongoose.connection.on('disconnected', ()=> 
    console.warn('Mongoose connection lost');
})
}
}