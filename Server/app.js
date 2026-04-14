require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Database Connection
require('./config/mongoose-conection');

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,               
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route Mounting
const usersRouter = require('./routes/usersRouter');
app.use('/users', usersRouter);

app.listen(3000, () => console.log('🚀 New Steps Server: http://localhost:3000'));