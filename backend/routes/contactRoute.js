import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const ContactRouter = express.Router();

ContactRouter.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate Input
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create Email Transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Set in .env file
        pass: process.env.EMAIL_PASS, // Use generated App Password
      },
    });

    // Define Email Options
    let mailOptions = {
      from: `"${name}" <${email}>`, // Shows sender's name in email
      to: process.env.EMAIL_USER, // Ensures messages go to your email
      replyTo: email, // Allows direct replies to the sender
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send Email & Log Response
    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    res.status(200).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ message: "Failed to send message", error: error.message });
  }
});

export default ContactRouter;
