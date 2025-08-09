// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section className="relative w-full bg-[#0A0A0A] text-white py-20 px-6 overflow-hidden ">
//       {/* Background Glowing Animation */}
//       <motion.div
//         className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-30 blur-[200px] rounded-full"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>

//       <motion.div
//         className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500 opacity-30 blur-[200px] rounded-full"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       ></motion.div>

//       <div className="container mx-auto max-w-5xl text-center mt-20">
//         <motion.h2
//           className="text-5xl font-bold text-gray-100 mb-6"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           About Me
//         </motion.h2>

//         <motion.p
//           className="text-lg text-gray-400 max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           Hi, I'm <strong>Md Gulfam</strong>, a **results-driven Full-Stack
//           Developer** with expertise in building **scalable, high-performance
//           web applications**. I specialize in **MERN Stack, microservices
//           architecture, and API optimization**, ensuring robust and efficient
//           digital solutions. With a strong foundation in **backend scalability,
//           frontend performance, and cloud deployment**, I have successfully
//           built and optimized applications that **enhance user experience and
//           system efficiency**. I thrive in **fast-paced environments**, solving
//           complex problems with clean, maintainable code. I am eager to
//           contribute my skills in **backend system design, RESTful API
//           development, and database management** to build innovative and
//           impactful software solutions.
//         </motion.p>
//       </div>

//       {/* Education Section */}
//       <div className="container mx-auto max-w-5xl mt-12 px-6">
//         <motion.div
//           className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg border border-gray-800 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">
//             Education
//           </h3>
//           <p className="text-gray-300">
//             🎓 <strong>B.Tech in Computer Science & Engineering</strong>
//           </p>
//           <p className="text-gray-400">
//             Maharshi Dayanand University (2020 – 2024)
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;



import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-28 px-6 overflow-hidden">
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute top-[-18%] left-[-12%] w-[500px] h-[500px] bg-gradient-to-br from-purple-600/30 to-pink-500/20 blur-3xl rounded-full"
        animate={{ y: [0, 40, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-12%] w-[520px] h-[520px] bg-gradient-to-br from-yellow-400/30 to-orange-500/20 blur-3xl rounded-full"
        animate={{ y: [0, -40, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 rounded-full border-8 border-yellow-400 shadow-[0_0_30px_5px_rgba(252,211,77,0.7)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="https://i.pravatar.cc/300?img=12" // Replace with your actual image URL
            alt="Md Gulfam"
            className="w-56 h-56 object-cover rounded-full"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 max-w-3xl text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 mb-8">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed space-y-5">
            Hi, I'm{" "}
            <strong className="text-yellow-400">Md Gulfam</strong>, a{" "}
            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              results-driven Full-Stack Developer
            </span>{" "}
            with expertise in building{" "}
            <em className="italic text-yellow-300">
              scalable, high-performance web applications
            </em>
            . <br />
            I specialize in{" "}
            <strong className="text-yellow-400">
              MERN Stack, microservices architecture, and API optimization
            </strong>
            , ensuring robust and efficient digital solutions.
            <br />
            With a strong foundation in{" "}
            <strong className="text-yellow-400">
              backend scalability, frontend performance, and cloud deployment
            </strong>
            , I have successfully built and optimized applications that{" "}
            <em className="italic text-yellow-300">
              enhance user experience and system efficiency
            </em>
            .
            <br />
            I thrive in{" "}
            <strong className="text-yellow-400">
              fast-paced environments
            </strong>
            , solving complex problems with clean, maintainable code. I am
            eager to contribute my skills in{" "}
            <strong className="text-yellow-400">
              backend system design, RESTful API development, and database management
            </strong>{" "}
            to build innovative and impactful software solutions.
          </p>
        </motion.div>
      </div>

      {/* Education Section */}
      <div className="relative max-w-6xl mx-auto mt-24 px-6 md:px-0">
        <motion.div
          className="bg-[#1A1A1A] p-10 rounded-3xl shadow-2xl border border-yellow-400/50 max-w-md mx-auto md:mx-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.34 6.894L12 21l-6.5-3.53a12.083 12.083 0 01.34-6.894L12 14z"
              />
            </svg>
            Education
          </h3>
          <p className="text-yellow-300 text-xl font-semibold mb-3">
            B.Tech in Computer Science & Engineering
          </p>
          <p className="text-gray-400 text-lg">
            Maharshi Dayanand University (2020 – 2024)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
