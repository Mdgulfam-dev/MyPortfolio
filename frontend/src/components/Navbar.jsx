import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

const navItems = ["Home", "Work", "About", "Contact"];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update active link on route change
  useEffect(() => {
    setActive(location.pathname);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  }, [location.pathname]);

  // Detect scroll to add background effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Portfolio Logo - Styled */}
        <Link
          to="/"
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 
                     hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Portfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={index}
                to={path}
                className="relative text-gray-300 font-semibold text-lg transition-all duration-300 hover:text-white px-4 py-2 rounded-full"
                onClick={() => setActive(path)}
              >
                {active === path && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full -z-10 shadow-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={active === path ? "text-black font-bold" : "opacity-60"}>{item}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:scale-110 transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-gray-900/95 shadow-md p-6 md:hidden"
          >
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item, index) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <Link
                    key={index}
                    to={path}
                    className="text-white text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
                    onClick={() => setActive(path)}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
