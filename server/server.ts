import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Dentistry, Midwifery, Anesthesia, Doctor, CommonMedicalPractice } from './models/questionModels.js'
import connectDB from './config/db.js'

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