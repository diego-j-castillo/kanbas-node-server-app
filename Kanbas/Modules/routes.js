import * as dao from "./dao.js"

function ModuleRoutes(app) {
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    // const moduleIndex = Database.modules.findIndex((m) => m._id === mid);
    // Database.modules[moduleIndex] = { ...Database.modules[moduleIndex], ...req.body };
    await dao.updateModule(mid, req.body);
    res.sendStatus(204);
  });
  app.delete("/api/modules/:mid", async (req, res) => {
    const {mid} = req.params;
    // Database.modules = Database.modules.filter((m) => m._id !== mid);
    await dao.deleteModule(mid);
    res.sendStatus(200);
  });
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const {cid} = req.params;
    // const newModule = {
    //   ...req.body, course: cid,
    //   _id: new Date().getTime().toString(),
    // };
    // Database.modules.push(newModule);
    const newModule = await dao.createModule({...req.body, course: cid});
    res.send(newModule);
  });
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const {cid} = req.params;
    // const modules = Database.modules.filter((m) => m.course === cid);
    const modules = await dao.findModulesByCourse(cid);
    res.json(modules);
  });
}
export default ModuleRoutes;