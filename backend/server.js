import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import blogRouter from "./routes/blogRoute.js";
import workRouter from "./routes/workRoute.js";
import projectRouter from "./routes/projectRoute.js";
import SkillRouter from "./routes/skillRoute.js";
import ContactRouter from "./routes/contactRoute.js";
// import experienceRouter from "./routes/experienceRoutes.js";
import experienceRouter from "./routes/experienceRoutes.js";



dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
// app.use(cors());
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(
  cors({
    origin: ["http://localhost:5173", "https://my-portfolio-frontend-ten.vercel.app"], // Allow local and deployed frontend
    credentials: true, // Allow cookies and auth headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed request methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.use(express.json());

// Use API Routes
app.use("/api/blogs", blogRouter);
app.use("/api/work", workRouter);
app.use("/api/projects", projectRouter);
app.use("/api/skills", SkillRouter);
app.use("/api/contact", ContactRouter);
app.use("/api/experience", experienceRouter);
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
