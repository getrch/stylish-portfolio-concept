
import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

const education: Education[] = [
  {
    id: 1,
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "Aug 2016",
    endDate: "May 2020",
    description: "Graduated with honors. Specialized in web development and artificial intelligence."
  },
  {
    id: 2,
    institution: "Tech Academy",
    degree: "Professional Certificate",
    field: "Full Stack Web Development",
    startDate: "Jan 2021",
    endDate: "June 2021",
    description: "Intensive six-month bootcamp focusing on modern web technologies and best practices."
  },
  {
    id: 3,
    institution: "Design Institute",
    degree: "Certificate",
    field: "UI/UX Design Fundamentals",
    startDate: "Sep 2021",
    endDate: "Dec 2021",
    description: "Learned design principles, user research methods, and prototyping tools."
  }
];

const experiences: WorkExperience[] = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Frontend Developer",
    startDate: "July 2020",
    endDate: "Present",
    description: "Working on enterprise-level web applications using React and TypeScript.",
    responsibilities: [
      "Develop and maintain frontend components for multiple client projects",
      "Collaborate with UX designers to implement responsive designs",
      "Optimize application performance and user experience",
      "Write unit and integration tests for critical features"
    ],
    achievements: [
      "Reduced load time by 40% through code splitting and lazy loading",
      "Implemented a component library used across 5 different projects",
      "Mentored 3 junior developers who are now mid-level contributors"
    ]
  },
  {
    id: 2,
    company: "Creative Agency",
    position: "Web Developer",
    startDate: "Jan 2019",
    endDate: "June 2020",
    description: "Worked as a part-time web developer while completing university studies.",
    responsibilities: [
      "Built and maintained WordPress websites for small businesses",
      "Created custom themes and plugins to meet client requirements",
      "Provided technical support and training for clients"
    ],
    achievements: [
      "Delivered 12 websites with 100% client satisfaction",
      "Reduced average project completion time by 25%",
      "Implemented automated deployment processes"
    ]
  },
  {
    id: 3,
    company: "Startup Innovations",
    position: "Frontend Intern",
    startDate: "May 2018",
    endDate: "Aug 2018",
    description: "Summer internship focused on frontend development for a startup building SaaS solutions.",
    responsibilities: [
      "Assisted in building UI components for the company's main product",
      "Collaborated with senior developers to implement new features",
      "Participated in code reviews and team meetings"
    ],
    achievements: [
      "Developed a reusable form validation library",
      "Created interactive dashboard widgets using D3.js",
      "Received offer for part-time position after internship"
    ]
  }
];

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-6 lg:px-20 bg-[#edeee9]">
      <h2 className="section-title text-center w-full mb-12">Education & Experience</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Timeline */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-secondary flex items-center">
            <Calendar className="mr-2" size={20} /> Education History
          </h3>
          <div className="pl-4" ref={timelineRef}>
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="mb-1 text-xs text-accent font-semibold">
                  {edu.startDate} - {edu.endDate}
                </div>
                <h4 className="text-lg font-bold text-primary">{edu.institution}</h4>
                <p className="text-sm font-medium text-secondary">
                  {edu.degree} in {edu.field}
                </p>
                <p className="text-sm text-primary/70 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Work Experience Cards */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-secondary flex items-center">
            <Calendar className="mr-2" size={20} /> Work Experience
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp) => (
              <Dialog key={exp.id}>
                <DialogTrigger asChild>
                  <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in">
                    <div className="mb-1 text-xs text-accent font-semibold">
                      {exp.startDate} - {exp.endDate}
                    </div>
                    <h4 className="text-lg font-bold text-primary">{exp.position}</h4>
                    <p className="text-sm font-medium text-secondary">{exp.company}</p>
                    <p className="text-sm text-primary/70 mt-2 line-clamp-2">{exp.description}</p>
                    <Button variant="link" className="text-accent p-0 mt-2 h-auto font-medium">
                      View Details
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex flex-col gap-1">
                      <span className="text-2xl">{exp.position}</span>
                      <span className="text-base font-normal text-muted-foreground">
                        {exp.company} | {exp.startDate} - {exp.endDate}
                      </span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold mb-2">Responsibilities</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold mb-2">Key Achievements</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
