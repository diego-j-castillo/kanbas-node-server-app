import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
  quizType: {
    type: String,
    enum: ["GRADED QUIZ", "PRACTICE QUIZ", "GRADED SURVEY", "UNGRADED SURVEY"],
    default: "GRADED QUIZ",},
  points: Number,
  assignmentGroup: {
    type: String,
    enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
    default: "QUIZZES",},
  shuffleAnswers: {
    type: Boolean,
    default: true,},
  timeLimit: {
    type: Number,
    default: 20, },
  multipleAttempts: {
    type: Boolean,
    default: false,}, 
  showCorrectAnswers: Boolean,
  showDate: Date,
  accessCode: {
    type: String,
    default: ""},
  oqaat: {
    type: Boolean,
    default: true,},
  webcamRequired: {
    type: Boolean,
    default: false,},
  lockQuestions: {
    type: Boolean,
    default: false,},
  dueDate: Date,
  availableDate: Date,
  untilDate: Date, 
  lessons,
},
{ collection: "quizzes" })
export default quizSchema;