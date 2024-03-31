import mongoose from "mongoose";
const ModuleSchema = mongoose.Schema({
    name: String,
    description: String,
    course: String,
    lessons:  
      {
        name: String,
        description: String,
      }
  },
  {collection: "modules"});
export default ModuleSchema;