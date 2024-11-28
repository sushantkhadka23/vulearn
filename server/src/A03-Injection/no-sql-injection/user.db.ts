import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    const dbUri = process.env.MONGODB_URI;
  
    if (!dbUri) {
      throw new Error("MongoDB URI is not defined in the .env file");
    }
    await mongoose.connect(dbUri);
};
export default connectDB;
