import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-12 px-6 relative overflow-hidden">
      {/* Background Glow Effect */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Branding Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white">Md Gulfam</h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Full-Stack Developer | MERN Stack | API Performance Expert
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {["Home", "About", "Work", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:tracking-widest"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-xl font-semibold text-white">Connect with Me</h3>
          <div className="flex justify-center md:justify-start gap-6 mt-3">
            {[
              { icon: Mail, link: "mailto:mdgulfam0505@gmail.com" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/md-gulfam-364ab5212 " },
              { icon: Github, link: "https://github.com/Mdgulfam-dev" },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Icon
                  size={28}
                  className="text-gray-400 group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Md Gulfam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
