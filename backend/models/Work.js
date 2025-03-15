import mongoose from "mongoose";

const workSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    duration: { type: String, required: true }, // Example: "Jan 2025 - Present"
    location: { type: String, default: "Remote" }, // Default location
    description: { type: String, required: true }, // Role description
    technologies: [String], // Tech stack used in the job
  },
  { timestamps: true }
);

const Work = mongoose.model("Work", workSchema);
export default Work;
