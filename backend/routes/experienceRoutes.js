import express from "express";
import Experience from "../models/Experience.js";

const experienceRouter = express.Router();

// ✅ GET Experience (Returns Years & Months)
experienceRouter.get("/", async (req, res) => {
  try {
    const experience = await Experience.findOne();
    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    // Convert total months into years & months
    const years = Math.floor(experience.months / 12);
    const months = experience.months % 12;

    res.json({ years, months, totalMonths: experience.months });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ POST - Add/Update Experience
experienceRouter.post("/", async (req, res) => {
  const { years, months } = req.body;
  if (years === undefined || months === undefined) {
    return res.status(400).json({ message: "Years and months are required" });
  }

  const totalMonths = years * 12 + months; // Convert years into months

  try {
    let existingExperience = await Experience.findOne();
    if (existingExperience) {
      existingExperience.months = totalMonths;
      await existingExperience.save();
      return res.status(200).json({ 
        message: "Experience updated successfully!", 
        years, 
        months, 
        totalMonths 
      });
    }

    const newExperience = new Experience({ months: totalMonths });
    await newExperience.save();
    res.status(201).json({ 
      message: "Experience added successfully!", 
      years, 
      months, 
      totalMonths 
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding experience", error: error.message });
  }
});

export default experienceRouter;
