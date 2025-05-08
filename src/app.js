// src/app.js
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler')

const app = express();

//Logging
const logDirectory = path.join(__dirname, '../logs');
if(!fs.existsSync(logDirectory)) fs.mkdirSync(logDirectory);
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a'})

app.use(morgan('combined', { stream: accessLogStream}));
app.use(morgan('dev')); 

app.use(express.json())

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/', (req, res) => res.send('API is running...'));

module.exports = app;