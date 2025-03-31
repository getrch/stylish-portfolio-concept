
import React from "react";
import { Github } from "lucide-react";
import { Project } from "@/types/project.types";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectDetailsProps {
  project: Project;
  techColorMap: Record<string, string>;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, techColorMap }) => {
  return (
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
  );
};

export default ProjectDetails;
