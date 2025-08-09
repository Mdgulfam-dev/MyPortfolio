// import { motion } from "framer-motion";
// import { Linkedin, Github, Mail } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0A0A0A] text-gray-300 py-12 px-6 relative overflow-hidden">
//       {/* Background Glow Effect */}
//       <motion.div
//         className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-[150px] rounded-full"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>

//       <motion.div
//         className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-[150px] rounded-full"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>

//       <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-10 text-center md:text-left">
        
//         {/* Branding Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-white">Md Gulfam</h2>
//           <p className="text-sm text-gray-400 mt-2 leading-relaxed">
//             Full-Stack Developer | MERN Stack | API Performance Expert
//           </p>
//         </motion.div>

//         {/* Quick Links Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h3 className="text-xl font-semibold text-white">Quick Links</h3>
//           <ul className="mt-3 space-y-2">
//             {["Home", "About", "Work", "Contact"].map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={`/${item.toLowerCase()}`}
//                   className="text-gray-400 hover:text-white transition-all duration-300 hover:tracking-widest"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Social Media Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           <h3 className="text-xl font-semibold text-white">Connect with Me</h3>
//           <div className="flex justify-center md:justify-start gap-6 mt-3">
//             {[
//               { icon: Mail, link: "mailto:mdgulfam0505@gmail.com" },
//               { icon: Linkedin, link: "https://www.linkedin.com/in/md-gulfam-364ab5212 " },
//               { icon: Github, link: "https://github.com/Mdgulfam-dev" },
//             ].map(({ icon: Icon, link }, index) => (
//               <a
//                 key={index}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group"
//               >
//                 <Icon
//                   size={28}
//                   className="text-gray-400 group-hover:text-white transition-all duration-300 transform group-hover:scale-110"
//                 />
//               </a>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom Section - Copyright */}
//       <div className="text-center text-gray-500 text-sm mt-12">
//         © {new Date().getFullYear()} Md Gulfam. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { motion } from "framer-motion";
// import { Linkedin, Github, Mail } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0A0A0A] text-gray-300 px-4 sm:px-8 py-16 overflow-hidden">
//       {/* Glow Effects */}
//       <motion.div
//         className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-500 opacity-20 blur-[120px] rounded-full"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-[120px] rounded-full"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       />

//       {/* Footer Content */}
//       <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center sm:text-left">
        
//         {/* Branding */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-yellow-400">Md Gulfam</h2>
//           <p className="text-sm text-gray-400 mt-2 leading-relaxed">
//             Full-Stack Developer <br />
//             MERN Stack | API Performance Expert
//           </p>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h3 className="text-xl font-semibold text-yellow-500">Quick Links</h3>
//           <ul className="mt-4 space-y-2 text-sm">
//             {["Home", "About", "Work", "Contact"].map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={`/${item.toLowerCase()}`}
//                   className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:tracking-wider"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Social Media */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           <h3 className="text-xl font-semibold text-yellow-500">Connect</h3>
//           <div className="flex justify-center sm:justify-start gap-6 mt-4">
//             {[
//               { icon: Mail, link: "mailto:mdgulfam0505@gmail.com" },
//               { icon: Linkedin, link: "https://www.linkedin.com/in/md-gulfam-364ab5212" },
//               { icon: Github, link: "https://github.com/Mdgulfam-dev" },
//             ].map(({ icon: Icon, link }, index) => (
//               <a
//                 key={index}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group"
//               >
//                 <Icon
//                   size={26}
//                   className="text-gray-400 group-hover:text-yellow-400 transition-transform duration-300 group-hover:scale-110"
//                 />
//               </a>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom Note */}
//       <div className="relative z-10 mt-12 text-center text-gray-500 text-xs tracking-wider">
//         © {new Date().getFullYear()} Md Gulfam. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import profileImage from "../assets/profileImage.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0A0A] text-gray-300 px-6 sm:px-12 py-16 overflow-hidden">
      {/* Glow Effects */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-500 opacity-20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Footer Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-center">

        {/* Profile Section with Image */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profileImage}// Replace with your actual profile image URL
            alt="Md Gulfam Profile"
            className="w-28 h-28 rounded-full border-4 border-yellow-400 object-cover shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">Md Gulfam</h2>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-xs mx-auto md:mx-0">
              Full-Stack Developer <br />
              MERN Stack | API Performance Expert
            </p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Work", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:tracking-wider"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start gap-8 text-yellow-400">
            {[
              { icon: Mail, link: "mailto:mdgulfam0505@gmail.com", label: "Email" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/md-gulfam-364ab5212", label: "LinkedIn" },
              { icon: Github, link: "https://github.com/Mdgulfam-dev", label: "GitHub" },
            ].map(({ icon: Icon, link, label }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group"
              >
                <Icon
                  size={28}
                  className="text-gray-400 group-hover:text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <div className="relative z-10 mt-12 text-center text-gray-500 text-xs tracking-wider">
        © {new Date().getFullYear()} Md Gulfam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
