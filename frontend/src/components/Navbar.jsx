// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Import icons for mobile menu

// const navItems = ["Home", "Work", "About", "Contact"];

// const Navbar = () => {
//   const location = useLocation();
//   const [active, setActive] = useState(location.pathname);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Update active link on route change
//   useEffect(() => {
//     setActive(location.pathname);
//     setIsMobileMenuOpen(false); // Close mobile menu when navigating
//   }, [location.pathname]);

//   // Detect scroll to add background effect
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-gray-900/90 shadow-lg backdrop-blur-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Portfolio Logo - Styled */}
//         <Link
//           to="/"
//           className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 
//                      hover:shadow-lg transition-all duration-300 hover:scale-105"
//         >
//           Portfolio
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-6">
//           {navItems.map((item, index) => {
//             const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//             return (
//               <Link
//                 key={index}
//                 to={path}
//                 className="relative text-gray-300 font-semibold text-lg transition-all duration-300 hover:text-white px-4 py-2 rounded-full"
//                 onClick={() => setActive(path)}
//               >
//                 {active === path && (
//                   <motion.div
//                     layoutId="active-pill"
//                     className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full -z-10 shadow-lg"
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//                 <span className={active === path ? "text-black font-bold" : "opacity-60"}>{item}</span>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white hover:scale-110 transition-all duration-200"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="absolute top-0 left-0 w-full bg-gray-900/95 shadow-md p-6 md:hidden"
//           >
//             <div className="flex flex-col items-center space-y-4">
//               {navItems.map((item, index) => {
//                 const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//                 return (
//                   <Link
//                     key={index}
//                     to={path}
//                     className="text-white text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
//                     onClick={() => setActive(path)}
//                   >
//                     {item}
//                   </Link>
//                 );
//               })}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;





// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";

// const navItems = ["Home", "Work", "About", "Contact"];

// const Navbar = () => {
//   const location = useLocation();
//   const [active, setActive] = useState(location.pathname);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

//   // Update active link and close mobile menu on route change
//   useEffect(() => {
//     setActive(location.pathname);
//     setIsMobileMenuOpen(false);
//   }, [location.pathname]);

//   // Detect scroll for glassmorphism effect
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Theme toggle handler with persistence
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark");
//     localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         isScrolled
//           ? "bg-black/90 backdrop-blur-xl shadow-xl"
//           : "bg-gradient-to-b from-black/70 to-transparent"
//       } dark:bg-black/90`}
//       aria-label="Main navigation"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
//         {/* Logo with Animation */}
//         <Link
//           to="/"
//           className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           aria-label="Portfolio Home"
//         >
//           <motion.span
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Gulfam
//           </motion.span>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
//           {navItems.map((item, index) => {
//             const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//             return (
//               <Link
//                 key={index}
//                 to={path}
//                 className="relative text-gray-200 text-sm lg:text-base font-medium transition-all duration-300 hover:text-black hover:bg-yellow-400/30 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 onClick={() => setActive(path)}
//                 aria-current={active === path ? "page" : undefined}
//               >
//                 {active === path && (
//                   <motion.div
//                     layoutId="active-pill"
//                     className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl -z-10 shadow-md"
//                     transition={{ type: "spring", stiffness: 400, damping: 25 }}
//                   />
//                 )}
//                 <span className={active === path ? "text-yellow-400 font-semibold" : "text-gray-300"}>{item}</span>
//               </Link>
//             );
//           })}
//           {/* Social Icons */}
//           <div className="flex items-center space-x-3">
//             <a
//               href="https://github.com/mdgulfam"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-black hover:bg-yellow-400/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               aria-label="GitHub Profile"
//             >
//               <Github size={20} />
//             </a>
//             <a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-black hover:bg-yellow-400/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               aria-label="LinkedIn Profile"
//             >
//               <Linkedin size={20} />
//             </a>
//             <button
//               onClick={toggleTheme}
//               className="text-gray-300 hover:text-black hover:bg-yellow-400/30 p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//             >
//               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white p-2 rounded-lg hover:bg-yellow-400/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={isMobileMenuOpen}
//         >
//           {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="md:hidden bg-black/95 backdrop-blur-xl shadow-lg px-6 py-10"
//             role="menu"
//           >
//             <div className="flex flex-col items-center space-y-6">
//               {navItems.map((item, index) => {
//                 const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//                 return (
//                   <Link
//                     key={index}
//                     to={path}
//                     className="text-white text-lg font-semibold hover:text-yellow-400 hover:bg-black/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     onClick={() => setActive(path)}
//                     role="menuitem"
//                     aria-current={active === path ? "page" : undefined}
//                   >
//                     {item}
//                   </Link>
//                 );
//               })}
//               {/* Social Icons in Mobile Menu */}
//               <div className="flex items-center justify-center space-x-6 pt-6">
//                 <a
//                   href="https://github.com/mdgulfam"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-300 hover:text-yellow-400 hover:bg-black/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                   aria-label="GitHub Profile"
//                 >
//                   <Github size={24} />
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/yourusername"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-300 hover:text-yellow-400 hover:bg-black/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                   aria-label="LinkedIn Profile"
//                 >
//                   <Linkedin size={24} />
//                 </a>
//                 <button
//                   onClick={toggleTheme}
//                   className="text-gray-300 hover:text-yellow-400 hover:bg-black/20 p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                   aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//                 >
//                   {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;




// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Sun, Moon } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(true);

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-yellow-400/20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <motion.div
//           className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link to="/">Portfolio</Link>
//         </motion.div>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-6">
//           <motion.a
//             href="#about"
//             className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base"
//             whileHover={{ scale: 1.1 }}
//           >
//             About
//           </motion.a>
//           <motion.a
//             href="#work"
//             className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base"
//             whileHover={{ scale: 1.1 }}
//           >
//             Work
//           </motion.a>
//           <motion.a
//             href="#contact"
//             className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base"
//             whileHover={{ scale: 1.1 }}
//           >
//             Contact
//           </motion.a>

//           {/* Social Icons */}
//           <div className="flex space-x-3">
//             <a
//               href="https://www.linkedin.com/in/md-gulfam-364ab5212"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-yellow-400 transition-colors duration-300"
//             >
//               <Linkedin size={20} />
//             </a>
//             <a
//               href="https://github.com/Mdgulfam-dev"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-yellow-400 transition-colors duration-300"
//             >
//               <Github size={20} />
//             </a>
//           </div>

//           {/* Theme Toggle */}
//           <motion.button
//             onClick={() => setIsDark(!isDark)}
//             className="text-white hover:text-yellow-400 transition-colors duration-300"
//             whileHover={{ scale: 1.1 }}
//           >
//             {isDark ? <Moon size={20} /> : <Sun size={20} />}
//           </motion.button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Github, Linkedin, Sun, Moon, Menu, X } from "lucide-react";
// import { Link as ScrollLink } from "react-scroll";

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = ["about", "work", "contact"];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-yellow-400/20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <motion.div
//           className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <a href="#">Portfolio</a>
//         </motion.div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map((section) => (
//             <motion.div key={section} whileHover={{ scale: 1.1 }}>
//               <ScrollLink
//                 to={section}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 className="cursor-pointer text-white hover:text-yellow-400 text-sm sm:text-base transition-colors duration-300"
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </ScrollLink>
//             </motion.div>
//           ))}

//           {/* Social Icons */}
//           <div className="flex space-x-3">
//             <a
//               href="https://www.linkedin.com/in/md-gulfam-364ab5212"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-yellow-400"
//             >
//               <Linkedin size={20} />
//             </a>
//             <a
//               href="https://github.com/Mdgulfam-dev"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-yellow-400"
//             >
//               <Github size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Mobile Icons */}
//         <div className="md:hidden flex items-center space-x-2">
//           <motion.button
//             onClick={() => setIsDark(!isDark)}
//             className="text-white hover:text-yellow-400"
//             whileHover={{ scale: 1.1 }}
//           >
//             {isDark ? <Moon size={22} /> : <Sun size={22} />}
//           </motion.button>
//           <motion.button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white hover:text-yellow-400"
//             whileHover={{ scale: 1.1 }}
//           >
//             {menuOpen ? <X size={26} /> : <Menu size={26} />}
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4 space-y-4"
//           >
//             {navItems.map((section) => (
//               <ScrollLink
//                 key={section}
//                 to={section}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 onClick={() => setMenuOpen(false)}
//                 className="block text-white text-base hover:text-yellow-400 cursor-pointer transition-colors"
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </ScrollLink>
//             ))}

//             <div className="flex space-x-4 pt-2">
//               <a
//                 href="https://www.linkedin.com/in/md-gulfam-364ab5212"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-yellow-400"
//               >
//                 <Linkedin size={22} />
//               </a>
//               <a
//                 href="https://github.com/Mdgulfam-dev"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white hover:text-yellow-400"
//               >
//                 <Github size={22} />
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;




// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const navItems = ["Home", "Work", "About", "Contact"];

// const Navbar = () => {
//   const location = useLocation();
//   const [active, setActive] = useState(location.pathname);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     setActive(location.pathname);
//     setIsMobileMenuOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-black/80 backdrop-blur-md border-b border-yellow-400/20 shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
//         >
//           <Link to="/" className="hover:scale-105 transition-transform duration-300">
//             Portfolio
//           </Link>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map((item, index) => {
//             const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//             const isActive = active === path;
//             return (
//               <motion.div key={index} whileHover={{ scale: 1.1 }}>
//                 <Link
//                   to={path}
//                   onClick={() => setActive(path)}
//                   className={`relative text-sm sm:text-base px-3 py-1.5 rounded-full font-medium transition-colors duration-300 ${
//                     isActive
//                       ? "text-black bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-md"
//                       : "text-white hover:text-yellow-400"
//                   }`}
//                 >
//                   {item}
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white hover:text-yellow-400 transition-all duration-200"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4"
//           >
//             {navItems.map((item, index) => {
//               const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//               return (
//                 <Link
//                   key={index}
//                   to={path}
//                   onClick={() => setActive(path)}
//                   className={`block text-base font-medium px-3 py-2 rounded-full text-center transition-all ${
//                     active === path
//                       ? "text-black bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-md"
//                       : "text-white hover:text-yellow-400"
//                   }`}
//                 >
//                   {item}
//                 </Link>
//               );
//             })}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;



// <-------Testing------->


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const navItems = ["Home", "Work", "About", "Contact"];

// const Navbar = () => {
//   const location = useLocation();
//   const [active, setActive] = useState(location.pathname);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     setActive(location.pathname);
//     setIsMobileMenuOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 max-w-5xl w-[90%] rounded-full ${
//         isScrolled
//           ? "bg-black/80 backdrop-blur-md border border-yellow-400/20 shadow-lg"
//           : "bg-black/50 backdrop-blur-sm"
//       }`}
//     >
//       <div className="px-6 py-3 flex justify-between items-center">
        
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
//         >
//           <Link to="/" className="hover:scale-105 transition-transform duration-300">
//             Md Gulfam
//           </Link>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map((item, index) => {
//             const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//             const isActive = active === path;
//             return (
//               <motion.div key={index} whileHover={{ scale: 1.1 }}>
//                 <Link
//                   to={path}
//                   onClick={() => setActive(path)}
//                   className={`relative text-sm sm:text-base px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
//                     isActive
//                       ? "text-black bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-md"
//                       : "text-white hover:text-yellow-400"
//                   }`}
//                 >
//                   {item}
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white hover:text-yellow-400 transition-all duration-200"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 rounded-b-2xl"
//           >
//             {navItems.map((item, index) => {
//               const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//               return (
//                 <Link
//                   key={index}
//                   to={path}
//                   onClick={() => setActive(path)}
//                   className={`block text-base font-medium px-4 py-2 rounded-full text-center transition-all ${
//                     active === path
//                       ? "text-black bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-md"
//                       : "text-white hover:text-yellow-400"
//                   }`}
//                 >
//                   {item}
//                 </Link>
//               );
//             })}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Work", "About", "Contact"];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 max-w-5xl w-[90%] 
        bg-black/50 backdrop-blur-sm border border-transparent
        ${isScrolled ? "bg-black/80 border-yellow-400/20 shadow-lg" : ""}
        rounded-md md:rounded-full
      `}
    >
      {/* Navbar inner container with padding (no extra rounding needed here) */}
      <div className="px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
        >
          <Link to="/" className="hover:scale-105 transition-transform duration-300">
            Md Gulfam
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = active === path;
            return (
              <motion.div key={index} whileHover={{ scale: 1.1 }}>
                <Link
                  to={path}
                  onClick={() => setActive(path)}
                  className={`relative text-sm sm:text-base px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-black bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-md"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-yellow-400 transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 rounded-b-md overflow-hidden z-40 mt-1"
          >
            {navItems.map((item, index) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={index}
                  to={path}
                  onClick={() => setActive(path)}
                  className={`block text-base font-medium px-4 py-2 rounded-full text-center transition-all ${
                    active === path
                      ? "text-black bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-md"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
