import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String], // List of technologies used
    image: { type: String, default: "" }, // Project thumbnail
    link: { type: String, required: true }, // Project live/demo link
    github: { type: String, default: "" }, // GitHub repository link
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
