
import React from "react";
import { Certificate } from "@/types/certificate.types";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="project-card cursor-pointer">
          <div className="h-40 overflow-hidden">
            <AspectRatio ratio={4/3} className="w-full h-full">
              <img 
                src={certificate.image} 
                alt={certificate.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
            </AspectRatio>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1 text-primary">{certificate.name}</h3>
            <div className="flex justify-between items-center">
              <p className="text-sm text-primary/70">{certificate.issuer}</p>
              <p className="text-xs text-accent">{certificate.issueDate}</p>
            </div>
            <Button variant="ghost" size="sm" className="mt-2 text-accent p-0 flex items-center gap-1">
              View Certificate <ArrowUpRight size={14} />
            </Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{certificate.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <AspectRatio ratio={16/9} className="w-full rounded-md shadow-md mb-4 overflow-hidden">
            <img 
              src={certificate.image}
              alt={certificate.name}
              className="w-full h-full object-cover object-center"
            />
          </AspectRatio>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold">Issuer</p>
              <p>{certificate.issuer}</p>
            </div>
            <div>
              <p className="font-semibold">Issue Date</p>
              <p>{certificate.issueDate}</p>
            </div>
            {certificate.credential && (
              <div className="col-span-2">
                <p className="font-semibold">Credential ID</p>
                <p>{certificate.credential}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateCard;
