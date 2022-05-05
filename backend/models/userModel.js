const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'A name must be provided']
    },
    email: {
        type: String,
        require: [true, 'An email must be provided'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'A password must be provided']
    }
}, {
    Timestamps: true
})

module.exports = mongoose.model('User', userSchema)