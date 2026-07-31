const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log(process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDatabase;