import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const todoSchema = new Schema({
  text: String,
  have: Boolean,
})

// Compile the schema into a model and export it
const Skill = mongoose.model('Skill', todoSchema)

export {
  Skill
}