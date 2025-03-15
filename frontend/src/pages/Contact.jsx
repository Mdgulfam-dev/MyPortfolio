import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Try again.");
    }
  };

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center mt-20">
        <motion.h2
          className="text-5xl font-bold text-gray-100 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          I'm open to job opportunities, collaborations, and networking. Feel free to reach out!
        </p>
      </div>

      {/* Contact Details */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div className="flex items-center gap-3 bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <Mail size={24} className="text-yellow-400" />
          <a href="mailto:mdgulfam@example.com" className="text-gray-300 hover:text-white">
            mdgulfam0505@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <Phone size={24} className="text-yellow-400" />
          <a href="tel:+919876543210" className="text-gray-300 hover:text-white">
            +91 900 140 2531 
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://www.linkedin.com/in/md-gulfam-364ab5212 " target="_blank" rel="noopener noreferrer">
          <Linkedin size={32} className="text-gray-300 hover:text-white transition" />
        </a>
        <a href="https://github.com/Mdgulfam-dev" target="_blank" rel="noopener noreferrer">
          <Github size={32} className="text-gray-300 hover:text-white transition" />
        </a>
      </div>

      {/* Contact Form */}
      <motion.div
        className="mt-12 bg-[#1A1A1A] p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="text-gray-400 mt-2">{status}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
