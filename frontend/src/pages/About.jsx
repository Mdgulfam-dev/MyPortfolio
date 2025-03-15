import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-20 px-6 overflow-hidden ">
      {/* Background Glowing Animation */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-30 blur-[200px] rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500 opacity-30 blur-[200px] rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto max-w-5xl text-center mt-20">
        <motion.h2
          className="text-5xl font-bold text-gray-100 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I'm <strong>Md Gulfam</strong>, a **results-driven Full-Stack
          Developer** with expertise in building **scalable, high-performance
          web applications**. I specialize in **MERN Stack, microservices
          architecture, and API optimization**, ensuring robust and efficient
          digital solutions. With a strong foundation in **backend scalability,
          frontend performance, and cloud deployment**, I have successfully
          built and optimized applications that **enhance user experience and
          system efficiency**. I thrive in **fast-paced environments**, solving
          complex problems with clean, maintainable code. I am eager to
          contribute my skills in **backend system design, RESTful API
          development, and database management** to build innovative and
          impactful software solutions.
        </motion.p>
      </div>

      {/* Education Section */}
      <div className="container mx-auto max-w-5xl mt-12 px-6">
        <motion.div
          className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg border border-gray-800 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">
            Education
          </h3>
          <p className="text-gray-300">
            🎓 <strong>B.Tech in Computer Science & Engineering</strong>
          </p>
          <p className="text-gray-400">
            Maharshi Dayanand University (2020 – 2024)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
