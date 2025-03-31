
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  image: string;
  credential?: string;
}

interface Award {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  description: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "React - The Complete Guide",
    issuer: "Udemy",
    issueDate: "March 2022",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    credential: "UC-123456789"
  },
  {
    id: 2,
    name: "Professional Frontend Developer",
    issuer: "Frontend Masters",
    issueDate: "July 2021",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    credential: "FM-987654321"
  },
  {
    id: 3,
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: "January 2021",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    credential: "RWD-123456"
  },
  {
    id: 4,
    name: "TypeScript for Professionals",
    issuer: "Coursera",
    issueDate: "April 2022",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    credential: "TS-987654"
  }
];

const awards: Award[] = [
  {
    id: 1,
    name: "Best Web Application",
    issuer: "Regional Hackathon 2022",
    issueDate: "November 2022",
    description: "First place for developing an innovative web application that helps users track their carbon footprint and suggests ways to reduce it.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    id: 2,
    name: "Most Innovative Solution",
    issuer: "Tech Startup Competition",
    issueDate: "June 2022",
    description: "Recognized for creating a unique solution that addresses accessibility challenges for visually impaired users navigating websites.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
  }
];

const Certificates = () => {
  const [selectedTab, setSelectedTab] = useState<string>("certificates");

  return (
    <section id="certificates" className="py-20 px-6 lg:px-20">
      <h2 className="section-title text-center w-full mb-12">Certificates & Awards</h2>
      
      <Tabs defaultValue="certificates" className="w-full" onValueChange={setSelectedTab}>
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
        </TabsList>
        
        <TabsContent value="certificates" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <div className="project-card cursor-pointer">
                    <div className="h-40 overflow-hidden">
                      <AspectRatio ratio={4/3} className="w-full h-full">
                        <img 
                          src={cert.image} 
                          alt={cert.name} 
                          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                        />
                      </AspectRatio>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1 text-primary">{cert.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-primary/70">{cert.issuer}</p>
                        <p className="text-xs text-accent">{cert.issueDate}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2 text-accent p-0 flex items-center gap-1">
                        View Certificate <ArrowUpRight size={14} />
                      </Button>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{cert.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <AspectRatio ratio={16/9} className="w-full rounded-md shadow-md mb-4 overflow-hidden">
                      <img 
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </AspectRatio>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold">Issuer</p>
                        <p>{cert.issuer}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Issue Date</p>
                        <p>{cert.issueDate}</p>
                      </div>
                      {cert.credential && (
                        <div className="col-span-2">
                          <p className="font-semibold">Credential ID</p>
                          <p>{cert.credential}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="awards" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award) => (
              <Dialog key={award.id}>
                <DialogTrigger asChild>
                  <div className="project-card cursor-pointer flex flex-col md:flex-row">
                    <div className="h-40 md:w-1/3 overflow-hidden">
                      <AspectRatio ratio={1/1} className="w-full h-full">
                        <img 
                          src={award.image} 
                          alt={award.name} 
                          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                        />
                      </AspectRatio>
                    </div>
                    <div className="p-4 md:w-2/3">
                      <h3 className="text-lg font-semibold mb-1 text-primary">{award.name}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm text-primary/70">{award.issuer}</p>
                        <p className="text-xs text-accent">{award.issueDate}</p>
                      </div>
                      <p className="text-sm text-primary/70 line-clamp-2">{award.description}</p>
                      <Button variant="ghost" size="sm" className="mt-2 text-accent p-0 flex items-center gap-1">
                        View Details <ArrowUpRight size={14} />
                      </Button>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{award.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <AspectRatio ratio={16/9} className="w-full rounded-md shadow-md mb-4 overflow-hidden">
                      <img 
                        src={award.image}
                        alt={award.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </AspectRatio>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="font-semibold">Issuer</p>
                        <p>{award.issuer}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Date</p>
                        <p>{award.issueDate}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Description</p>
                      <p className="text-gray-700">{award.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Certificates;
