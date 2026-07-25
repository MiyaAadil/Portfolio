const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <h2 className="text-xl font-bold text-gray-950 dark:text-gray-200">
          Aadil Miya
        </h2>

        <p className="text-zinc-500 text-center">
          © {new Date().getFullYear()} Aadil Miya. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;