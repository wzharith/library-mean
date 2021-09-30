const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/library';

function init() {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const connection = mongoose.connection;
    connection.on('error', () => {
        console.error('Connection error');
    });

    connection.on('open', () => {
        console.log('Connected to database');
    });
}

module.exports = {
    init,
}