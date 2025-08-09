// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const Skills = () => {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     fetch("https://myportfolio-1-cs1j.onrender.com/api/skills") // Adjust based on your API route
//       .then((res) => res.json())
//       .then((data) => setSkills(data))
//       .catch((err) => console.error("Error fetching skills data:", err));
//   }, []);

//   return (
//     <section className="relative w-full bg-[#0A0A0A] text-white py-20 overflow-hidden">
//       {/* Background Glowing Animation */}
//       <motion.div
//         className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-30 blur-[200px] rounded-full"
//         animate={{
//           scale: [1, 1.1, 1],  
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       ></motion.div>

//       <motion.div
//         className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-green-500 opacity-30 blur-[200px] rounded-full"
//         animate={{
//           scale: [1, 1.1, 1], 
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       ></motion.div>

//       <div className="container mx-auto text-center relative z-10">
//         <motion.h2
//           className="text-5xl font-bold text-gray-100 mb-6"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Skills
//         </motion.h2>
//         <motion.p
//           className="text-lg text-gray-400 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           Technologies and tools I use to build amazing projects.
//         </motion.p>
//       </div>

//       <motion.div
//         className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         {skills.map((category, index) => (
//           <motion.div
//             key={category._id}
//             className="relative bg-[#1A1A1A] p-6 rounded-2xl shadow-lg border border-gray-800 overflow-hidden"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
//           >
//             {/* Glowing Hover Effect */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl"
//               whileHover={{ opacity: 0.2 }}
//             ></motion.div>

//             <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">
//               {category.category}
//             </h3>

//             <motion.div
//               className="flex flex-wrap gap-2"
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               {category.skills.map((skill, index) => (
//                 <motion.span
//                   key={index}
//                   className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full shadow-md"
//                   whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </motion.div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;




// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { BadgeCheck } from "lucide-react";

// const Skills = () => {
//   const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     fetch("https://myportfolio-1-cs1j.onrender.com/api/skills")
//       .then((res) => res.json())
//       .then((data) => setSkills(data))
//       .catch((err) => console.error("Error fetching skills:", err));
//   }, []);

//   return (
//     <section className="relative w-full bg-[#0A0A0A] text-white py-20 overflow-hidden">
//       {/* Background Glow Blobs */}
//       <motion.div
//         className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[160px] rounded-full"
//         animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.35, 0.2] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-100px] right-[-120px] w-[400px] h-[400px] bg-yellow-500 opacity-20 blur-[160px] rounded-full"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Header */}
//       <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
//         <motion.h2
//           className="text-5xl font-bold text-gray-100 mb-4"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           My Skillset
//         </motion.h2>
//         <motion.p
//           className="text-lg text-gray-400"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           Tools, technologies, and languages that power my projects.
//         </motion.p>
//       </div>

//       {/* Skills Grid */}
//       <motion.div
//         className="relative z-10 mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6 max-w-7xl mx-auto"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         {skills.map((category, index) => (
//           <motion.div
//             key={category._id}
//             className="relative group bg-[#1A1A1A]/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md shadow-md transition-transform hover:scale-[1.03] hover:shadow-yellow-500/20"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.15 }}
//             viewport={{ once: true }}
//           >
//             {/* Glowing hover effect */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none"
//             />

//             {/* Icon + Title */}
//             <div className="flex items-center gap-3 mb-4">
//               <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full p-3">
//                 <BadgeCheck className="text-[#FFD700]" size={22} />
//               </div>
//               <h3 className="text-xl font-semibold text-[#FFD700]">
//                 {category.category}
//               </h3>
//             </div>

//             {/* Tech Chips */}
//             <div className="flex flex-wrap gap-2 mt-4">
//               {category.skills.map((skill, i) => (
//                 <span
//                   key={i}
//                   className="px-4 py-1.5 text-sm rounded-full bg-gray-800 text-gray-300 border border-yellow-400/20 hover:bg-yellow-500/10 transition"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;






import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

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

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://myportfolio-1-cs1j.onrender.com/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  return (
    <section
      className="relative w-full bg-[#0A0A0A] text-white py-24 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background Gradient Blobs */}
      {gradientBlobs.map((blob, i) => (
        <motion.div
          key={i}
          className={blob.className}
          animate={blob.animate}
          transition={blob.transition}
        />
      ))}

      {/* Header */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-10 text-center z-10">
        <motion.h2
          id="skills-heading"
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 inline-block"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skillset
        </motion.h2>
        <div className="w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 rounded-full" />
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Tools, technologies, and languages that power my projects.
        </motion.p>
      </div>

      {/* Skills Grid */}
      <motion.div
        className="relative z-10 mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 sm:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {skills.map((category, index) => (
          <motion.article
            key={category._id}
            className="relative group p-6 rounded-2xl bg-black/30 backdrop-blur-lg border border-transparent hover:border-yellow-400/40 shadow-lg transition-all duration-500 hover:shadow-yellow-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-full p-3">
                <BadgeCheck className="text-yellow-400" size={22} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-300">{category.category}</h3>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-black/30 border border-yellow-400/10 text-gray-300 hover:bg-yellow-500/10 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
