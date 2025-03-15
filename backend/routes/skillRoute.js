import express from "express";
import Skill from "../models/Skill.js";

const SkillRouter = express.Router();

// 📌 Get all skills
SkillRouter.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error fetching skills data" });
  }
});

// 📌 Add a new skill category (Optional, for Admin use)
SkillRouter.post("/", async (req, res) => {
  try {
    const newSkill = new Skill(req.body);
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(500).json({ message: "Error adding skill category" });
  }
});

export default SkillRouter;
