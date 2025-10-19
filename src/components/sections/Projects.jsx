import FadeIn from '../animated/FadeIn';
import GlowCard from '../animated/GlowCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A fully responsive e-commerce platform with cart functionality, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Weather Dashboard',
      description:
        'An interactive weather dashboard with real-time data, forecasts, and beautiful visualizations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['React', 'Weather API', 'Chart.js'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Social Media App',
      description:
        'A social media platform with user authentication, posts, comments, likes, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Portfolio Builder',
      description:
        'A drag-and-drop portfolio builder that allows users to create stunning portfolios without coding.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'AI Chat Assistant',
      description:
        'An AI-powered chat assistant with natural language processing and context-aware responses.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['React', 'Python', 'OpenAI API', 'Flask'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={150 * (index + 1)}>
              <GlowCard className="h-full">
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-200 dark:bg-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      className="flex-1 text-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="flex-1 text-center px-4 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg transition-colors"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
