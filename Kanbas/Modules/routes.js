import * as dao from "./dao.js"

function ModuleRoutes(app) {
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.updateModule(mid, req.body);
    res.sendStatus(204);
  });
  app.delete("/api/modules/:mid", async (req, res) => {
    const {mid} = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(200);
  });
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const {cid} = req.params;
    const newModule = await dao.createModule({...req.body, course: cid});
    res.send(newModule);
  });
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const {cid} = req.params;
    const modules = await dao.findModulesByCourse(cid);
    res.json(modules);
  });
}
export default ModuleRoutes;