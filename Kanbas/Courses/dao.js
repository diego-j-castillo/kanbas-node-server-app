import model from "./model.js";
export const createCourse = (course) => {
  delete course._id;
  model.create(course);
};
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });
