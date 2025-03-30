
import { useRef, useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface Skill {
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'tool';
  level: number;
  description: string;
}

const skills: Skill[] = [
  { name: 'React', type: 'frontend', level: 90, description: 'Building interactive UIs with React and its ecosystem' },
  { name: 'TypeScript', type: 'frontend', level: 85, description: 'Type-safe JavaScript development' },
  { name: 'Tailwind CSS', type: 'frontend', level: 90, description: 'Utility-first CSS framework' },
  { name: 'Next.js', type: 'frontend', level: 80, description: 'React framework for production' },
  { name: 'Node.js', type: 'backend', level: 75, description: 'JavaScript runtime for server-side applications' },
  { name: 'Laravel', type: 'backend', level: 70, description: 'PHP web application framework' },
  { name: 'Flask', type: 'backend', level: 65, description: 'Lightweight Python web framework' },
  { name: 'MongoDB', type: 'database', level: 75, description: 'NoSQL database for modern applications' },
  { name: 'MySQL', type: 'database', level: 80, description: 'Relational database management system' },
  { name: 'Git', type: 'tool', level: 85, description: 'Version control system' },
  { name: 'Docker', type: 'tool', level: 70, description: 'Containerization platform' },
  { name: 'Figma', type: 'tool', level: 80, description: 'UI/UX design tool' },
];

const technologies = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 'Next.js', 'Gatsby', 'Node.js', 'Express', 'Laravel', 'Django', 'Flask', 'Spring Boot'
];

// Soft color classes for badges
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

// Function to get a random color class
const getRandomColorClass = () => {
  const randomIndex = Math.floor(Math.random() * softColorClasses.length);
  return softColorClasses[randomIndex];
};

// Create a color map to ensure consistent colors for the same technology/skill
const createColorMap = (items: string[]) => {
  return items.reduce((map, item) => {
    map[item] = getRandomColorClass();
    return map;
  }, {} as Record<string, string>);
};

const TechStack = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Create color maps for technologies and skills
  const [techColorMap] = useState(() => createColorMap(technologies));
  const [skillColorMap] = useState(() => createColorMap(skills.map(skill => skill.name)));

  return (
    <section id="skills" className="py-20 px-6 lg:px-20 bg-[#edeee9]">
      <h2 className="section-title text-center w-full mb-12">Technologies & Skills</h2>
      
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6 text-secondary">Technologies I Work With</h3>
        <div className="relative overflow-hidden py-4">
          <div className="flex whitespace-nowrap animate-slide-marquee-left">
            {[...technologies, ...technologies].map((tech, i) => (
              <div key={`${tech}-${i}`} className={`mx-4 skill-badge ${techColorMap[tech]}`}>
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
              <HoverCard key={`${skill.name}-${i}`} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div 
                    className={`mx-4 skill-badge ${skillColorMap[skill.name]} cursor-pointer`}
                    onMouseEnter={() => setActiveTooltip(skill.name)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    {skill.name}
                  </div>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 p-4 z-[100] border border-border/50 bg-popover shadow-lg"
                  side="top"
                  align="center"
                  sideOffset={5}
                >
                  <div className="space-y-2">
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                    <div className="mt-2">
                      <div className="text-xs text-muted-foreground mb-1">
                        Proficiency: {skill.level}%
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div 
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${skill.level}%` }}  
                        ></div>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
