import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/30 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl w-full mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          <p className="text-blue-500 font-semibold text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-zinc-900 dark:text-white">
            Aadil Miya
          </h1>

          <h2 className="mt-5 text-2xl md:text-4xl font-semibold text-zinc-700 dark:text-zinc-300">
            Frontend React Developer
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            I build modern, responsive and high-performance web applications
            using React, JavaScript and Tailwind CSS with a strong focus on
            clean UI, smooth animations and great user experience.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-white transition hover:bg-blue-700"
            >
              View Projects

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-300 dark:border-zinc-700 dark:text-white px-7 py-4 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              Contact Me
            </a>

          </div>

          {/* Social */}

          <div className="flex items-center gap-5 mt-12 dark:text-white">

            <a
              href="https://github.com/MiyaAadil"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-3.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/aadil-miya-390b9925a/"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-3.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="mailto:miyaaadil76@gmail.com"
              target="_blank"
              className="py-3 px-3.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:scale-110 transition"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

          </div>

          {/* Tech */}

          <div className="flex flex-wrap gap-3 mt-14">

            {[
              "React",
              "JavaScript",
              "Tailwind",
              "Framer Motion",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full shadow shadow-teal-400 border border-zinc-300 dark:border-zinc-700 dark:text-gray-200 px-5 py-2 text-sm bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}

          </div>

        </motion.div>

      </div>
      
    </section>
  );
};

export default Hero;