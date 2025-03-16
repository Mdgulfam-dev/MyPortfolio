import { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/profileImage.png";

const Hero = () => {
  const navigate = useNavigate();
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  // Convert months into "Years & Months" format
  const formatExperience = (months) => {
    if (months === null || months === undefined) return "Loading...";
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return years > 0
      ? `${years} yr${years > 1 ? "s" : ""} ${remainingMonths > 0 ? `${remainingMonths} mo` : ""}`
      : `${remainingMonths} mo`;
  };

  // Fetch experience from API
  useEffect(() => {
    startTransition(() => {
      fetch("https://myportfolio-nyjh.onrender.com/api/experience")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch experience");
          }
          return res.json();
        })
        .then((data) => {
          setExperience(data?.months ?? null);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching experience:", err);
          setLoading(false);
        });
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-gray-900 text-white px-6 sm:px-8 sm:pt-20 overflow-hidden">
      {/* Background Glows */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-blue-500 opacity-30 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-purple-500 opacity-30 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full z-10">
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Md Gulfam
            <br />
            <span className="inline-block">
              <Typewriter words={["A Full-Stack Developer", "MERN Stack Enthusiast"]} loop={true} cursor cursorStyle="|" />
            </span>
          </motion.h1>

          {/* Experience + Resume Section */}
          <motion.div
            className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            {/* Experience Card */}
            <motion.div
              className="p-6 bg-[#1A1A1A] text-white border border-yellow-400/50 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="absolute inset-0 bg-yellow-400 opacity-10 blur-[50px] rounded-xl"
                whileHover={{ opacity: 0.2 }}
              />

              <Briefcase size={32} className="text-yellow-400 mx-auto mb-3" />
              <p className="text-2xl sm:text-3xl font-semibold text-center">
                {isPending || loading ? "Loading..." : formatExperience(experience)}
              </p>
              <p className="text-sm sm:text-md text-center text-gray-400">Experience</p>
            </motion.div>

            {/* Resume Download Button */}
            <motion.a
              href="/resume.pdf"
              download="Md_Gulfam_Resume.pdf"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
            >
              <Download size={22} />
              Download Resume
              <motion.div
                className="absolute inset-0 bg-white/10 blur-lg opacity-0 transition-opacity duration-500"
                whileHover={{ opacity: 0.2 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="flex justify-center md:justify-end mt-10 md:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
        >
          <img
            src={profileImage}
            alt="Md Gulfam - Full Stack Developer"
            className="w-full max-w-xs sm:max-w-md rounded-xl shadow-2xl drop-shadow-[0px_15px_30px_rgba(255,204,0,0.3)] transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
