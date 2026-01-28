const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 py-8 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Harsh Tiwari. All rights reserved.
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-slate-400 hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-slate-400 hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Made with love */}
          <div className="text-slate-400 text-sm flex items-center gap-2">
            Made with <span className="text-red-500">❤️</span> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
