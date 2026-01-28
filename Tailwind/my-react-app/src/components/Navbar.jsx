import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    /* FULL WIDTH WRAPPER */
    <header className="relative w-full bg-black/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      {/* CENTERED CONTENT */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

        {/* Logo */}
        <a href="#" className="text-xl font-semibold">
          <span className="text-indigo-500">Harsh</span>{" "}
          <span>Tiwari</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Projects", "Skills", "Experience"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative overflow-hidden h-6 group"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                {item}
              </span>
              <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {item}
              </span>
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="border border-slate-600 hover:bg-slate-800 px-5 py-2 rounded-full text-sm transition"
          >
            Contact
          </a>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-indigo-500/30"
          >
            Resume <span className="ml-1">↓</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white hover:text-indigo-400 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md
        border-t border-slate-800 z-50 transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-base">
          {["About", "Projects", "Skills", "Experience"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-500 transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            className="border border-slate-600 hover:bg-slate-800 px-5 py-2 rounded-full text-sm transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>

          {/* Mobile Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium
            hover:bg-slate-100 transition"
            onClick={() => setOpen(false)}
          >
            Resume <span className="ml-1">↓</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
