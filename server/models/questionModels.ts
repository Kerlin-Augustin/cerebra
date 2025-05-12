import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
  difficulty: { type: Number, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
})

export const Dentistry = mongoose.model('Dentistry', questionSchema, 'Dentistry')
export const Midwifery = mongoose.model('Midwifery', questionSchema, 'Midwifery')
export const Anesthesia = mongoose.model('Anesthesia', questionSchema, 'Anesthesia')
export const Doctor = mongoose.model('Doctor', questionSchema, 'Doctor')
export const CommonMedicalPractice = mongoose.model('Common Medical Practice', questionSchema, 'Common Medical Practice')

// export default { Dentistry, Midwifery, Anesthesia, Doctor, CommonMedicalPractice }