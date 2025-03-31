
import React from "react";
import { Project } from "@/types/project.types";
import { DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  project: Project;
  techColorMap: Record<string, string>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, techColorMap }) => {
  return (
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
  );
};

export default ProjectCard;
