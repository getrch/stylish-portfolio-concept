
import React from "react";
import { Button } from "@/components/ui/button";

interface ProjectFilterProps {
  filter: string | null;
  setFilter: (filter: string | null) => void;
  technologies: string[];
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ filter, setFilter, technologies }) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      <Button 
        variant={filter === null ? "default" : "outline"} 
        className="rounded-full"
        onClick={() => setFilter(null)}
      >
        All
      </Button>
      {technologies.map(tech => (
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
  );
};

export default ProjectFilter;
