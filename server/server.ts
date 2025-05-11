import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose";

const connectDB = async () => {
  try{
    const connect = await mongoose.connect(process.env.MONGO_URI || '')
    // console.log(`MongoDB connected: ${connect.connection.host}`)
  } catch (err) {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  }
}

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// middelware
app.use(cors())
app.use(express.json())

// connect to MongoDB
connectDB()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})