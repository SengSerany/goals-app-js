const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A name must be provided']
    },
    email: {
        type: String,
        required: [true, 'An email must be provided'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'A password must be provided']
    }
}, {
    Timestamps: true
})

module.exports = mongoose.model('User', userSchema)