import * as dao from "./dao.js";
export default function QuizRoutes(app) {
  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const {cid} = req.params;
    const newQuiz = await dao.createQuiz({...req.body, course: cid});
    res.json(newQuiz);
  });
  app.get("/api/courses/:cid/quizzes", async (req, res) => {
    const {cid} = req.params;
    const quizzes = await dao.findQuizByCourse(cid);
    res.json(quizzes);
  });
  app.delete("/api/quizzes/:qid", async (req, res) => {
    const {qid} = req.params;
    await dao.deleteQuiz(qid);
    res.sendStatus(200);
  });
  app.put("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    await dao.updateQuiz(qid, req.body);
    res.sendStatus(204);
  });
  app.get("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.findQuizById(qid);
    res.json(quiz);
  });
};