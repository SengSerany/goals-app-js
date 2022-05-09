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

    // Check if user already exist
    const isUserExist = await User.findOne({ email })

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
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
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
            email: user.email,
            token: generateToken(user.id)

        });
    } else {
        res.status(400);
        throw new Error('Your email or/and your password is wrong');
    };

})

// @desc     Get user data
// @route    GET /api/users/me
// @access   Private
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        name,
        email
    })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}