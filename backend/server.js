const express = require('express');
require('dotenv').config();
const portNumber = process.env.PORT_NUMBER || 5000;

const app = express()

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(portNumber, () => {
    console.log(`Server is online on port ${portNumber}`)
});