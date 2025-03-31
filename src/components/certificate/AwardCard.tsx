
import React from "react";
import { Award } from "@/types/certificate.types";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface AwardCardProps {
  award: Award;
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
  return (
    <Dialog>
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
  );
};

export default AwardCard;
