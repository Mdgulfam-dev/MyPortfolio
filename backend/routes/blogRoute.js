import express from "express";
import Blog from "../models/Blog.js";

const blogRouter = express.Router();

// 📌 Get all blogs
blogRouter.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

// 📌 Create a new blog
blogRouter.post("/", async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: "Error adding blog" });
  }
});

export default blogRouter;
