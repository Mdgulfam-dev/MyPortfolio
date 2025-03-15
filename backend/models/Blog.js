import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, default: "Md Gulfam" }, // Default author name
    tags: [String], // Array of tags for categorization
    image: { type: String, default: "" }, // Featured image
    published: { type: Boolean, default: false }, // Publish status
  },
  { timestamps: true } // Auto add createdAt & updatedAt
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
