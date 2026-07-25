import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-zinc-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-gray-200">
            Let's Work Together
          </h2>

          <p className="mt-5 text-zinc-600 dark:text-zinc-400">
            Have a project or internship opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-20">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent outline-none dark:text-gray-200"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent outline-none dark:text-gray-200"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent outline-none resize-none dark:text-gray-200"
            />

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl cursor-pointer">
              Send Message
            </button>

          </form>

          <div className="flex flex-col justify-center">

            <h3 className="text-3xl font-bold dark:text-gray-300">
              Get In Touch
            </h3>

            <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
              I'm currently looking for frontend developer opportunities,
              internships and freelance projects.
            </p>

            <div className="flex gap-5 mt-10 dark:text-gray-200">

              <a
                href="https://github.com/MiyaAadil"
                target="_blank"
                className="py-3 px-3.5 rounded-full bg-zinc-200 dark:bg-zinc-900 hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/aadil-miya-390b9925a/"
                target="_blank"
                className="py-3 px-3.5 rounded-full bg-zinc-200 dark:bg-zinc-900 hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="#"
                className="py-3 px-3.5 rounded-full bg-zinc-200 dark:bg-zinc-900 hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;