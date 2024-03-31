import "dotenv/config";
import express from 'express';
import cors from "cors";
import session from 'express-session';
import mongoose from 'mongoose';
import UserRoutes from './Kanbas/Users/routes.js';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';
import SessionRoutes from "./SessionRoutes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, sameSite: false }
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
SessionRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);