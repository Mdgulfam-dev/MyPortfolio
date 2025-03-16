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
//         const res = await fetch("https://myportfolio-nyjh.onrender.com/api/projects");
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
//                   className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-2xl"
//                   whileHover={{ opacity: 0.4 }}
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


import { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { API_BASE_URL } from "../config"; // Import API_BASE_URL

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/projects`); // Using API_BASE_URL
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
    <section className="relative w-full bg-[#0A0A0A] text-white py-20 overflow-hidden">
      {/* Background Animated Glow */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500 opacity-30 blur-[200px] rounded-full"
        animate={{ rotate: [0, 360], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-pink-500 opacity-30 blur-[200px] rounded-full"
        animate={{ rotate: [360, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-5xl font-bold text-gray-100 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A collection of my work, including web applications and full-stack projects.
        </motion.p>
      </div>

      <motion.div
        className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {isPending ? (
          <p className="text-gray-400 text-center col-span-full">Loading projects...</p>
        ) : (
          projects.map((project, index) => (
            <Tilt key={project._id} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={300}>
              <motion.div
                className="relative bg-[#ffffff10] p-6 rounded-2xl shadow-xl border border-gray-700 backdrop-blur-md overflow-hidden transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                {/* Neon Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                  whileHover={{ opacity: 0.4 }}
                ></motion.div>

                {/* Default Project Icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex justify-center"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full mb-4 shadow-lg">
                    <Code size={50} className="text-gray-400" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-semibold text-[#FFD700]">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>

                {project.techStack.length > 0 && (
                  <motion.div
                    className="mt-4 flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {project.techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full shadow-md"
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                )}

                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 flex items-center gap-1 hover:underline"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </motion.div>
            </Tilt>
          ))
        )}
      </motion.div>
    </section>
  );
};

export default Project;
