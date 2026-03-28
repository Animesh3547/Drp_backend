import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://asofficial3547_db_user:hLZzJ33pbq@cluster0.rquzivm.mongodb.net/?appName=Cluster0");

    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1);
  }
};
