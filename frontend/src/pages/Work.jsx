// import { useEffect, useState, useCallback } from "react";
// import { motion } from "framer-motion";

// const Work = () => {
//   const [works, setWorks] = useState(() => []);
//   const [loading, setLoading] = useState(true);

  

//   const fetchWorkData = useCallback(async () => {
//     try {
//       const response = await fetch("https://myportfolio-1-cs1j.onrender.com/api/work");
//       const data = await response.json();
//       setWorks(data);
//     } catch (error) {
//       console.error("Error fetching work data:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWorkData();
//   }, [fetchWorkData]);

//   return (
//     <section className="relative w-full bg-[#0A0A0A] text-white py-20 overflow-hidden">
//       {/* Animated Background Gradient Effect */}
//       <motion.div
//         className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[150px] rounded-full"
//         animate={{ x: [0, 50, -50, 0], y: [0, 50, -50, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>

//       <motion.div
//         className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-yellow-500 opacity-20 blur-[150px] rounded-full"
//         animate={{ x: [0, -50, 50, 0], y: [0, -50, 50, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>

//       <div className="container mx-auto text-center relative z-10 mt-20">
//         <motion.h2
//           className="text-5xl font-bold text-gray-100 mb-6"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           My Work Experience
//         </motion.h2>
//         <motion.p
//           className="text-lg text-gray-400 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           A glimpse into my professional journey and the roles I've taken on.
//         </motion.p>
//       </div>

//       {loading ? (
//         <div className="text-center text-gray-400 mt-12">Loading work experience...</div>
//       ) : (
//         <motion.div
//           className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           {works.map((work) => (
//             <motion.div
//               key={work._id}
//               className="relative bg-[#1A1A1A] p-8 rounded-2xl shadow-lg border border-gray-800 overflow-hidden"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//             >
//               {/* Glowing Hover Effect */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl"
//                 whileHover={{ opacity: 0.2 }}
//               ></motion.div>

//               <h3 className="text-2xl font-semibold text-[#FFD700]">{work.position}</h3>
//               <h4 className="text-xl text-gray-200 mt-2">{work.company}</h4>
//               <p className="text-gray-400 mt-1">{work.duration} • {work.location}</p>

//               <p className="text-gray-300 mt-4">{work.description}</p>

//               {work.technologies.length > 0 && (
//                 <motion.div
//                   className="mt-4 flex flex-wrap gap-2"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   {work.technologies.map((tech, index) => (
//                     <motion.span
//                       key={index}
//                       className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full shadow-md"
//                       whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Work;




// import { useEffect, useState, useCallback } from "react";
// import { motion } from "framer-motion";
// import { Briefcase } from "lucide-react";

// const Work = () => {
//   const [works, setWorks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchWorkData = useCallback(async () => {
//     try {
//       const response = await fetch("https://myportfolio-1-cs1j.onrender.com/api/work");
//       const data = await response.json();
//       setWorks(data);
//     } catch (error) {
//       console.error("Error fetching work data:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWorkData();
//   }, [fetchWorkData]);

//   return (
//     <section className="relative w-full bg-[#0A0A0A] text-white py-20 overflow-hidden">
//       {/* Floating Gradient Blobs */}
//       <motion.div
//         className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full"
//         animate={{ y: [0, 40, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-yellow-400/20 blur-3xl rounded-full"
//         animate={{ y: [0, -40, 0], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
//         {/* Section Header */}
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 text-center"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           My Work Experience
//         </motion.h2>
//         <motion.p
//           className="text-lg text-gray-400 max-w-2xl mx-auto mt-4 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           A glimpse into my professional journey and the roles I've taken on.
//         </motion.p>

//         {/* Loading State */}
//         {loading ? (
//           <div className="text-center text-gray-400 mt-16">Loading work experience...</div>
//         ) : (
//           <motion.div
//             className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             {works.map((work, index) => (
//               <motion.div
//                 key={work._id}
//                 className="relative bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/30 shadow-xl transition-transform duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {/* Glowing Hover Overlay */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-purple-500 opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none"
//                 />

//                 {/* Icon */}
//                 <div className="flex justify-center mb-4">
//                   <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full border border-yellow-400/20 shadow-md">
//                     <Briefcase size={32} className="text-yellow-400" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-semibold text-yellow-300 text-center">{work.position}</h3>
//                 <h4 className="text-lg text-gray-300 text-center mt-1">{work.company}</h4>
//                 <p className="text-sm text-gray-400 text-center mt-1">
//                   {work.duration} • {work.location}
//                 </p>

//                 <p className="text-gray-300 mt-4 text-sm">{work.description}</p>

//                 {/* Tech Stack */}
//                 {work.technologies.length > 0 && (
//                   <div className="mt-4 flex flex-wrap gap-2 justify-center">
//                     {work.technologies.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-yellow-400/10"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Work;



// import { useEffect, useState, useCallback } from "react";
// import { motion } from "framer-motion";
// import { Briefcase } from "lucide-react";

// const Work = () => {
//   const [works, setWorks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchWorkData = useCallback(async () => {
//     try {
//       const response = await fetch("https://myportfolio-1-cs1j.onrender.com/api/work");
//       const data = await response.json();
//       setWorks(data);
//     } catch (error) {
//       console.error("Error fetching work data:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWorkData();
//   }, [fetchWorkData]);

//   return (
//     <section className="relative w-full bg-[#0A0A0A] text-white py-24 overflow-hidden">
//       {/* Soft Gradient Background Blobs */}
//       <motion.div
//         className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl rounded-full"
//         animate={{ y: [0, 40, 0], opacity: [0.5, 0.7, 0.5] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full"
//         animate={{ y: [0, -40, 0], opacity: [0.5, 0.7, 0.5] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
//         {/* Section Header */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 inline-block">
//             My Work Experience
//           </h2>
//           <div className="w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 rounded-full" />
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
//             A glimpse into my professional journey — building, scaling, and innovating across AI, ML, and Full-Stack development.
//           </p>
//         </motion.div>

//         {/* Loading State */}
//         {loading ? (
//           <div className="text-center text-gray-400 mt-16">Loading work experience...</div>
//         ) : (
//           <motion.div
//             className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             {works.map((work, index) => (
//               <motion.div
//                 key={work._id}
//                 className="relative p-6 rounded-2xl bg-black/30 backdrop-blur-lg border border-transparent hover:border-yellow-400/40 shadow-lg transition-all duration-500 hover:shadow-yellow-500/20 group"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

//                 {/* Icon */}
//                 <div className="flex justify-center mb-4">
//                   <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-yellow-400/10 to-purple-500/10 rounded-full border border-yellow-400/20 shadow-md">
//                     <Briefcase size={32} className="text-yellow-400" />
//                   </div>
//                 </div>

//                 {/* Job Title */}
//                 <h3 className="text-2xl font-semibold text-yellow-300 text-center">{work.position}</h3>
//                 <h4 className="text-lg text-gray-300 text-center mt-1">{work.company}</h4>
//                 <p className="text-sm text-gray-400 text-center mt-1">
//                   {work.duration} • {work.location}
//                 </p>

//                 {/* Description */}
//                 <p className="text-gray-300 mt-4 text-sm leading-relaxed">{work.description}</p>

//                 {/* Tech Stack */}
//                 {work.technologies.length > 0 && (
//                   <div className="mt-4 flex flex-wrap gap-2 justify-center">
//                     {work.technologies.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 bg-black/30 border border-yellow-400/10 text-gray-300 text-xs rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Work;



import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const gradientBlobs = [
  {
    className: "absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl rounded-full",
    animate: { y: [0, 40, 0], opacity: [0.5, 0.7, 0.5] },
    transition: { duration: 10, repeat: Infinity },
  },
  {
    className: "absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-3xl rounded-full",
    animate: { y: [0, -40, 0], opacity: [0.5, 0.7, 0.5] },
    transition: { duration: 12, repeat: Infinity },
  },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkData = useCallback(async () => {
    try {
      const response = await fetch("https://myportfolio-1-cs1j.onrender.com/api/work");
      if (!response.ok) throw new Error("Failed to fetch work data");
      const data = await response.json();
      setWorks(data);
    } catch (error) {
      console.error("Error fetching work data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWorkData();
  }, [fetchWorkData]);

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 overflow-hidden" aria-labelledby="work-heading">
      {/* Background Gradient Blobs */}
      {gradientBlobs.map((blob, i) => (
        <motion.div key={i} className={blob.className} animate={blob.animate} transition={blob.transition} />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="work-heading"
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 inline-block"
          >
            My Work Experience
          </h2>
          <div className="w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            A glimpse into my professional journey — building, scaling, and innovating across AI, ML, and Full-Stack
            development.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-gray-400 mt-16">Loading work experience...</div>
        ) : (
          <motion.div
            className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {works.map((work, index) => (
              <motion.article
                key={work._id}
                className="relative p-6 rounded-2xl bg-black/30 backdrop-blur-lg border border-transparent hover:border-yellow-400/40 shadow-lg transition-all duration-500 hover:shadow-yellow-500/20 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-yellow-400/10 to-purple-500/10 rounded-full border border-yellow-400/20 shadow-md">
                    <Briefcase size={32} className="text-yellow-400" aria-hidden="true" />
                  </div>
                </div>

                {/* Job Title */}
                <h3 className="text-2xl font-semibold text-yellow-300 text-center">{work.position}</h3>
                <h4 className="text-lg text-gray-300 text-center mt-1">{work.company}</h4>
                <p className="text-sm text-gray-400 text-center mt-1">
                  {work.duration} • {work.location}
                </p>

                {/* Description */}
                {work.description && (
                  <p className="text-gray-300 mt-4 text-sm leading-relaxed">{work.description}</p>
                )}

                {/* Tech Stack */}
                {Array.isArray(work.technologies) && work.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {work.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black/30 border border-yellow-400/10 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Work;
