require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Database Connection
require('./config/mongoose-conection');

// PROPER CORS: Essential for React + Cookies
app.use(cors({
    origin: 'http://localhost:5173', // Change this to your React port if different
    credentials: true,               // Allows the "token" cookie to pass through
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route Mounting
const usersRouter = require('./routes/usersRouter');
app.use('/users', usersRouter);

app.listen(3000, () => console.log('🚀 New Steps Server: http://localhost:3000'));