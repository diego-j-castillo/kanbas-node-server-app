import model from "./model.js";
export const createQuiz = (quiz) => {
  delete quiz._id;
  return model.create(quiz);
};
export const findQuizByCourse = (course) =>  model.find({ course: course });
export const findQuizById = (quizId) => model.findById(quizId);
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });