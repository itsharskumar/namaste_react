import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with cart, payments, and admin dashboard. Built with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: null,
      link: "https://example.com",
      github: "https://github.com"
    },
    {
      title: "Social Media App",
      description: "Real-time social media application with posts, comments, likes, and user profiles. Features authentication and file uploads.",
      tags: ["Next.js", "Firebase", "Tailwind"],
      image: null,
      link: "https://example.com",
      github: "https://github.com"
    },
    {
      title: "Task Management Tool",
      description: "Collaborative task management platform with drag-and-drop boards, team features, and real-time updates.",
      tags: ["React", "Redux", "Express", "PostgreSQL"],
      image: null,
      link: "https://example.com",
      github: "https://github.com"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with forecasts, maps, and location-based alerts. Integrates multiple weather APIs.",
      tags: ["Vue.js", "API", "Chart.js"],
      image: null,
      link: "https://example.com",
      github: "https://github.com"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support, SEO optimization, and analytics. Built for content creators.",
      tags: ["Next.js", "MDX", "Vercel"],
      image: null,
      link: "https://example.com",
      github: "https://github.com"
    },
    {
      title: "AI Chat Application",
      description: "AI-powered chat application using OpenAI API with conversation history and customizable AI personalities.",
      tags: ["React", "OpenAI", "Node.js"],
      image: null,
      link: "https://example.com",
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-slate-900 text-slate-900 dark:text-white py-20 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of my recent work and side projects. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-all hover:scale-105"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
