import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const [works, setWorks] = useState(() => []);
  const [loading, setLoading] = useState(true);

  const fetchWorkData = useCallback(async () => {
    try {
      const response = await fetch("https://myportfolio-nyjh.onrender.com/api/work");
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
    <section className="relative w-full bg-[#0A0A0A] text-white py-20 overflow-hidden">
      {/* Animated Background Gradient Effect */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[150px] rounded-full"
        animate={{ x: [0, 50, -50, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-yellow-500 opacity-20 blur-[150px] rounded-full"
        animate={{ x: [0, -50, 50, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto text-center relative z-10 mt-20">
        <motion.h2
          className="text-5xl font-bold text-gray-100 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Work Experience
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A glimpse into my professional journey and the roles I've taken on.
        </motion.p>
      </div>

      {loading ? (
        <div className="text-center text-gray-400 mt-12">Loading work experience...</div>
      ) : (
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {works.map((work) => (
            <motion.div
              key={work._id}
              className="relative bg-[#1A1A1A] p-8 rounded-2xl shadow-lg border border-gray-800 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              {/* Glowing Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                whileHover={{ opacity: 0.2 }}
              ></motion.div>

              <h3 className="text-2xl font-semibold text-[#FFD700]">{work.position}</h3>
              <h4 className="text-xl text-gray-200 mt-2">{work.company}</h4>
              <p className="text-gray-400 mt-1">{work.duration} • {work.location}</p>

              <p className="text-gray-300 mt-4">{work.description}</p>

              {work.technologies.length > 0 && (
                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {work.technologies.map((tech, index) => (
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
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Work;
