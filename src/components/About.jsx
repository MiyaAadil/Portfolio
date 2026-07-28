import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

const About = () => {
  const stats = [
    {
      number: "4+",
      label: "Projects Built",
    },
  ];

  const highlights = [
    "Built responsive web applications used by thousands of users",
    "Specialized in React, modern JavaScript, and Tailwind CSS",
    "Passionate about clean code, performance optimization, and UX",
    "Continuously learning Next.js, TypeScript, and modern frameworks",
  ];

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

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 lg:py-32 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide">
              Who I Am
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-zinc-900 dark:text-white">
            Crafting Digital Experiences
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
            I'm a frontend developer obsessed with building clean, performant, and beautiful web applications. With a strong foundation in React and modern JavaScript, I transform complex ideas into elegant digital solutions.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Story */}

          {/* Right - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Background */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />

            <div className="relative space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="rounded-2xl border border-blue-200/50 dark:border-blue-800/50 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/30 dark:to-cyan-950/20 backdrop-blur-sm p-8 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                      {stat.number}
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 font-semibold mt-3">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
              
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            Let's collaborate and bring your ideas to life
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get In Touch
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;