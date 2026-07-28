import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  CheckCircle2, AlertCircle, Loader } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS - Replace with your Public Key
emailjs.init("k8cBj7A-oTY-ngSmS");

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

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

  // Validate form
  const validateForm = () => {
    if (!formData.user_name.trim()) {
      setErrorMessage("Name is required");
      return false;
    }
    if (!formData.user_email.trim()) {
      setErrorMessage("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      setErrorMessage("Please enter a valid email");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Message is required");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage("Message should be at least 10 characters");
      return false;
    }
    return true;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (status === "error") {
      setStatus(null);
      setErrorMessage("");
    }
  };

  // Send email using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // Send email using EmailJS
      // Replace SERVICE_ID and TEMPLATE_ID with your EmailJS credentials
      await emailjs.send(
        "service_awnn1gl",
        "template_aei08jb",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
          to_email: "miyaaadil76@gmail.com", // Your email
        }
      );

      // Success
      setStatus("success");
      setFormData({ user_name: "", user_email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const contactDetails = [
    {
      // icon: faEnvelope,
      label: "Email",
      value: "miyaaadil76@gmail.com",
      href: "mailto:miyaaadil76@gmail.com",
    },
    {
      // icon: faPhone,
      label: "Phone",
      value: "+977 9863266164",
      href: "tel:+1234567890",
    },
    {
      // icon: faMapPin,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-zinc-950 dark:via-blue-950/20 dark:to-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide">
              Get In Touch
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-zinc-900 dark:text-white">
            Let's Create Something Amazing
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to collaborate with you. Reach out and let's discuss how we can work together.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:max-w-7xl mx-auto lg:w-200 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Your name.."
                  className="w-full px-6 py-4 rounded-xl border-2 border-zinc-200 dark:border-zinc-400 bg-white dark:bg-zinc-300 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-400 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-100">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-6 py-4 rounded-xl border-2 border-zinc-200 dark:border-zinc-400 bg-white dark:bg-zinc-300 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-400 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-xl border-2 border-zinc-200 dark:border-zinc-400 bg-white dark:bg-zinc-300 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-400 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 resize-none"
                />
              </motion.div>

              {/* Error Message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 items-center p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800"
                >
                  <AlertCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                    {errorMessage}
                  </p>
                </motion.div>
              )}

              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 items-center p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800"
                >
                  <CheckCircle2 size={20} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Loader size={20} />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;