import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  months: { type: Number, required: true }, // Store only total months
});

const Experience = mongoose.model("Experience", experienceSchema);
export default Experience;
