import mongoose from "mongoose";
import dotevn from "dotenv"
dotevn.config();
export const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully: ")

  }
  catch(error){
    console.log("Connection failed")
    console.error(error)
  }
}