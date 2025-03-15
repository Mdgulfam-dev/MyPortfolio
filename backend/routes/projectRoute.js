import express from "express";
import Project from "../models/Project.js";

const projectRouter = express.Router();

// 📌 Get all projects
projectRouter.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
});

// 📌 Create a new project
projectRouter.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Error adding project" });
  }
});

export default projectRouter;
