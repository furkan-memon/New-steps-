require('dotenv').config(); // <--- ADD THIS AT THE TOP
const mongoose = require('mongoose');

const clientOptions = { 
    serverApi: { version: '1', strict: true, deprecationErrors: true } 
};

async function connectDB() {
  try {
    // Debugging: This will tell us if the variable is actually loading
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing from your .env file!");
    }

    await mongoose.connect(process.env.MONGODB_URI, clientOptions);
    console.log("✅ You successfully connected to MongoDB!");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); 
  }
}

connectDB();

module.exports = mongoose.connection;