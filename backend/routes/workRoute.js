import express from "express";
import Work from "../models/Work.js";

const workRouter = express.Router();

// 📌 Get all work experiences
workRouter.get("/", async (req, res) => {
  try {
    const workExperiences = await Work.find();
    res.json(workExperiences);
  } catch (error) {
    res.status(500).json({ message: "Error fetching work experiences" });
  }
});

// 📌 Create a new work experience
workRouter.post("/", async (req, res) => {
  try {
    const newWork = new Work(req.body);
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(500).json({ message: "Error adding work experience" });
  }
});

export default workRouter;
