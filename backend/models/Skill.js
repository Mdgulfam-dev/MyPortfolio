import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g., Frontend, Backend, Tools
  skills: { type: [String], required: true }  // Array of skills under each category
});

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
