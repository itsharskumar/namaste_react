const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white py-20 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-indigo-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="w-full aspect-square bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-32 h-32 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer & Creative Thinker</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              I'm a passionate full stack developer with a keen eye for design and user experience. 
              With expertise in modern web technologies, I build scalable and performant applications 
              that solve real-world problems.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable 
              code and following best practices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-3xl font-bold text-indigo-500 mb-1">15+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-indigo-500 mb-1">3+</div>
                <div className="text-sm text-slate-400">Years Exp</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
                <div className="text-3xl font-bold text-indigo-500 mb-1">100%</div>
                <div className="text-sm text-slate-400">Committed</div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="text-slate-300">harsh@example.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <div className="text-slate-300">India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
