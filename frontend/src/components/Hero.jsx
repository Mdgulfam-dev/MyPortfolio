// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { Download, Briefcase } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
// import { useNavigate } from "react-router-dom";
// import profileImage from "../assets/profileImage.png";

// const Hero = () => {
//   const navigate = useNavigate();
//   const [experience, setExperience] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isPending, startTransition] = useTransition();

//   // Convert months into "Years & Months" format
//   const formatExperience = (months) => {
//     if (months === null || months === undefined) return "Loading...";
//     const years = Math.floor(months / 12);
//     const remainingMonths = months % 12;
//     return years > 0
//       ? `${years} yr${years > 1 ? "s" : ""} ${remainingMonths > 0 ? `${remainingMonths} months` : ""}`
//       : `${remainingMonths} months`;
//   };

//   // Fetch experience from API
//   useEffect(() => {
//     startTransition(() => {
//       fetch("https://myportfolio-1-cs1j.onrender.com/api/experience")
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error("Failed to fetch experience");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setExperience(data?.months ?? null);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Error fetching experience:", err);
//           setLoading(false);
//         });
//     });
//   }, []);

//   return (
//     <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white px-6 sm:px-8  overflow-hidden">
//       {/* Background Glows */}
//       <motion.div
//         className="absolute top-[-100px] left-[-100px] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-blue-500 opacity-30 blur-[120px] rounded-full"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         className="absolute bottom-[-100px] right-[-100px] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-purple-500 opacity-30 blur-[120px] rounded-full"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 items-center max-w-6xl w-full z-10">
//         {/* Left Side - Text */}
//         <div className="text-center md:text-left">
//           <motion.h1
//             className="text-4xl sm:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hi, I'm Md Gulfam
//             <br />
//             <span className="inline-block">
//               <Typewriter words={["A Full-Stack Developer", "MERN Stack Enthusiast"]} loop={true} cursor cursorStyle="|" />
//             </span>
//           </motion.h1>

//           {/* Experience + Resume Section */}
//           <motion.div
//             className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, delay: 1 }}
//           >
//             {/* Experience Card */}
//             <motion.div
//               className="p-6 bg-[#1A1A1A] text-white border border-yellow-400/50 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden"
//               whileHover={{ scale: 1.1 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-yellow-400 opacity-10 blur-[50px] rounded-xl"
//                 whileHover={{ opacity: 0.2 }}
//               />

//               <Briefcase size={32} className="text-yellow-400 mx-auto mb-3" />
//               <p className="text-2xl sm:text-4xl font-semibold text-center">
//                 {isPending || loading ? "Loading..." : formatExperience(experience)}
//               </p>
//               <p className="text-sm sm:text-md text-center text-gray-400">Experience</p>
//             </motion.div>

//             {/* Resume Download Button */}
//             <motion.a
//               href="/resume.pdf"
//               download="Md_Gulfam_Resume.pdf"
//               className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden"
//               whileHover={{ scale: 1.1 }}
//             >
//               <Download size={22} />
//               Download Resume
//               <motion.div
//                 className="absolute inset-0 bg-white/10 blur-lg opacity-0 transition-opacity duration-500"
//                 whileHover={{ opacity: 0.2 }}
//               />
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* Right Side - Profile Image */}
//         <motion.div
//           className="flex justify-center md:justify-end mt-10 md:mt-0 relative"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
//         >
//           <img
//             src={profileImage}
//             alt="Md Gulfam - Full Stack Developer"
//             className="w-full max-w-xs sm:max-w-md rounded-xl shadow-2xl drop-shadow-[0px_15px_30px_rgba(255,204,0,0.3)] transition-transform duration-300 hover:scale-105"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { Download, Briefcase, Link } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
// import { useNavigate } from "react-router-dom";
// import profileImage from "../assets/profileImage.png";

// const Hero = () => {
//   const navigate = useNavigate();
//   const [experience, setExperience] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isPending, startTransition] = useTransition();

//   // Convert total months into "Years & Months" format
//   const formatExperience = (totalMonths) => {
//     if (totalMonths === null || totalMonths === undefined) return "Loading...";
//     const years = Math.floor(totalMonths / 12);
//     const months = totalMonths % 12;
//     return years > 0
//       ? `${years} yr${years > 1 ? "s" : ""}${
//           months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""
//         }`
//       : `${months} month${months > 1 ? "s" : ""}`;
//   };

//   // Fetch experience from API
//   useEffect(() => {
//     startTransition(() => {
//       fetch("https://myportfolio-1-cs1j.onrender.com/api/experience")
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error("Failed to fetch experience");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setExperience(data?.totalMonths ?? null); // Use totalMonths from API
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Error fetching experience:", err);
//           setLoading(false);
//         });
//     });
//   }, []);

//   return (
//     <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white px-6 sm:px-8 overflow-hidden">
//       {/* Background Glows */}
//       <motion.div
//         className="absolute top-[-100px] left-[-100px] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-blue-500 opacity-30 blur-[120px] rounded-full"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         className="absolute bottom-[-100px] right-[-100px] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-purple-500 opacity-30 blur-[120px] rounded-full"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 items-center max-w-6xl w-full z-10">
//         {/* Left Side - Text */}
//         <div className="text-center md:text-left">
//           <motion.h1
//             className="text-4xl sm:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hi, I'm Md Gulfam
//             <br />
//             <span className="inline-block">
//               <Typewriter
//                 words={["A Full-Stack Developer", "MERN Stack Enthusiast"]}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//               />
//             </span>
//           </motion.h1>

//           {/* Experience + Resume Section */}
//           <motion.div
//             className="mt-10 flex flex-wrap  gap-6 justify-center md:justify-start"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, delay: 1 }}
//           >
//             {/* Experience Card */}

//             <motion.div
//               className="p-4 bg-[#1A1A1A] text-white border border-yellow-400/50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 relative overflow-hidden w-40 sm:w-48"
//               whileHover={{ scale: 1.1 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-yellow-400 opacity-10 blur-[40px] rounded-lg"
//                 whileHover={{ opacity: 0.2 }}
//               />

//               <Briefcase size={24} className="text-yellow-400 mx-auto mb-2" />
//               <p className="text-xl sm:text-2xl font-semibold text-center">
//                 {isPending || loading
//                   ? "Loading..."
//                   : formatExperience(experience)}
//               </p>
//               <p className="text-xs sm:text-sm text-center text-gray-400">
//                 Experience
//               </p>
//             </motion.div>

//             <motion.a
//               href="/resume.pdf"
//               download="Md_Gulfam.pdf"
//               className="flex items-center gap-2 px-5 py-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 relative overflow-hidden text-sm sm:text-base"
//               whileHover={{ scale: 1.1 }}
//             >
//               <Download size={20} />
//               Download Resume
//               <motion.div
//                 className="absolute inset-0 bg-white/10 blur-lg opacity-0 transition-opacity duration-500"
//                 whileHover={{ opacity: 0.2 }}
//               />
//             </motion.a>
//           </motion.div>

//           {/* Social Links */}
//           <div className="flex gap-4 mt-6 justify-center md:justify-start">
//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/in/md-gulfam-364ab5212 "
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-blue-600 rounded-full hover:scale-110 transition-transform duration-300"
//             >
//               <img
//                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
//                 alt="LinkedIn"
//                 className="w-6 h-6"
//               />
//             </a>

//             {/* GitHub */}
//             <a
//               href="https://github.com/Mdgulfam-dev"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-gray-100 rounded-full hover:scale-110 transition-transform duration-300"
//             >
//               <img
//                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
//                 alt="GitHub"
//                 className="w-6 h-6"
//               />
//             </a>

//             {/* LeetCode */}
//             <a
//               href="https://leetcode.com/u/MdGulfam/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-yellow-300 rounded-full hover:scale-110 transition-transform duration-300"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
//                 alt="LeetCode"
//                 className="w-6 h-6"
//               />
//             </a>

//             {/* GeeksforGeeks */}
//             <a
//               href="https://www.geeksforgeeks.org/user/mdgulfam0505/?_gl=1*2y2itf*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw5azABhD1ARIsAA0WFUEAxk0DzxKAw10HeAHNzlmwYEFC248fowOP86tGv5uth10xzaVY-FEaAg14EALw_wcB&gbraid=0AAAAAC9yBkCAP0ZTgC_yHK3fkYC2oeOxK"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
//                 alt="GFG"
//                 className="w-6 h-6 "
//               />
//             </a>
//           </div>
//         </div>

//         {/* Right Side - Profile Image */}
//         <motion.div
//           className="flex justify-center md:justify-end mt-10 md:mt-0 relative"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
//         >
//           <img
//             src={profileImage}
//             alt="Md Gulfam - Full Stack Developer"
//             className="w-full max-w-xs sm:max-w-md rounded-xl shadow-2xl drop-shadow-[0px_15px_30px_rgba(255,204,0,0.3)] transition-transform duration-300 hover:scale-105"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { Download, Briefcase, Github, Linkedin, Sun, Moon } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
// import { Link, useNavigate } from "react-router-dom";
// import profileImage from "../assets/profileImage.png";

// const Hero = () => {
//   const navigate = useNavigate();
//   const [experience, setExperience] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isPending, startTransition] = useTransition();

//   // Convert total months into "Years & Months" format
//   const formatExperience = (totalMonths) => {
//     if (totalMonths === null || totalMonths === undefined) return "Loading...";
//     const years = Math.floor(totalMonths / 12);
//     const months = totalMonths % 12;
//     return years > 0
//       ? `${years} yr${years > 1 ? "s" : ""}${months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""}`
//       : `${months} month${months > 1 ? "s" : ""}`;
//   };

//   // Fetch experience from API
//   useEffect(() => {
//     startTransition(() => {
//       fetch("https://myportfolio-1-cs1j.onrender.com/api/experience")
//         .then((res) => {
//           if (!res.ok) throw new Error("Failed to fetch experience");
//           return res.json();
//         })
//         .then((data) => {
//           setExperience(data?.totalMonths ?? 0); // Fallback to 0 if null
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Error fetching experience:", err);
//           setExperience(0); // Fallback to 0 on error
//           setLoading(false);
//         });
//     });
//   }, []);

//   return (
//     <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* Background Glows */}
//       <motion.div
//         className="absolute top-[-100px] left-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-400 opacity-20 blur-[100px] rounded-full"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-100px] right-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-yellow-500 opacity-20 blur-[100px] rounded-full"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 pt-16 sm:pt-20 items-center max-w-6xl w-full z-10">
//         {/* Left Side - Text */}
//         <div className="text-center md:text-left">
//           <motion.h1
//             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 font-sans"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="inline-block">
//               <Typewriter
//                 words={["Software Engineer"]}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//               />
//             </span>
//           </motion.h1>

//           {/* Experience + Buttons */}
//           <motion.div
//             className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, delay: 1 }}
//           >
//             {/* Experience Card */}
//             <motion.div
//               className="flex flex-col items-center gap-2 px-4 py-2 bg-gradient-to-br from-black to-gray-800 text-yellow-400 font-semibold rounded-lg shadow-md  hover:bg-yellow-400/20 transition-all duration-300 relative overflow-hidden text-sm sm:text-base w-36 sm:w-44"
//               whileHover={{ scale: 1.1 }}
//               aria-label="Experience"
//             >
//               <motion.div
//                 className="absolute inset-0 bg-white/10 blur-lg opacity-0 transition-opacity duration-500"
//                 whileHover={{ opacity: 0.2 }}
//               />
//               <Briefcase size={20} className="text-yellow-400" />
//               <p className="text-sm sm:text-base font-semibold text-center">
//                 {isPending || loading ? "Loading..." : formatExperience(experience)}
//               </p>
//               <p className="text-xs sm:text-sm text-center text-gray-400">Experience</p>
//             </motion.div>

//             {/* Resume Button */}
//             <motion.a
//               href="/resume.pdf"
//               download="Md_Gulfam.pdf"
//               className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-black to-gray-800 text-yellow-400 font-semibold rounded-lg shadow-md  hover:bg-yellow-400/20 transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
//               whileHover={{ scale: 1.1 }}
//               aria-label="Download Resume"
//             >
//               <Download size={20} />
//               Download Resume
//               <motion.div
//                 className="absolute inset-0 bg-white/10 blur-lg opacity-0 transition-opacity duration-500"
//                 whileHover={{ opacity: 0.2 }}
//               />
//             </motion.a>

//             {/* View Projects Button */}
//             <motion.div
//               className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-black to-gray-800 text-yellow-400 font-semibold rounded-lg shadow-md  hover:bg-yellow-400/20 transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
//               whileHover={{ scale: 1.1 }}
//               aria-label="View Projects"
//             >
//               <Link to="/work">View Projects</Link>
//               <motion.div
//                 className="absolute inset-0 bg-white/10 blur-lg opacity-0 transition-opacity duration-500"
//                 whileHover={{ opacity: 0.2 }}
//               />
//             </motion.div>
//           </motion.div>

//           {/* Social Links */}
//           <div className="flex gap-4 mt-6 justify-center md:justify-start">
//             <a
//               href="https://www.linkedin.com/in/md-gulfam-364ab5212"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-blue-600 rounded-full hover:scale-110 transition-transform duration-300 md:hover:text-black md:hover:bg-yellow-400/30"
//               aria-label="LinkedIn Profile"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a
//               href="https://github.com/Mdgulfam-dev"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-gray-800 rounded-full hover:scale-110 transition-transform duration-300 md:hover:text-black md:hover:bg-yellow-400/30"
//               aria-label="GitHub Profile"
//             >
//               <Github size={24} />
//             </a>
//             <a
//               href="https://leetcode.com/u/MdGulfam/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-yellow-400 rounded-full hover:scale-110 transition-transform duration-300 md:hover:text-black md:hover:bg-yellow-400/30"
//               aria-label="LeetCode Profile"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
//                 alt="LeetCode"
//                 className="w-6 h-6"
//               />
//             </a>
//             <a
//               href="https://www.geeksforgeeks.org/user/mdgulfam0505/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-green-600 rounded-full hover:scale-110 transition-transform duration-300 md:hover:text-black md:hover:bg-yellow-400/30"
//               aria-label="GeeksforGeeks Profile"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
//                 alt="GFG"
//                 className="w-6 h-6"
//               />
//             </a>
//           </div>
//         </div>

//         {/* Right Side - Profile Image */}
//         <motion.div
//           className="flex justify-center md:justify-end mt-8 md:mt-0 relative"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
//         >
//           <img
//             src={profileImage}
//             alt="Md Gulfam - Full Stack Developer"
//             className="w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[400px] rounded-xl shadow-2xl border-4 border-yellow-400/50 drop-shadow-[0px_10px_20px_rgba(255,204,0,0.4)] transition-transform duration-300 hover:scale-105"
//             loading="lazy"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { Download, Briefcase, Github, Linkedin } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
// import { Link, useNavigate } from "react-router-dom";
// import profileImage from "../assets/profileImage.png";

// const Hero = () => {
//   const navigate = useNavigate();
//   const [experience, setExperience] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isPending, startTransition] = useTransition();

//   // Convert total months into "Years & Months" format
//   const formatExperience = (totalMonths) => {
//     if (totalMonths === null || totalMonths === undefined) return "Loading...";
//     const years = Math.floor(totalMonths / 12);
//     const months = totalMonths % 12;
//     return years > 0
//       ? `${years} yr${years > 1 ? "s" : ""}${months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""}`
//       : `${months} month${months > 1 ? "s" : ""}`;
//   };

//   // Fetch experience from API
//   useEffect(() => {
//     startTransition(() => {
//       fetch("https://myportfolio-1-cs1j.onrender.com/api/experience")
//         .then((res) => {
//           if (!res.ok) throw new Error("Failed to fetch experience");
//           return res.json();
//         })
//         .then((data) => {
//           setExperience(data?.totalMonths ?? 0);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Error fetching experience:", err);
//           setExperience(0);
//           setLoading(false);
//         });
//     });
//   }, []);

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white overflow-hidden pt-24 sm:pt-28">
//       {/* Floating Background Elements */}
//       <motion.div
//         className="absolute top-1/4 left-[-10%] w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-2xl"
//         animate={{ y: [0, 20, 0], opacity: [0.5, 0.7, 0.5] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-1/4 right-[-10%] w-[350px] h-[350px] bg-yellow-500/20 rounded-full blur-2xl"
//         animate={{ y: [0, -20, 0], opacity: [0.5, 0.7, 0.5] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Content Card with Glassmorphism */}
//         <motion.div
//           className="bg-black/40 backdrop-blur-md border border-yellow-400/30 rounded-xl p-6 sm:p-8 shadow-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             {/* Text Content */}
//             <div>
//               <motion.h1
//                 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mb-4"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <span className="inline-block">
//                   <Typewriter
//                     words={["Software Engineer"]}
//                     loop={true}
//                     cursor
//                     cursorStyle="|"
//                     typeSpeed={60}
//                     deleteSpeed={30}
//                     delaySpeed={2000}
//                   />
//                 </span>
//               </motion.h1>
//               <p className="text-gray-300 text-base sm:text-lg mb-6">
//                 Crafting innovative solutions with React, Node.js, and modern tech stacks.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 {/* Experience Card */}
//                 <motion.div
//                   className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-black to-gray-800 text-yellow-400 font-semibold rounded-lg shadow-md border border-yellow-400/50 hover:bg-yellow-400/20 transition-all duration-300 relative overflow-hidden text-sm sm:text-base w-36 sm:w-44"
//                   whileHover={{ scale: 1.1 }}
//                   aria-label="Experience"
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-white/10 blur-lg opacity-0 transition-opacity duration-500"
//                     whileHover={{ opacity: 0.2 }}
//                   />
//                   <Briefcase size={20} />
//                   <div className="text-center">
//                     <p className="text-sm sm:text-base">
//                       {isPending || loading ? "Loading..." : formatExperience(experience)}
//                     </p>
//                     <p className="text-xs sm:text-sm text-gray-400">Experience</p>
//                   </div>
//                 </motion.div>

//                 {/* Resume Button */}
//                 <motion.a
//                   href="/resume.pdf"
//                   download="Md_Gulfam.pdf"
//                   className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-black to-gray-800 text-yellow-400 font-semibold rounded-lg shadow-md border border-yellow-400/50 hover:bg-yellow-400/20 transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
//                   whileHover={{ scale: 1.1 }}
//                   aria-label="Download Resume"
//                 >
//                   <Download size={20} />
//                   Download Resume
//                   <motion.div
//                     className="absolute inset-0 bg-white/10 blur-lg opacity-0 transition-opacity duration-500"
//                     whileHover={{ opacity: 0.2 }}
//                   />
//                 </motion.a>

//                 {/* View Projects Button */}
//                 <motion.div
//                   className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-black to-gray-800 text-yellow-400 font-semibold rounded-lg shadow-md border border-yellow-400/50 hover:bg-yellow-400/20 transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
//                   whileHover={{ scale: 1.1 }}
//                   aria-label="View Projects"
//                 >
//                   <Link to="/work">View Projects</Link>
//                   <motion.div
//                     className="absolute inset-0 bg-white/10 blur-lg opacity-0 transition-opacity duration-500"
//                     whileHover={{ opacity: 0.2 }}
//                   />
//                 </motion.div>
//               </div>
//             </div>

//             {/* Image Content */}
//             <motion.div
//               className="flex justify-center lg:justify-end"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <img
//                 src={profileImage}
//                 alt="Software Engineer Profile"
//                 className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] rounded-xl border-4 border-yellow-400/30 shadow-2xl drop-shadow-[0_8px_16px_rgba(255,204,0,0.3)]"
//                 loading="lazy"
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { Download, Briefcase, Github, Linkedin, ChevronDown } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
// import { Link } from "react-router-dom";
// import profileImage from "../assets/profileImage.png";

// // Custom Icons
// const LeetCodeIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" width="24" height="24">
//     <path d="M30.44 5.52L24.78 11.2L28.22 14.64L34.96 7.9C36.32 6.54 38.58 6.54 39.94 7.9C41.3 9.26 41.3 11.52 39.94 12.88L24.88 27.94C23.52 29.3 21.26 29.3 19.9 27.94L14.64 22.68L11.2 26.12L16.46 31.38C18.68 33.6 22.1 33.6 24.32 31.38L39.38 16.32C42.66 13.04 42.66 7.74 39.38 4.46C36.1 1.18 30.8 1.18 27.52 4.46L21.76 10.22L25.2 13.66L30.44 8.42C30.78 8.08 31.34 8.08 31.68 8.42C32.02 8.76 32.02 9.32 31.68 9.66L30.44 10.9L33.88 14.34L35.12 13.1C36.48 11.74 36.48 9.48 35.12 8.12C33.76 6.76 31.5 6.76 30.14 8.12L30.44 5.52Z" />
//   </svg>
// );

// const GFGIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
//     <path d="M288 256L400 368V312H480V200H400V144L288 256ZM224 256L112 144V200H32V312H112V368L224 256Z" />
//   </svg>
// );

// const Hero = () => {
//   const [experience, setExperience] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isPending, startTransition] = useTransition();

//   const formatExperience = (months) => {
//     if (!months) return "Loading...";
//     const y = Math.floor(months / 12);
//     const m = months % 12;
//     return y ? `${y} yr${y > 1 ? "s" : ""}${m ? ` ${m} mo` : ""}` : `${m} month${m > 1 ? "s" : ""}`;
//   };

//   useEffect(() => {
//     startTransition(() => {
//       fetch("https://myportfolio-1-cs1j.onrender.com/api/experience")
//         .then((res) => res.json())
//         .then((data) => {
//           setExperience(data?.totalMonths ?? 0);
//           setLoading(false);
//         })
//         .catch(() => {
//           setExperience(0);
//           setLoading(false);
//         });
//     });
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white overflow-hidden pt-20 sm:pt-32">

//       {/* Background blobs */}
//       <motion.div
//         className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-yellow-500/30 rounded-full blur-[120px] z-0"
//         animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-[-100px] right-[-120px] w-[350px] h-[350px] bg-purple-600/30 rounded-full blur-[130px] z-0"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 14, repeat: Infinity }}
//       />

//       {/* Social Floating Bar */}
//       <div className="hidden md:flex flex-col gap-4 items-center fixed left-6 top-1/2 transform -translate-y-1/2 z-20">
//         <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
//           <Github className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110" size={24} />
//         </a>
//         <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
//           <Linkedin className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110" size={24} />
//         </a>
//         <a href="https://auth.geeksforgeeks.org/user/your-gfg-username" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110">
//           <GFGIcon />
//         </a>
//         <a href="https://leetcode.com/your-leetcode-username" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110">
//           <LeetCodeIcon />
//         </a>
//         {/* LeetCode */}
// <a
//   href="https://leetcode.com/u/MdGulfam/"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="p-2 bg-yellow-400 rounded-full hover:scale-110 transition-transform duration-300 md:hover:text-black md:hover:bg-yellow-400/30"
//   aria-label="LeetCode Profile"
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 50 50"
//     fill="currentColor"
//     className="w-6 h-6 text-black"
//   >
//     <path d="M16.8 33.3L9.7 26.2 25.9 10l7.2 7.1-3.4 3.3-3.8-3.8-10.1 9.9 10.1 9.9 3.8-3.8 3.4 3.3-7.2 7.1zM36.5 26.5H21.8l2.8-2.8h11.9z" />
//   </svg>
// </a>

// {/* GeeksforGeeks */}
// <a
//   href="https://www.geeksforgeeks.org/user/mdgulfam0505/"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="p-2 bg-green-600 rounded-full hover:scale-110 transition-transform duration-300 md:hover:text-black md:hover:bg-yellow-400/30"
//   aria-label="GeeksforGeeks Profile"
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 300 100"
//     fill="currentColor"
//     className="w-6 h-6 text-white"
//   >
//     <path d="M90 80q-10-20-40-20t-40 20h20q5-10 20-10t20 10zM250 80q-10-20-40-20t-40 20h20q5-10 20-10t20 10zM180 30q-10-20-40-20t-40 20h20q5-10 20-10t20 10z" />
//   </svg>
// </a>

//         <div className="w-[1px] h-16 bg-yellow-400/40" />
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
//         <div className="space-y-6">
//           <motion.h1
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Typewriter
//               words={["Hi, I'm Md Gulfam", "Software Engineer"]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={60}
//               deleteSpeed={40}
//               delaySpeed={1800}
//             />
//           </motion.h1>
//           <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
//             I build high-performance web applications using modern stacks like React, Node.js, and MongoDB. Let's create something powerful together.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4 pt-4">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="group flex items-center gap-2 px-4 py-2 border border-yellow-500/50 bg-black/30 rounded-xl shadow-lg backdrop-blur-md text-yellow-300 text-sm sm:text-base hover:bg-yellow-500/10 transition-all"
//             >
//               <Briefcase size={20} />
//               <div className="text-left">
//                 <p>{isPending || loading ? "Loading..." : formatExperience(experience)}</p>
//                 <p className="text-xs text-gray-400">Experience</p>
//               </div>
//             </motion.div>

//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               href="/resume.pdf"
//               download="Md_Gulfam.pdf"
//               className="group flex items-center gap-2 px-4 py-2 border border-yellow-500 bg-yellow-500 text-black font-semibold rounded-xl transition-all hover:bg-yellow-400"
//             >
//               <Download size={18} />
//               Resume
//             </motion.a>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="group flex items-center gap-2 px-4 py-2 border border-yellow-500/50 text-yellow-300 bg-black/30 rounded-xl shadow-lg backdrop-blur-md transition-all"
//             >
//               <Link to="/work">View Projects</Link>
//             </motion.div>
//           </div>
//         </div>

//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex justify-center lg:justify-end"
//         >
//           <img
//             src={profileImage}
//             alt="Md Gulfam"
//             className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] rounded-3xl shadow-2xl border border-yellow-500/30"
//             loading="lazy"
//           />
//         </motion.div>
//       </div>

//       {/* Scroll-down indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ delay: 1.5, duration: 1 }}
//       >
//         <ChevronDown className="animate-bounce text-yellow-400" size={28} />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { Download, Briefcase, Github, Linkedin, ChevronDown } from "lucide-react";
// import { Typewriter } from "react-simple-typewriter";
// import { Link } from "react-router-dom";
// import profileImage from "../assets/profileImage.png";

// // Custom Icons
// const LeetCodeIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" width="24" height="24">
//     <path d="M30.44 5.52L24.78 11.2L28.22 14.64L34.96 7.9C36.32 6.54 38.58 6.54 39.94 7.9C41.3 9.26 41.3 11.52 39.94 12.88L24.88 27.94C23.52 29.3 21.26 29.3 19.9 27.94L14.64 22.68L11.2 26.12L16.46 31.38C18.68 33.6 22.1 33.6 24.32 31.38L39.38 16.32C42.66 13.04 42.66 7.74 39.38 4.46C36.1 1.18 30.8 1.18 27.52 4.46L21.76 10.22L25.2 13.66L30.44 8.42C30.78 8.08 31.34 8.08 31.68 8.42C32.02 8.76 32.02 9.32 31.68 9.66L30.44 10.9L33.88 14.34L35.12 13.1C36.48 11.74 36.48 9.48 35.12 8.12C33.76 6.76 31.5 6.76 30.14 8.12L30.44 5.52Z" />
//   </svg>
// );

// const GFGIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
//     <path d="M288 256L400 368V312H480V200H400V144L288 256ZM224 256L112 144V200H32V312H112V368L224 256Z" />
//   </svg>
// );

// const Hero = () => {
//   const [experience, setExperience] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isPending, startTransition] = useTransition();

//   const formatExperience = (months) => {
//     if (!months) return "Loading...";
//     const y = Math.floor(months / 12);
//     const m = months % 12;
//     return y ? `${y} yr${y > 1 ? "s" : ""}${m ? ` ${m} mo` : ""}` : `${m} month${m > 1 ? "s" : ""}`;
//   };

//   useEffect(() => {
//     startTransition(() => {
//       fetch("https://myportfolio-1-cs1j.onrender.com/api/experience")
//         .then((res) => res.json())
//         .then((data) => {
//           setExperience(data?.totalMonths ?? 0);
//           setLoading(false);
//         })
//         .catch(() => {
//           setExperience(0);
//           setLoading(false);
//         });
//     });
//   }, []);

//   return (
//     // <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white overflow-hidden pt-20 sm:pt-32">

//     //   {/* Background blobs */}
//     //   <motion.div
//     //     className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-yellow-500/30 rounded-full blur-[120px] z-0"
//     //     animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
//     //     transition={{ duration: 12, repeat: Infinity }}
//     //   />
//     //   <motion.div
//     //     className="absolute bottom-[-100px] right-[-120px] w-[350px] h-[350px] bg-purple-600/30 rounded-full blur-[130px] z-0"
//     //     animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//     //     transition={{ duration: 14, repeat: Infinity }}
//     //   />

//     //   {/* Responsive Floating Bar */}
//     //   <div className="flex md:flex-col gap-4 items-center fixed bottom-4 md:top-1/2 left-1/2 md:left-6 transform md:-translate-y-1/2 -translate-x-1/2 md:translate-x-0 z-20 bg-black/50 md:bg-transparent px-4 py-2 md:px-0 md:py-0 rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-0">
//     //     <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
//     //       <Github className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110" size={24} />
//     //     </a>
//     //     <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
//     //       <Linkedin className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110" size={24} />
//     //     </a>

//     //     <a
//     //       href="https://leetcode.com/u/MdGulfam/"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //       className="p-2 bg-yellow-400 rounded-full hover:scale-110 transition-transform duration-300 md:hover:text-black md:hover:bg-yellow-400/30"
//     //       aria-label="LeetCode Profile"
//     //     >
//     //       <svg
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         viewBox="0 0 50 50"
//     //         fill="currentColor"
//     //         className="w-6 h-6 text-black"
//     //       >
//     //         <path d="M16.8 33.3L9.7 26.2 25.9 10l7.2 7.1-3.4 3.3-3.8-3.8-10.1 9.9 10.1 9.9 3.8-3.8 3.4 3.3-7.2 7.1zM36.5 26.5H21.8l2.8-2.8h11.9z" />
//     //       </svg>
//     //     </a>
//     //     <a
//     //       href="https://www.geeksforgeeks.org/user/mdgulfam0505/"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //       className="p-2 bg-green-600 rounded-full hover:scale-110 transition-transform duration-300 md:hover:text-black md:hover:bg-yellow-400/30"
//     //       aria-label="GeeksforGeeks Profile"
//     //     >
//     //       <svg
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         viewBox="0 0 300 100"
//     //         fill="currentColor"
//     //         className="w-6 h-6 text-white"
//     //       >
//     //         <path d="M90 80q-10-20-40-20t-40 20h20q5-10 20-10t20 10zM250 80q-10-20-40-20t-40 20h20q5-10 20-10t20 10zM180 30q-10-20-40-20t-40 20h20q5-10 20-10t20 10z" />
//     //       </svg>
//     //     </a>
//     //   </div>

//     //   {/* Main content */}
//     //   <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
//     //     <div className="space-y-6">
//     //       <motion.h1
//     //         className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600"
//     //         initial={{ opacity: 0, y: 20 }}
//     //         animate={{ opacity: 1, y: 0 }}
//     //         transition={{ duration: 0.8 }}
//     //       >
//     //         <Typewriter
//     //           words={["Hi, I'm Md Gulfam", "Software Engineer"]}
//     //           loop={true}
//     //           cursor
//     //           cursorStyle="|"
//     //           typeSpeed={60}
//     //           deleteSpeed={40}
//     //           delaySpeed={1800}
//     //         />
//     //       </motion.h1>
//     //       <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
//     //         I build high-performance web applications using modern stacks like React, Node.js, and MongoDB. Let's create something powerful together.
//     //       </p>

//     //       {/* CTA Buttons */}
//     //       <div className="flex flex-wrap gap-4 pt-4">
//     //         <motion.div
//     //           whileHover={{ scale: 1.05 }}
//     //           className="group flex items-center gap-2 px-4 py-2 border border-yellow-500/50 bg-black/30 rounded-xl shadow-lg backdrop-blur-md text-yellow-300 text-sm sm:text-base hover:bg-yellow-500/10 transition-all"
//     //         >
//     //           <Briefcase size={20} />
//     //           <div className="text-left">
//     //             <p>{isPending || loading ? "Loading..." : formatExperience(experience)}</p>
//     //             <p className="text-xs text-gray-400">Experience</p>
//     //           </div>
//     //         </motion.div>

//     //         <motion.a
//     //           whileHover={{ scale: 1.05 }}
//     //           href="/resume.pdf"
//     //           download="Md_Gulfam.pdf"
//     //           className="group flex items-center gap-2 px-4 py-2 border border-yellow-500 bg-yellow-500 text-black font-semibold rounded-xl transition-all hover:bg-yellow-400"
//     //         >
//     //           <Download size={18} />
//     //           Resume
//     //         </motion.a>

//     //         <motion.div
//     //           whileHover={{ scale: 1.05 }}
//     //           className="group flex items-center gap-2 px-4 py-2 border border-yellow-500/50 text-yellow-300 bg-black/30 rounded-xl shadow-lg backdrop-blur-md transition-all"
//     //         >
//     //           <Link to="/work">View Projects</Link>
//     //         </motion.div>
//     //       </div>
//     //     </div>

//     //     {/* Image */}
//     //     <motion.div
//     //       initial={{ opacity: 0, x: 60 }}
//     //       animate={{ opacity: 1, x: 0 }}
//     //       transition={{ duration: 1 }}
//     //       className="flex justify-center lg:justify-end"
//     //     >
//     //       <img
//     //         src={profileImage}
//     //         alt="Md Gulfam"
//     //         className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] rounded-3xl shadow-2xl border border-yellow-500/30"
//     //         loading="lazy"
//     //       />
//     //     </motion.div>
//     //   </div>

//     //   {/* Scroll-down indicator */}
//     //   <motion.div
//     //     className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
//     //     initial={{ opacity: 0 }}
//     //     animate={{ opacity: 0.5 }}
//     //     transition={{ delay: 1.5, duration: 1 }}
//     //   >
//     //     <ChevronDown className="animate-bounce text-yellow-400" size={28} />
//     //   </motion.div>
//     // </section>

//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0B0B0F] to-gray-900 text-white overflow-hidden pt-20 sm:pt-32">

//   {/* Animated Blobs */}
//   <motion.div
//     className="absolute top-[-80px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 rounded-full blur-[140px] z-0"
//     animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
//     transition={{ duration: 15, repeat: Infinity }}
//   />
//   <motion.div
//     className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full blur-[140px] z-0"
//     animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
//     transition={{ duration: 18, repeat: Infinity }}
//   />

//   <div className="relative z-10 w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">

//     {/* Left Content */}
//     <div className="space-y-6">
//       <motion.h1
//         className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Hi, I’m <span className="text-white">Md Gulfam</span>
//       </motion.h1>

//       <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
//         I build high-performance web applications using modern stacks like React, Node.js, and MongoDB. Let’s create something powerful together.
//       </p>

//       {/* CTA Buttons */}
//       <div className="flex flex-wrap gap-4">
//         <motion.a
//           whileHover={{ scale: 1.05 }}
//           href="/resume.pdf"
//           download="Md_Gulfam.pdf"
//           className="px-5 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/50 transition-all"
//         >
//           Download Resume
//         </motion.a>
//         <motion.a
//           whileHover={{ scale: 1.05 }}
//           href="/work"
//           className="px-5 py-3 border border-yellow-500/40 bg-black/40 text-yellow-300 rounded-xl backdrop-blur-md hover:bg-yellow-500/10 transition-all"
//         >
//           View Projects
//         </motion.a>
//       </div>
//     </div>

//     {/* Profile Image */}
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//       className="flex justify-center lg:justify-end"
//     >
//       <motion.img
//         src={profileImage}
//         alt="Md Gulfam"
//         className="w-[320px] sm:w-[380px] lg:w-[420px] rounded-3xl shadow-2xl border border-yellow-500/30"
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 6, repeat: Infinity }}
//       />
//     </motion.div>
//   </div>
// </section>

//   );
// };

// export default Hero;

// <-------Testing--------->

// import { motion } from "framer-motion";
// import { Download, Briefcase, Github, Linkedin } from "lucide-react";
// import { Link } from "react-router-dom";
// import profileImage from "../assets/profileImage.png";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0B0B0F] to-gray-900 text-white overflow-hidden pt-20 sm:pt-32">

//       {/* Gradient Blobs */}
//       <motion.div
//         className="absolute top-[-100px] left-[-120px] w-[400px] h-[400px] bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 rounded-full blur-[140px] z-0"
//         animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
//         transition={{ duration: 15, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-[-150px] right-[-130px] w-[450px] h-[450px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full blur-[140px] z-0"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
//         transition={{ duration: 18, repeat: Infinity }}
//       />

//       {/* Social Icons */}
//       <div className="fixed top-1/2 left-6 -translate-y-1/2 flex flex-col gap-4 z-20 backdrop-blur-lg bg-black/30 p-3 rounded-full shadow-lg border border-white/10">
//         <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
//           <Github className="text-yellow-400 hover:text-yellow-300 transition-all hover:scale-110" size={24} />
//         </a>
//         <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
//           <Linkedin className="text-yellow-400 hover:text-yellow-300 transition-all hover:scale-110" size={24} />
//         </a>
//         <a href="https://leetcode.com/u/MdGulfam/" target="_blank" rel="noreferrer">
//           <img src="/leetcode.svg" alt="LeetCode" className="w-6 h-6 hover:scale-110 transition-all" />
//         </a>
//         <a href="https://www.geeksforgeeks.org/user/mdgulfam0505/" target="_blank" rel="noreferrer">
//           <img src="/gfg.svg" alt="GFG" className="w-6 h-6 hover:scale-110 transition-all" />
//         </a>
//       </div>

//       {/* Content Grid */}
//       <div className="relative z-10 w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">

//         {/* Left Text */}
//         <div className="space-y-6">
//           <motion.h1
//             className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Hi, I’m Md Gulfam
//           </motion.h1>

//           <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
//             I build high-performance web applications using modern stacks like React, Node.js, and MongoDB. Let’s create something powerful together.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               href="/resume.pdf"
//               download="Md_Gulfam.pdf"
//               className="px-5 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/50 transition-all"
//             >
//               <Download size={18} className="inline-block mr-2" />
//               Resume
//             </motion.a>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="px-5 py-3 border border-yellow-500/40 bg-black/40 text-yellow-300 rounded-xl backdrop-blur-md hover:bg-yellow-500/10 transition-all"
//             >
//               <Link to="/work">View Projects</Link>
//             </motion.div>
//           </div>
//         </div>

//         {/* Right - Profile Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative flex justify-center lg:justify-end"
//         >
//           <motion.div
//             className="p-[3px] rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 shadow-lg"
//             animate={{ rotate: [0, 2, -2, 0] }}
//             transition={{ duration: 8, repeat: Infinity }}
//           >
//             <div className="bg-black rounded-3xl overflow-hidden">
//               <motion.img
//                 src={profileImage}
//                 alt="Md Gulfam"
//                 className="w-[320px] sm:w-[380px] lg:w-[420px] rounded-3xl"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 6, repeat: Infinity }}
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// <-------Testing------->

// import { motion } from "framer-motion";
// import { Download, Github, Linkedin } from "lucide-react";
// import { Link } from "react-router-dom";
// import profileImage from "../assets/profileImage.png";
// import leetcodeIcon from "../assets/leetcode.png";
// import gfgIcon from "../assets/gfg.png";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0B0B0F] to-gray-900 text-white overflow-hidden pt-20 sm:pt-32">
//       {/* Animated Background Blobs */}
//       <motion.div
//         className="absolute top-[-100px] left-[-120px] w-[400px] h-[400px] bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 rounded-full blur-[140px] z-0"
//         animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
//         transition={{ duration: 15, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-[-150px] right-[-130px] w-[450px] h-[450px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full blur-[140px] z-0"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
//         transition={{ duration: 18, repeat: Infinity }}
//       />

//       {/* Social Icons Sidebar */}
//       <div className="fixed top-1/2 left-6 -translate-y-1/2 flex flex-col gap-4 z-20 backdrop-blur-lg bg-black/30 p-3 rounded-full shadow-lg border border-white/10">
//         <a
//           href="https://github.com/Mdgulfam-dev"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <Github
//             className="text-yellow-400 hover:text-yellow-300 transition-all hover:scale-110"
//             size={24}
//           />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/md-gulfam-364ab5212/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <Linkedin
//             className="text-yellow-400 hover:text-yellow-300 transition-all hover:scale-110"
//             size={24}
//           />
//         </a>
//         <a
//           href="https://leetcode.com/u/MdGulfam/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             src={leetcodeIcon}
//             alt="LeetCode"
//             className="w-6 h-6 hover:scale-110 transition-all"
//           />
//         </a>
//         <a
//           href="https://www.geeksforgeeks.org/user/mdgulfam0505/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img
//             src={gfgIcon}
//             alt="GFG"
//             className="w-6 h-6 hover:scale-110 transition-all"
//           />
//         </a>
//       </div>

//       {/* Grid Layout */}
//       <div className="relative z-10 w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left Text Content */}
//         <div className="space-y-6">
//           <motion.h1
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Software Engineer
//           </motion.h1>

//           <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
//             I design and develop high-performance web & mobile applications
//             using modern stacks like React, Node.js, and MongoDB. Specializing
//             in AI/ML-powered solutions, I handle end-to-end development — from
//             intelligent system design to secure deployment on AWS. Let’s create
//             something powerful together.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               href="/resume.pdf"
//               download="Md_Gulfam.pdf"
//               className="px-5 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/50 transition-all"
//             >
//               <Download size={18} className="inline-block mr-2" />
//               Resume
//             </motion.a>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="px-5 py-3 border border-yellow-500/40 bg-black/40 text-yellow-300 rounded-xl backdrop-blur-md hover:bg-yellow-500/10 transition-all"
//             >
//               <Link to="/work">View Projects</Link>
//             </motion.div>
//           </div>
//         </div>

//         {/* Right Profile Card */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="relative flex justify-center lg:justify-end"
//         >
//           <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black p-6 rounded-3xl shadow-2xl border border-yellow-400/20 overflow-hidden w-[350px] sm:w-[400px] lg:w-[440px]">
//             {/* Decorative Gradient Ring */}
//             <div className="absolute inset-0 rounded-3xl border-2 border-transparent "></div>

//             {/* Profile Image */}
//             {/* <motion.img
//               src={profileImage}
//               alt="Md Gulfam"
//               className="relative z-10 w-full rounded-3xl object-cover"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 6, repeat: Infinity }}
//             /> */}

//             {/* Profile Image */}
//             <motion.div
//               className="relative z-10 w-full rounded-full p-2"
//               style={{
//                 backgroundColor: "#ffffff", // choose a contrasting color (can replace with hex or Tailwind)
//                 boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
//               }}
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 6, repeat: Infinity }}
//             >
//               <img
//                 src={profileImage}
//                 alt="Md Gulfam"
//                 className="rounded-full object-cover w-full h-full"
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import { motion, useReducedMotion } from "framer-motion";
// import { Download, Github, Linkedin } from "lucide-react";
// import { Link } from "react-router-dom";
// import profileImage from "../assets/profileImage.png";
// import leetcodeIcon from "../assets/leetcode.png";
// import gfgIcon from "../assets/gfg.png";

// const Hero = () => {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0B0B0F] to-gray-900 text-white overflow-hidden pt-20 sm:pt-32 px-4 sm:px-6 lg:px-12">
//       {/* Animated Background Blobs */}
//       <motion.div
//         className="absolute top-[-100px] left-[-120px] w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 rounded-full blur-[140px] z-0 will-change-transform"
//         animate={
//           shouldReduceMotion
//             ? {}
//             : { scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }
//         }
//         transition={{ duration: 15, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-[-150px] right-[-130px] w-[450px] h-[450px] sm:w-[450px] sm:h-[450px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full blur-[140px] z-0 will-change-transform"
//         animate={
//           shouldReduceMotion
//             ? {}
//             : { scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }
//         }
//         transition={{ duration: 18, repeat: Infinity }}
//       />

//       {/* Social Icons Sidebar */}
//       <div className="fixed top-1/2 left-6 -translate-y-1/2 flex flex-col gap-4 z-20 backdrop-blur-lg bg-black/30 p-3 rounded-full shadow-lg border border-white/10">
//         <a
//           href="https://github.com/Mdgulfam-dev"
//           target="_blank"
//           rel="noreferrer"
//           aria-label="GitHub Profile"
//         >
//           <Github
//             className="text-yellow-400 hover:text-yellow-300 transition-all hover:scale-110"
//             size={24}
//           />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/md-gulfam-364ab5212/"
//           target="_blank"
//           rel="noreferrer"
//           aria-label="LinkedIn Profile"
//         >
//           <Linkedin
//             className="text-yellow-400 hover:text-yellow-300 transition-all hover:scale-110"
//             size={24}
//           />
//         </a>
//         <a
//           href="https://leetcode.com/u/MdGulfam/"
//           target="_blank"
//           rel="noreferrer"
//           aria-label="LeetCode Profile"
//         >
//           <img
//             src={leetcodeIcon}
//             alt="LeetCode"
//             className="w-6 h-6 hover:scale-110 transition-transform"
//             loading="lazy"
//           />
//         </a>
//         <a
//           href="https://www.geeksforgeeks.org/user/mdgulfam0505/"
//           target="_blank"
//           rel="noreferrer"
//           aria-label="GeeksforGeeks Profile"
//         >
//           <img
//             src={gfgIcon}
//             alt="GFG"
//             className="w-6 h-6 hover:scale-110 transition-transform"
//             loading="lazy"
//           />
//         </a>
//       </div>

//       {/* Grid Layout */}
//       <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Text Content */}
//         <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
//           <motion.h1
//             className="
//               text-3xl 
//               sm:text-4xl 
//               md:text-5xl 
//               lg:text-6xl 
//               font-extrabold 
//               text-transparent 
//               bg-clip-text 
//               bg-gradient-to-r 
//               from-yellow-400 
//               to-orange-500
//             "
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Software Engineer
//           </motion.h1>

//           <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
//             I design and develop high-performance web & mobile applications
//             using modern stacks like React, Node.js, and MongoDB. Specializing
//             in AI/ML-powered solutions, I handle end-to-end development — from
//             intelligent system design to secure deployment on AWS. Let’s create
//             something powerful together.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap justify-center lg:justify-start gap-4">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               href="/resume.pdf"
//               download="Md_Gulfam.pdf"
//               className="px-5 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/50 transition-all"
//             >
//               <Download size={18} className="inline-block mr-2" />
//               Resume
//             </motion.a>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="px-5 py-3 border border-yellow-500/40 bg-black/40 text-yellow-300 rounded-xl backdrop-blur-md hover:bg-yellow-500/10 transition-all"
//             >
//               <Link to="/work">View Projects</Link>
//             </motion.div>
//           </div>
//         </div>

//         {/* Right Profile Card */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex justify-center lg:justify-end"
//         >
//           <div
//             className="
//               relative 
//               bg-gradient-to-b 
//               from-gray-900 
//               via-gray-800 
//               to-black 
//               p-6 
//               rounded-3xl 
//               shadow-2xl 
//               border border-yellow-400/20 
//               overflow-hidden
//               w-[250px] 
//               sm:w-[300px] 
//               md:w-[350px] 
//               lg:w-[440px]
//             "
//           >
//             <motion.div
//               className="relative rounded-full p-2 mx-auto"
//               style={{
//                 backgroundColor: "#ffffff",
//                 boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
//                 width: "calc(100% - 2rem)", // keeps padding space inside container
//                 aspectRatio: "1 / 1",
//               }}
//               animate={
//                 shouldReduceMotion
//                   ? {}
//                   : { y: [0, -10, 0] }
//               }
//               transition={{ duration: 6, repeat: Infinity }}
//             >
//               <img
//                 src={profileImage}
//                 alt="Md Gulfam"
//                 className="rounded-full object-cover w-full h-full"
//                 loading="lazy"
//                 decoding="async"
//                 draggable={false}
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import leetcodeIcon from "../assets/leetcode.png";
import gfgIcon from "../assets/gfg.png";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#0B0B0F] to-gray-900 text-white overflow-hidden px-8 sm:px-12 lg:px-20 py-24">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:40px_40px] pointer-events-none z-0" />

      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 rounded-full blur-[120px] will-change-transform z-0"
        animate={
          shouldReduceMotion
            ? {}
            : { scale: [1, 1.1, 1], opacity: [0.3, 0.45, 0.3] }
        }
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-600 to-pink-500 opacity-20 rounded-full blur-[120px] will-change-transform z-0"
        animate={
          shouldReduceMotion
            ? {}
            : { scale: [1, 1.07, 1], opacity: [0.3, 0.45, 0.3] }
        }
        transition={{ duration: 22, repeat: Infinity }}
      />

      {/* Social Icons Sidebar */}
      <nav className="flex gap-8 z-10 mb-16">
        <a
          href="https://github.com/Mdgulfam-dev"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="text-yellow-400 hover:text-yellow-300 transition-transform hover:scale-125"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-gulfam-364ab5212/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="text-yellow-400 hover:text-yellow-300 transition-transform hover:scale-125"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://leetcode.com/u/MdGulfam/"
          target="_blank"
          rel="noreferrer"
          aria-label="LeetCode Profile"
          className="transition-transform hover:scale-125"
        >
          <img
            src={leetcodeIcon}
            alt="LeetCode"
            className="w-8 h-8"
            loading="lazy"
            draggable={false}
          />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/mdgulfam0505/"
          target="_blank"
          rel="noreferrer"
          aria-label="GeeksforGeeks Profile"
          className="transition-transform hover:scale-125"
        >
          <img
            src={gfgIcon}
            alt="GFG"
            className="w-8 h-8"
            loading="lazy"
            draggable={false}
          />
        </a>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center space-y-10 px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wide leading-tight relative"
        >
          Software Engineer
          {/* Animated underline */}
          <motion.span
            layoutId="underline"
            className="block h-1 w-36 mt-4 bg-yellow-400 rounded-full origin-left mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl text-gray-300 text-xl sm:text-2xl leading-relaxed font-light tracking-wide"
        >
          I design and develop high-performance web & mobile applications using
          modern stacks like React, Node.js, and MongoDB. Specializing in
          AI/ML-powered solutions, I handle end-to-end development — from
          intelligent system design to secure deployment on AWS. Let’s create
          something powerful together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap gap-8 justify-center"
        >
          <a
            href="/resume.pdf"
            download="Md_Gulfam.pdf"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-xl hover:shadow-yellow-500/70 transition-all transform hover:scale-110"
          >
            <Download size={24} className="mr-4" />
            Resume
          </a>
          <Link
            to="/work"
            className="inline-flex items-center px-8 py-4 border-2 border-yellow-500/60 text-yellow-400 rounded-full backdrop-blur-md hover:bg-yellow-500/25 transition-all transform hover:scale-110"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
