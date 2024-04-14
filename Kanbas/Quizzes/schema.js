import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  title: String,
  questionType: String,
  body: String,
  points: Number,
  idx: Number,
  answers: [{}],
});
const quizSchema = new mongoose.Schema({
  quizName: String,
  description: String,
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
  hasTimeLimit: Boolean,
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
  published: Boolean,
  course: String,
  questions: [questionSchema], 
  savedAnswers: {
    type: [Number],
    default: [],}
},
{ collection: "quizzes" })
export default quizSchema;