const path = require('path');
const express = require('express');
require('dotenv').config();
require('colors');
const { errorHandler } = require('./middleware/errorMiddleware')
const portNumber = process.env.PORT_NUMBER || 5000;
const connectDB = require('./config/db');

connectDB()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend
if (process.env.NODE_ENVIRONNEMENT === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send("App is under construction..."));
}

app.use(errorHandler)

app.listen(portNumber, () => {
    console.log(`Server is online on port ${portNumber}`)
});