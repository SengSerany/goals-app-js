const express = require('express');
const dotenv = require('dotenv').config();
const portNumber = process.env.PORT_NUMBER || 5000;

const app = express()

app.get('/api/goals', (req, res) => {
    res.status(200).json({message: 'Get Goals'});
});

app.listen(portNumber, () => {
    console.log(`Server is online on port ${portNumber}`)
});