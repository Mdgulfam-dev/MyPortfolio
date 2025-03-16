import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://myportfolio-1-cs1j.onrender.com/api/skills") // Adjust based on your API route
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills data:", err));
  }, []);

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-20 overflow-hidden">
      {/* Background Glowing Animation */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-30 blur-[200px] rounded-full"
        animate={{
          scale: [1, 1.1, 1],  
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-green-500 opacity-30 blur-[200px] rounded-full"
        animate={{
          scale: [1, 1.1, 1], 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-5xl font-bold text-gray-100 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Technologies and tools I use to build amazing projects.
        </motion.p>
      </div>

      <motion.div
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {skills.map((category, index) => (
          <motion.div
            key={category._id}
            className="relative bg-[#1A1A1A] p-6 rounded-2xl shadow-lg border border-gray-800 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
          >
            {/* Glowing Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl"
              whileHover={{ opacity: 0.2 }}
            ></motion.div>

            <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">
              {category.category}
            </h3>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {category.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full shadow-md"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

