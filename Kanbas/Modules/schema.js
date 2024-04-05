import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  name: String,
  description: String,
});
const ModuleSchema = mongoose.Schema({
    name: String,
    description: String,
    course: String,
    lessons: [lessonSchema]
  },
  {collection: "modules"});
export default ModuleSchema;