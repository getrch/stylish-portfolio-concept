
import React, { useState, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { projects } from "@/data/projects.data";
import { getRandomColorClass } from "@/utils/colorUtils";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectFilter from "@/components/project/ProjectFilter";

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
      
      <ProjectFilter 
        filter={filter} 
        setFilter={setFilter} 
        technologies={allTechnologies} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Dialog key={project.id}>
            <ProjectCard project={project} techColorMap={techColorMap} />
            <DialogContent className="sm:max-w-3xl">
              <ProjectDetails project={project} techColorMap={techColorMap} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default Projects;
