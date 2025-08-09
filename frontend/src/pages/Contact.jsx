// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, Linkedin, Github } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const response = await fetch("https://myportfolio-1-cs1j.onrender.com/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("Failed to send message. Try again.");
//       }
//     } catch (error) {
//       setStatus("An error occurred. Try again.");
//     }
//   };

//   return (
//     <section className="w-full bg-[#0A0A0A] text-white py-20 px-6">
//       <div className="container mx-auto max-w-4xl text-center mt-20">
//         <motion.h2
//           className="text-5xl font-bold text-gray-100 mb-6"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Get in Touch
//         </motion.h2>
//         <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//           I'm open to job opportunities, collaborations, and networking. Feel free to reach out!
//         </p>
//       </div>

//       {/* Contact Details */}
//       <div className="flex flex-wrap justify-center gap-6 mt-10">
//         <div className="flex items-center gap-3 bg-[#1A1A1A] p-4 rounded-lg shadow-md">
//           <Mail size={24} className="text-yellow-400" />
//           <a href="mailto:mdgulfam@example.com" className="text-gray-300 hover:text-white">
//             mdgulfam0505@gmail.com
//           </a>
//         </div>
//         <div className="flex items-center gap-3 bg-[#1A1A1A] p-4 rounded-lg shadow-md">
//           <Phone size={24} className="text-yellow-400" />
//           <a href="tel:+919001402531" className="text-gray-300 hover:text-white">
//             +91 900 140 2531 
//           </a>
//         </div>
//       </div>

//       {/* Social Links */}
//       <div className="flex justify-center gap-6 mt-6">
//         <a href="https://www.linkedin.com/in/md-gulfam-364ab5212 " target="_blank" rel="noopener noreferrer">
//           <Linkedin size={32} className="text-gray-300 hover:text-white transition" />
//         </a>
//         <a href="https://github.com/Mdgulfam-dev" target="_blank" rel="noopener noreferrer">
//           <Github size={32} className="text-gray-300 hover:text-white transition" />
//         </a>
//       </div>

//       {/* Contact Form */}
//       <motion.div
//         className="mt-12 bg-[#1A1A1A] p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Send a Message</h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows="4"
//             className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//         {status && <p className="text-gray-400 mt-2">{status}</p>}
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;





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
      const response = await fetch("https://myportfolio-1-cs1j.onrender.com/api/contact", {
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
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 px-6 overflow-hidden">
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[450px] h-[450px] bg-gradient-to-br from-purple-600/20 to-pink-500/20 blur-3xl rounded-full"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I'm open to job opportunities, collaborations, and networking. Feel free to reach out!
        </motion.p>
      </div>

      {/* Contact Details */}
      <div className="flex flex-wrap justify-center gap-8 mt-14 max-w-3xl mx-auto">
        {[
          {
            icon: Mail,
            label: "Email",
            value: "mdgulfam0505@gmail.com",
            href: "mailto:mdgulfam0505@gmail.com",
          },
          {
            icon: Phone,
            label: "Phone",
            value: "+91 900 140 2531",
            href: "tel:+919001402531",
          },
        ].map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={i}
            href={href}
            className="flex items-center gap-4 bg-[#1A1A1A] hover:bg-yellow-500/10 rounded-xl p-5 shadow-lg border border-yellow-400/20 transition"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            <Icon size={28} className="text-yellow-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm text-yellow-400 font-semibold">{label}</p>
              <p className="text-gray-300 font-medium">{value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-10 mt-10">
        {[
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/md-gulfam-364ab5212",
            label: "LinkedIn",
          },
          {
            icon: Github,
            href: "https://github.com/Mdgulfam-dev",
            label: "GitHub",
          },
        ].map(({ icon: Icon, href, label }, i) => (
          <motion.a
            key={i}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 + i * 0.15 }}
          >
            <Icon size={36} />
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        className="mt-16 bg-[#1A1A1A] p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Send a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 bg-gray-900 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 bg-gray-900 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-5 py-3 bg-gray-900 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-yellow-500/50 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
        {status && (
          <motion.p
            className="text-center text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {status}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
