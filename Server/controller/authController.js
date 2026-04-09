
const userModel = require('../model/user');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/ganrateToken')


// REGISTER USER

module.exports.registerUser = async (req, res) => {
    try {
        const { email, password, fullname } = req.body;

        let user = await userModel.findOne({ email });
        if (user) return res.status(409).json({ message: "ACCOUNT ALREADY EXISTS" });

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        let newUser = await userModel.create({
            email,
            password: hash,
            fullname
        });

        let token = generateToken(newUser);
        res.cookie("token", token, { httpOnly: true, sameSite: 'lax' });
        
        res.status(201).json({ message: "SUCCESS" });
    } catch (err) {
        res.status(500).json({ message: "REGISTRATION FAILED" });
    }
};

module.exports.loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await userModel.findOne({ email });
        
        if (!user) return res.status(401).json({ message: "INVALID EMAIL OR PASSWORD" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "INVALID EMAIL OR PASSWORD" });

        let token = generateToken(user);
        res.cookie("token", token, { httpOnly: true, sameSite: 'lax' });
        
        res.status(200).json({ message: "SUCCESS" });
    } catch (err) {
        res.status(500).json({ message: "LOGIN ERROR" });
    }
};
// Add to your authController.js
module.exports.getProfile = async (req, res) => {
    try {
        // req.user was already populated by the isloggedin middleware
        res.status(200).json({ user: req.user });
    } catch (err) {
        res.status(500).json({ message: "SERVER_ERROR" });
    }
};

// Update your logout controller for React
module.exports.logoutuser = (req, res) => {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ message: "LOGGED_OUT" });
};