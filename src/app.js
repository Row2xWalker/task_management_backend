// src/app.js
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { protect } = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorHandler')

const app = express();
app.use(cors());

//Logging
const logDirectory = path.join(__dirname, '../logs');
if (!fs.existsSync(logDirectory)) fs.mkdirSync(logDirectory);
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev'));

app.use(express.json())
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tasks', protect, taskRoutes);

// Health check endpoint
app.get('/', (req, res) => res.send('API is running...'));

app.use(errorHandler)

module.exports = app;