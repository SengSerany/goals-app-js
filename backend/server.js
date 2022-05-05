const express = require('express');
require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const portNumber = process.env.PORT_NUMBER || 5000;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(portNumber, () => {
    console.log(`Server is online on port ${portNumber}`)
});