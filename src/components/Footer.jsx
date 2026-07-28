import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: faGithub,
      href: "https://github.com/MiyaAadil",
      label: "GitHub",
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/aadil-miya-390b9925a/",
      label: "LinkedIn",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-zinc-950 dark:via-blue-950/20 dark:to-zinc-950 border-t border-zinc-200 dark:border-zinc-800/50 transition-colors duration-300 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Top Section - CTA & Branding */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className=""
        >
          
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div>
              <h2 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Aadil Miya
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-200 mt-2">
                Frontend Developer & UI Designer
              </p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-200">
              Crafting modern web experiences with React, JavaScript, and cutting-edge frontend technologies.
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white">Navigation</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-zinc-600 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:miyaaadil76@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span>miyaaadil76@gmail.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span>+977 9863266164</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-200">
                <MapPin size={18} className="flex-shrink-0" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </motion.div>

          {/* Social Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white">Follow</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
                >
                  <span className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors duration-300">
                    <FontAwesomeIcon icon={social.icon} size="sm" />
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Copyright & Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-zinc-200 dark:border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-zinc-600 dark:text-zinc-200 text-center md:text-lef">
            <p>
              © {currentYear} <span className="font-semibold text-zinc-900 dark:text-white">Aadil Miya</span>. All Rights Reserved.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="#privacy"
              className="text-zinc-600 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-zinc-600 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="#hero"
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40 hidden md:flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowUp size={20} />
        </motion.div>
      </motion.a>
    </footer>
  );
};

export default Footer;