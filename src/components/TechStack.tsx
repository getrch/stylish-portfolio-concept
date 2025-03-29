
import { useRef, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Skill {
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'tool';
  level: number;
  color: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'React', type: 'frontend', level: 90, color: 'badge-primary', description: 'Building interactive UIs with React and its ecosystem' },
  { name: 'TypeScript', type: 'frontend', level: 85, color: 'badge-secondary', description: 'Type-safe JavaScript development' },
  { name: 'Tailwind CSS', type: 'frontend', level: 90, color: 'badge-accent', description: 'Utility-first CSS framework' },
  { name: 'Next.js', type: 'frontend', level: 80, color: 'badge-primary', description: 'React framework for production' },
  { name: 'Node.js', type: 'backend', level: 75, color: 'badge-secondary', description: 'JavaScript runtime for server-side applications' },
  { name: 'Laravel', type: 'backend', level: 70, color: 'badge-accent', description: 'PHP web application framework' },
  { name: 'Flask', type: 'backend', level: 65, color: 'badge-primary', description: 'Lightweight Python web framework' },
  { name: 'MongoDB', type: 'database', level: 75, color: 'badge-secondary', description: 'NoSQL database for modern applications' },
  { name: 'MySQL', type: 'database', level: 80, color: 'badge-accent', description: 'Relational database management system' },
  { name: 'Git', type: 'tool', level: 85, color: 'badge-primary', description: 'Version control system' },
  { name: 'Docker', type: 'tool', level: 70, color: 'badge-secondary', description: 'Containerization platform' },
  { name: 'Figma', type: 'tool', level: 80, color: 'badge-accent', description: 'UI/UX design tool' },
];

const technologies = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 'Next.js', 'Gatsby', 'Node.js', 'Express', 'Laravel', 'Django', 'Flask', 'Spring Boot'
];

const TechStack = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="py-20 px-6 lg:px-20 bg-[#edeee9]">
      <h2 className="section-title text-center w-full mb-12">Technologies & Skills</h2>
      
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6 text-secondary">Technologies I Work With</h3>
        <div className="relative overflow-hidden py-4">
          <div className="flex whitespace-nowrap animate-slide-marquee-left">
            {[...technologies, ...technologies].map((tech, i) => (
              <div key={`${tech}-${i}`} className="mx-4 skill-badge badge-primary">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-6 text-secondary">My Skills</h3>
        <div className="relative overflow-hidden py-4">
          <div className="flex whitespace-nowrap animate-slide-marquee-right">
            {[...skills, ...skills].map((skill, i) => (
              <TooltipProvider key={`${skill.name}-${i}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={`mx-4 skill-badge ${skill.color}`}
                      onMouseEnter={() => setActiveTooltip(skill.name)}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      {skill.name}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="p-3 max-w-xs">
                    <p className="font-medium text-sm">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full mt-2">
                      <div 
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${skill.level}%` }}  
                      ></div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
