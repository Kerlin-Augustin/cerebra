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

const questionSchema = new mongoose.Schema({
  question: {
    difficulty: Number,
    question: String,
    answer: String,
  }
})

const Dentistry = mongoose.model('Dentistry', questionSchema, 'Dentistry')
const Midwifery = mongoose.model('Midwifery', questionSchema, 'Midwifery')
const Anesthesia = mongoose.model('Anesthesia', questionSchema, 'Anesthesia')
const Doctor = mongoose.model('Doctor', questionSchema, 'Doctor')
const CommonMedicalPractice = mongoose.model('Common Medical Practice', questionSchema, 'Common Medical Practice')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// middelware
app.use(cors())
app.use(express.json())

// connect to MongoDB
connectDB()

app.get('/api/categoryQuestion', async (req, res) => {
  try{
    const questions = await Dentistry.find({})
    res.json(questions)
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})