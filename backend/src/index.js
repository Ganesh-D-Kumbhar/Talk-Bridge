import express from "express"
import authRoutes from "../src/routes/auth.route.js"
import messageRoutes from "../src/routes/message.route.js"
import dotenv from "dotenv"
import { connectDB } from "../src/lib/db.js"
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config();
const app = express();
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use(cors(
 { origin: "http://localhost:5173",
  credentials: true
 }
  
))

const PORT = process.env.PORT
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running at: ")
  console.log(`http://localhost:${PORT}`)
})
