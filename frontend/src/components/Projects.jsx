// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Code } from "lucide-react";
// import Tilt from "react-parallax-tilt"; // Replaced react-tilt with react-parallax-tilt

// const Project = () => {
//   const [projects, setProjects] = useState([]);
//   const [isPending, startTransition] = useTransition();

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("https://myportfolio-1-cs1j.onrender.com/api/projects");
//         const data = await res.json();

//         // Optimize state update using transition
//         startTransition(() => {
//           setProjects(data);
//         });
//       } catch (err) {
//         console.error("Error fetching project data:", err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <section className="relative w-full bg-[#0A0A0A] text-white py-20 overflow-hidden">
//       {/* Background Animated Glow */}
//       <motion.div
//         className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500 opacity-30 blur-[200px] rounded-full"
//         animate={{ rotate: [0, 360], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-pink-500 opacity-30 blur-[200px] rounded-full"
//         animate={{ rotate: [360, 0], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//       />

//       <div className="container mx-auto text-center relative z-10">
//         <motion.h2
//           className="text-5xl font-bold text-gray-100 mb-6"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Projects
//         </motion.h2>
//         <motion.p
//           className="text-lg text-gray-400 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           A collection of my work, including web applications and full-stack projects.
//         </motion.p>
//       </div>

//       <motion.div
//         className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         {isPending ? (
//           <p className="text-gray-400 text-center col-span-full">Loading projects...</p>
//         ) : (
//           projects.map((project, index) => (
//             <Tilt key={project._id} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={300}>
//               <motion.div
//                 className="relative bg-[#ffffff10] p-6 rounded-2xl shadow-xl border border-gray-700 backdrop-blur-md overflow-hidden transition-transform duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
//               >
//                 {/* Neon Glow Effect on Hover */}
//                 <motion.div
//                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-2xl pointer-events-none"
//                 ></motion.div>

//                 {/* Default Project Icon */}
//                 <motion.div
//                   animate={{ y: [0, -5, 0] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                   className="flex justify-center"
//                 >
//                   <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full mb-4 shadow-lg">
//                     <Code size={50} className="text-gray-400" />
//                   </div>
//                 </motion.div>

//                 <h3 className="text-2xl font-semibold text-[#FFD700]">{project.title}</h3>
//                 <p className="text-gray-300 mt-2">{project.description}</p>

//                 {project.techStack.length > 0 && (
//                   <motion.div
//                     className="mt-4 flex flex-wrap gap-2"
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                   >
//                     {project.techStack.map((tech, index) => (
//                       <motion.span
//                         key={index}
//                         className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full shadow-md"
//                         whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </motion.div>
//                 )}

//                 <div className="mt-4 flex justify-between items-center">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 flex items-center gap-1 hover:underline"
//                   >
//                     View Project <ExternalLink size={18} />
//                   </a>
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-400 hover:text-white"
//                     >
//                       GitHub ↗
//                     </a>
//                   )}
//                 </div>
//               </motion.div>
//             </Tilt>
//           ))
//         )}
//       </motion.div>
//     </section>
//   );
// };

// export default Project;




// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Code, Github } from "lucide-react";
// import Tilt from "react-parallax-tilt";

// const Project = () => {
//   const [projects, setProjects] = useState([]);
//   const [isPending, startTransition] = useTransition();

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("https://myportfolio-1-cs1j.onrender.com/api/projects");
//         const data = await res.json();

//         startTransition(() => {
//           setProjects(data);
//         });
//       } catch (err) {
//         console.error("Error fetching project data:", err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white py-20 overflow-hidden">
//       {/* Floating Glows */}
//       <motion.div
//         className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-yellow-400/20 blur-3xl rounded-full"
//         animate={{ y: [0, 30, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-yellow-500/20 blur-3xl rounded-full"
//         animate={{ y: [0, -30, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 text-center"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Projects
//         </motion.h2>
//         <motion.p
//           className="text-lg text-gray-400 max-w-2xl mx-auto mt-4 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           A curated showcase of my web and full-stack applications.
//         </motion.p>

//         <motion.div
//           className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           {isPending ? (
//             <p className="text-gray-400 text-center col-span-full">Loading projects...</p>
//           ) : (
//             projects.map((project, index) => (
//               <Tilt
//                 key={project._id}
//                 tiltMaxAngleX={15}
//                 tiltMaxAngleY={15}
//                 scale={1.05}
//                 transitionSpeed={300}
//               >
//                 <motion.div
//                   className="relative bg-black/40 border border-yellow-400/30 backdrop-blur-md p-6 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {/* Glow Hover Layer */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none"
//                   />

//                   {/* Icon */}
//                   <div className="flex justify-center mb-4">
//                     <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full shadow-lg border border-yellow-400/20">
//                       <Code size={40} className="text-yellow-400" />
//                     </div>
//                   </div>

//                   {/* Title & Description */}
//                   <h3 className="text-2xl font-semibold text-yellow-400 text-center">{project.title}</h3>
//                   <p className="text-gray-300 mt-3 text-sm">{project.description}</p>

//                   {/* Tech Stack */}
//                   {project.techStack.length > 0 && (
//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {project.techStack.map((tech, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-yellow-400/10"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {/* Links */}
//                   <div className="mt-6 flex justify-between items-center text-sm">
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-yellow-300 hover:underline flex items-center gap-1"
//                     >
//                       Live Demo <ExternalLink size={16} />
//                     </a>
//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-400 hover:text-yellow-400 flex items-center gap-1"
//                       >
//                         <Github size={16} />
//                         GitHub
//                       </a>
//                     )}
//                   </div>
//                 </motion.div>
//               </Tilt>
//             ))
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Project;




// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Code, Github } from "lucide-react";

// const Project = () => {
//   const [projects, setProjects] = useState([]);
//   const [isPending, startTransition] = useTransition();

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("https://myportfolio-1-cs1j.onrender.com/api/projects");
//         const data = await res.json();

//         startTransition(() => {
//           setProjects(data);
//         });
//       } catch (err) {
//         console.error("Error fetching project data:", err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white py-20 overflow-hidden">
//       {/* Floating Glows */}
//       <motion.div
//         className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-yellow-400/20 blur-3xl rounded-full"
//         animate={{ y: [0, 30, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-yellow-500/20 blur-3xl rounded-full"
//         animate={{ y: [0, -30, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
//         {/* Heading */}
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 text-center"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Projects
//         </motion.h2>
//         <motion.p
//           className="text-lg text-gray-400 max-w-2xl mx-auto mt-4 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           A curated showcase of my web, AI, and full-stack applications.
//         </motion.p>

//         {/* Projects Grid */}
//         <motion.div
//           className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           {isPending ? (
//             <p className="text-gray-400 text-center col-span-full">Loading projects...</p>
//           ) : (
//             projects.map((project, index) => (
//               <motion.div
//                 key={project._id}
//                 className="relative bg-black/50 border border-yellow-400/30 backdrop-blur-lg p-6 rounded-2xl shadow-xl overflow-hidden hover:shadow-yellow-500/30 transition-all duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 {/* Glow Hover Layer */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 opacity-0 hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

//                 {/* Icon */}
//                 <div className="flex justify-center mb-4">
//                   <div className="w-20 h-20 flex items-center justify-center bg-gray-900 rounded-full shadow-lg border border-yellow-400/20">
//                     <Code size={40} className="text-yellow-400" />
//                   </div>
//                 </div>

//                 {/* Title & Description */}
//                 <h3 className="text-2xl font-semibold text-yellow-400 text-center">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 mt-3 text-sm leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 {project.techStack?.length > 0 && (
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {project.techStack.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full border border-yellow-400/10"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {/* Links */}
//                 <div className="mt-6 flex justify-between items-center text-sm">
//                   {project.link && (
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-400 transition flex items-center gap-2"
//                     >
//                       Live Demo <ExternalLink size={16} />
//                     </a>
//                   )}
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-gray-800 text-yellow-300 rounded-lg shadow-md hover:bg-gray-700 transition flex items-center gap-2"
//                     >
//                       <Github size={16} /> GitHub
//                     </a>
//                   )}
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Project;


// import { useEffect, useState, useTransition } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Code, Github, Heart } from "lucide-react";

// const Project = () => {
//   const [projects, setProjects] = useState([]);
//   const [isPending, startTransition] = useTransition();

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch("https://myportfolio-1-cs1j.onrender.com/api/projects");
//         const data = await res.json();
//         startTransition(() => {
//           setProjects(data);
//         });
//       } catch (err) {
//         console.error("Error fetching project data:", err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white py-20 overflow-hidden">
//       {/* Floating Glows */}
//       <motion.div
//         className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-yellow-400/20 blur-3xl rounded-full"
//         animate={{ y: [0, 30, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-yellow-500/20 blur-3xl rounded-full"
//         animate={{ y: [0, -30, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
//         {/* Heading */}
//        <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2
//             id="work-heading"
//             className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 inline-block"
//           >
//             My Projects
//           </h2>
//           <div className="w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 rounded-full" />
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
//             A showcase of the work I’ve done — from concept to deployment, blending creativity with technical expertise.
            
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           {isPending ? (
//             <p className="text-gray-400 text-center col-span-full">Loading projects...</p>
//           ) : (
//             projects.map((project, index) => (
//               <motion.div
//                 key={project._id}
//                 className="relative bg-black/50 border border-yellow-400/30 backdrop-blur-lg p-6 rounded-2xl shadow-xl overflow-hidden hover:shadow-yellow-500/30 transition-all duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 {/* Glow Hover Layer - now non-blocking */}
//                 <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 opacity-0 hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

//                 {/* Icon */}
//                 <div className="flex justify-center mb-4">
//                   <div className="w-20 h-20 flex items-center justify-center bg-gray-900 rounded-full shadow-lg border border-yellow-400/20">
//                     <Code size={40} className="text-yellow-400" />
//                   </div>
//                 </div>

//                 {/* Title & Description */}
//                 <h3 className="text-2xl font-semibold text-yellow-400 text-center">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 mt-3 text-sm leading-relaxed text-center">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 {project.techStack?.length > 0 && (
//                   <div className="mt-4 flex flex-wrap justify-center gap-2">
//                     {project.techStack.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full border border-yellow-400/10"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {/* Links */}
//                 <div className="mt-6 flex flex-wrap justify-center gap-4">
//                   {project.link && (
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-lg shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition flex items-center gap-2"
//                     >
//                       Live Demo <ExternalLink size={16} />
//                     </a>
//                   )}
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-yellow-300 font-medium rounded-lg shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition flex items-center gap-2"
//                     >
//                       <Github size={16} /> GitHub
//                     </a>
//                   )}
                  
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Project;



import { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Github } from "lucide-react";

const gradientBlobs = [
  {
    className:
      "absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl rounded-full",
    animate: { y: [0, 40, 0], opacity: [0.5, 0.7, 0.5] },
    transition: { duration: 10, repeat: Infinity },
  },
  {
    className:
      "absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full",
    animate: { y: [0, -40, 0], opacity: [0.5, 0.7, 0.5] },
    transition: { duration: 12, repeat: Infinity },
  },
];

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://myportfolio-1-cs1j.onrender.com/api/projects");
        const data = await res.json();
        startTransition(() => {
          setProjects(data);
        });
      } catch (err) {
        console.error("Error fetching project data:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      className="relative w-full bg-[#0A0A0A] text-white py-24 overflow-hidden min-h-screen"
      aria-labelledby="projects-heading"
    >
      {/* Gradient Background Blobs */}
      {gradientBlobs.map((blob, i) => (
        <motion.div
          key={i}
          className={blob.className}
          animate={blob.animate}
          transition={blob.transition}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 z-10">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="projects-heading"
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 inline-block"
          >
            My Projects
          </h2>
          <div className="w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            A showcase of the work I’ve done — from concept to deployment, blending creativity with technical expertise.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {isPending ? (
            <p className="text-gray-400 text-center col-span-full">Loading projects...</p>
          ) : (
            projects.map((project, index) => (
              <motion.article
                key={project._id}
                className="relative p-6 rounded-2xl bg-black/30 backdrop-blur-lg border border-transparent hover:border-yellow-400/40 shadow-lg transition-all duration-500 hover:shadow-yellow-500/20 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Glow Hover Layer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 flex items-center justify-center bg-black/50 rounded-full shadow-md border border-yellow-400/20">
                    <Code size={40} className="text-yellow-400" aria-hidden="true" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold text-yellow-300 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed text-center">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.techStack?.length > 0 && (
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-black/30 border border-yellow-400/10 text-gray-300 hover:bg-yellow-500/10 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-lg shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition flex items-center gap-2"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-yellow-300 font-medium rounded-lg shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition flex items-center gap-2"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                </div>
              </motion.article>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
