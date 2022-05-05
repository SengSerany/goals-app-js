const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

// @desc     Register new user
// @route    POST /api/users/
// @access   Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("All field must be completed");
    }

    const isUserExist = await User.findOne({ email })

    // Check if user already exist
    if (isUserExist) {
        res.status(400);
        throw new Error("The email is already used");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash( password, salt );

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    // response
    if (user) {
        res.status(400).json({
            _id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    };
})

// @desc     Authenticate a user
// @route    POST /api/users/login
// @access   Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //Check if user exist with email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Your email or/and your password is wrong');
    };

})

// @desc     Get user data
// @route    GET /api/users/me
// @access   Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: "User display data"})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}