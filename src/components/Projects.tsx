
import React, { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  additionalImages: string[];
  technologies: string[];
  repoUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard with real-time analytics, inventory management, and order processing. Built with React, TypeScript, and Node.js.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "Web Application"
  },
  {
    id: 2,
    title: "Personal Finance Tracker",
    description: "An application to track personal expenses, create budgets, and visualize spending patterns with interactive charts.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
    ],
    technologies: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "Web Application"
  },
  {
    id: 3,
    title: "Restaurant Booking System",
    description: "A full-stack application for restaurant table reservations with authentication, admin panel, and automated email notifications.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [],
    technologies: ["Laravel", "MySQL", "Alpine.js", "Tailwind CSS"],
    repoUrl: "https://github.com",
    category: "Web Application"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A modern weather application with 5-day forecast, location detection, and responsive design for all devices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [],
    technologies: ["React", "OpenWeather API", "Styled Components"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    category: "Web Application"
  },
  {
    id: 5,
    title: "Task Management API",
    description: "RESTful API for task management with user authentication, task categories, and detailed documentation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [],
    technologies: ["Flask", "Python", "PostgreSQL", "JWT", "Swagger"],
    repoUrl: "https://github.com",
    category: "API"
  },
  {
    id: 6,
    title: "Smart Home Dashboard",
    description: "A IoT dashboard to control and monitor smart home devices with real-time updates and energy consumption analytics.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [],
    technologies: ["React", "Node.js", "MQTT", "Socket.IO", "Chart.js"],
    liveUrl: "https://example.com",
    category: "IoT"
  }
];

const softColorClasses = [
  'badge-softGreen',
  'badge-softYellow',
  'badge-softOrange',
  'badge-softPurple',
  'badge-softPink',
  'badge-softPeach',
  'badge-softBlue',
  'badge-softGray'
];

const getRandomColorClass = () => {
  const randomIndex = Math.floor(Math.random() * softColorClasses.length);
  return softColorClasses[randomIndex];
};

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))].sort();
  
  const techColorMap = useMemo(() => {
    return allTechnologies.reduce((map, tech) => {
      map[tech] = getRandomColorClass();
      return map;
    }, {} as Record<string, string>);
  }, [allTechnologies]);
  
  const filteredProjects = filter 
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-20 px-6 lg:px-20">
      <h2 className="section-title text-center w-full mb-12">Featured Projects</h2>
      
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Button 
          variant={filter === null ? "default" : "outline"} 
          className="rounded-full"
          onClick={() => setFilter(null)}
        >
          All
        </Button>
        {allTechnologies.map(tech => (
          <Button 
            key={tech}
            variant={filter === tech ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setFilter(tech)}
          >
            {tech}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <div className="project-card cursor-pointer group">
                <div className="h-48 overflow-hidden relative">
                  <AspectRatio ratio={16 / 9} className="w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">View Details</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-sm text-primary/70 flex-1">{project.description.substring(0, 100)}...</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className={`badge ${techColorMap[tech]}`}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && <span className="badge badge-softGray">+{project.technologies.length - 3}</span>}
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                <DialogDescription>
                  <div className="mt-6">
                    <AspectRatio ratio={16 / 9} className="w-full mb-4 overflow-hidden rounded-md">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-center"
                      />
                    </AspectRatio>
                    
                    {project.additionalImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {project.additionalImages.map((img, i) => (
                          <AspectRatio key={i} ratio={16 / 9} className="overflow-hidden rounded-md">
                            <img 
                              src={img} 
                              alt={`${project.title} ${i+1}`} 
                              className="w-full h-full object-cover object-center"
                            />
                          </AspectRatio>
                        ))}
                      </div>
                    )}
                    
                    <h4 className="text-lg font-semibold mb-2 mt-4">Description</h4>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className={`badge ${techColorMap[tech]}`}>{tech}</span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 mt-6">
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                          Source Code <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default Projects;
