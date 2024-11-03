import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Get the connection string from env
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    // Create mongoose connection
    const connection = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
      family: 4, // Force IPv4
      retryWrites: true,
      w: "majority",
    });

    console.log("MongoDB Connected Successfully");
    return connection;
  } catch (error) {
    console.error("Connection error:", {
      name: error.name,
      message: error.message,
      stack: error.stack?.split("\n"),
    });
    process.exit(1);
  }
};

export default connectDB;
