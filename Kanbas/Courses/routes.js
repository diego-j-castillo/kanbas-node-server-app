import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses/:id", async (req, res) => {
    const {id} = req.params;
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;      
    }
    res.json(course);
  });
  app.put("/api/courses/:id", async (req, res) => {
    const {id} = req.params;
    const oldCourse = await dao.findCourseById(id);
    if (!oldCourse) {
      res.status(400).json(
        { message: "Course not found" });
    }
    const course = req.body;
    await dao.updateCourse(id, course);
    res.sendStatus(204);
  });
  app.delete("/api/courses/:id", async (req, res) => {
    const {id} = req.params;
    // Database.courses = Database.courses.filter ((c) => c._id !== id);
    await dao.deleteCourse(id);
    res.sendStatus(204);
  });
  app.post("/api/courses", async (req, res) => {
    // const course = {...req.body, 
    //   _id: new Date().getTime().toString() };
    // Database.courses.push(course);
    const course = await dao.createCourse(req.body);
    res.json(course);
  });
  app.get("/api/courses", async (req, res) => {
    // const courses = Database.courses;
    const courses = await dao.findAllCourses();
    res.send(courses);
  });
}