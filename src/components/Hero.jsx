import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Me from '../assets/images/myself.png'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white dark:from-zinc-950 dark:via-blue-950/20 dark:to-zinc-950 transition-colors duration-300"
    >
      {/* Enhanced Background Blurs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/40 blur-[130px] opacity-60" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/25 blur-[140px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px] opacity-40" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main Content */}
      <div className="relative max-w-7xl w-full mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-base md:text-lg font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                Welcome to my portfolio
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-blue-100 dark:to-white">
                Aadil Miya
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-700 dark:text-blue-300">
                Frontend React Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-200 max-w-xl"
            >
              I craft <span className="font-semibold text-blue-600 dark:text-blue-300">modern, responsive, and performant</span> web applications with React, JavaScript, and Tailwind CSS. I'm passionate about creating beautiful user interfaces with smooth animations and exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-teal-300 to-teal-700 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Projects
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-xl border-2 border-zinc-300 dark:border-gray-300 dark:text-white px-8 py-4 font-semibold dark:hover:bg-zinc-200/50 transition-all duration-300 hover:border-teal-400 dark:hover:border-gray-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6">
              <p className="text-lg font-semibold text-zinc-500 dark:text-black/70">
                Connect with me
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MiyaAadil"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-zinc-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>

                <a
                  href="https://www.linkedin.com/in/aadil-miya-390b9925a/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-zinc-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>

                <a
                  href="mailto:miyaaadil76@gmail.com"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-zinc-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-3 pt-4">
              <p className="text-lg font-semibold text-zinc-600 dark:text-black/70">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-teal-200 dark:border-teal-800 text-zinc-700 dark:text-blue-100 px-4 py-2 text-sm font-medium bg-blue-50/50 dark:bg-teal-700 backdrop-blur-sm hover:bg-blue-100 dark:hover:bg-teal-900 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate="animate"
              variants={floatingVariants}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              {/* Gradient Border Circle */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 p-1 shadow-2xl">
                <div className="absolute inset-1 rounded-2xl bg-white dark:bg-zinc-950" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 blur-2xl opacity-75 animate-pulse" />

              {/* Profile Image Container */}
              <div className="relative h-full rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Placeholder - Replace with actual image */}
                <img
                  src={Me}
                  alt="Aadil Miya"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full px-4 py-2 font-bold text-sm shadow-lg"
              >
                Available
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block w-2 h-2 rounded-full bg-blue-400 opacity-50" />
      <div className="absolute top-1/4 right-20 hidden lg:block w-3 h-3 rounded-full bg-purple-400 opacity-40" />
    </section>
  );
};

export default Hero;