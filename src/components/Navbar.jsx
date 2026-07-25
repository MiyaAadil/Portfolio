import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Skills", href: "#skills" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/70 dark:bg-zinc-900/70 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-bold text-blue-500 tracking-wide"
        >
          Aadil.
        </a>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-zinc-700 dark:text-zinc-200 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-700 dark:text-amber-300 cursor-pointer"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile */}

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-700 dark:text-amber-300 cursor-pointer"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer dark:text-gray-100"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-20 right-0 w-full h-screen bg-white dark:bg-zinc-900 dark:text-gray-200 flex flex-col items-center pt-16 gap-8 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium hover:text-blue-500 transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;