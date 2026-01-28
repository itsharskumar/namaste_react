const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2023 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Improved application performance by 40%",
        "Led migration to microservices architecture",
        "Reduced deployment time by 60% with CI/CD"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2023",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams.",
      achievements: [
        "Built 15+ production-ready applications",
        "Implemented responsive design system",
        "Reduced bug reports by 50% through testing"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartUp Ventures",
      period: "2020 - 2021",
      description: "Created responsive user interfaces and implemented complex animations. Worked closely with designers to bring mockups to life.",
      achievements: [
        "Improved mobile user experience",
        "Implemented component library",
        "Achieved 95+ Lighthouse scores"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white py-20 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-indigo-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-black z-10 transform -translate-x-1/2"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                    {/* Period badge */}
                    <div className="inline-block px-3 py-1 bg-indigo-600/20 text-indigo-400 text-sm rounded-full mb-3">
                      {exp.period}
                    </div>

                    {/* Title and company */}
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-indigo-400 mb-3">{exp.company}</p>

                    {/* Description */}
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <div key={achIdx} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-slate-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-16">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-indigo-500/50"
          >
            <span>Download Full Resume</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
