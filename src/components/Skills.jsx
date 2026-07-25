import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Framer Motion",
  "Responsive Design",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-gray-300">
            Skills
          </h2>

          <p className="mt-5 text-zinc-600 dark:text-zinc-400">
            Technologies I use to build modern web applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 mt-16">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.08,
                rotate: -2,
              }}
              className="px-6 py-4 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 font-medium cursor-default dark:text-gray-300"
            >
              {skill}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;