import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Project1 from '../assets/images/Project1.png'
import Project2 from '../assets/images/Project2.png'
import Project3 from '../assets/images/Project3.png'
import Project4 from '../assets/images/Project4.png'

const projects = [
  {
    title: "NovaMart",
    description:
      "Modern ecommerce application with cart, wishlist, checkout, EmailJS order confirmation and responsive UI.",
    image: Project1,
    tech: ["React", "Context API", "Tailwind", "EmailJS"],
    live: "https://nova-mart-ecommerce-pied.vercel.app/",
    github: "https://github.com/MiyaAadil/NovaMart-ecommerce",
  },
  {
    title: "Cortexis", 
    description:
      "Corporate website with dark mode, Framer Motion animations and fully responsive design.",
    image: Project2,
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://corporate-website-six-ecru.vercel.app/",
    github: "https://github.com/MiyaAadil/Corporate-website",
  },
  {
    title: "NewsPulse",
    description:
      "News portal featuring search, category filters, bookmarks, dark mode and detailed article pages.",
    image: Project3,
    tech: ["React", "API", "Tailwind"],
    live: "https://news-portal-site-eight.vercel.app/",
    github: "https://github.com/MiyaAadil/News-portal-site",
  },{
    title: "Wanderly",
    description:
      "News portal featuring search, category filters, bookmarks, dark mode and detailed article pages.",
    image: Project4,
    tech: ["React", "framer-motion", "Tailwind"],
    live: "https://tours-travel-website-chi.vercel.app/",
    github: "https://github.com/MiyaAadil/Tours-Travel-website",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-zinc-50 dark:bg-zinc-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-gray-300">
            Featured Projects
          </h2>

          <p className="mt-5 text-zinc-600 dark:text-zinc-400">
            Some of the projects I've built while learning modern frontend development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-white dark:bg-zinc-950 shadow-xl border border-zinc-200 dark:border-zinc-800"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold dark:text-gray-200">
                  {project.title}
                </h3>

                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-xl"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 px-5 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition dark:text-gray-200"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;