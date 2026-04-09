const jwt = require("jsonwebtoken");
const userModel = require("../model/user");

module.exports = async function (req, res, next) {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({ message: "SESSION_EXPIRED" });
        }

        // Ensure this matches your .env (JWT_KEY or JWT_KAY)
        const decoded = jwt.verify(token, process.env.JWT_KEY || process.env.JWT_KAY);

        const user = await userModel.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "USER_NOT_FOUND" });
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ message: "UNAUTHORIZED" });
    }
};