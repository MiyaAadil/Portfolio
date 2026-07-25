import { motion } from "framer-motion";
import { Code2, Rocket, Laptop2 } from "lucide-react";

const About = () => {
  const cards = [
    {
      icon: <Code2 size={32} />,
      title: "Frontend Development",
      desc: "Building fast, responsive and modern web applications using React, JavaScript and Tailwind CSS.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Continuous Learning",
      desc: "Always improving by learning new technologies like Next.js, TypeScript and modern frontend architecture.",
    },
    {
      icon: <Laptop2 size={32} />,
      title: "Clean UI",
      desc: "Focused on creating beautiful interfaces with smooth animations and great user experience.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl dark:text-gray-200 font-bold">
            About Me
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400 leading-8">
            I'm a passionate Frontend Developer who enjoys turning ideas into
            modern, responsive and interactive web applications. I love solving
            problems, learning new technologies and creating clean user
            interfaces with attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-blue-800 text-white flex items-center justify-center dark:text-gray-200">
                {card.icon}
              </div>

              <h3 className="mt-8 text-2xl font-semibold dark:text-gray-300">
                {card.title}
              </h3>

              <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">
                {card.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;