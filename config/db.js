const mongoose = require("mongoose");
// require dotenv to use environment variables
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
