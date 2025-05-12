import mongoose from "mongoose";
import { Dentistry } from "../models/questionModels.js";
import connectDB from "../config/db.js";

const seedDentistryQuestions = async () => {
  await connectDB()

  // delete every collection in the dentisty collection
  // await Dentistry.deleteMany({})

  await Dentistry.insertMany([
    {
      difficulty: 200,
      question: 'What is plaque?',
      answer: 'A sticky deposit on teeth'
    },
    {
      difficulty: 400,
      question: 'What does a dental hygienist do?',
      answer: 'Cleans teeth and checks for oral disease.'
    },
    {
      difficulty: 600,
      question: 'What is a root canal?',
      answer: 'A procedure to remove infected pulp.'
    }
  ])

  console.log("Dentistry Questions Seeded")
  process.exit()
}

seedDentistryQuestions()