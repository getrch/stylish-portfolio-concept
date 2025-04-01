
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CertificateList from "./certificate/CertificateList";
import AwardList from "./certificate/AwardList";
import { Award, FileText } from "lucide-react";

const Certificates = () => {
  const [selectedTab, setSelectedTab] = useState<string>("certificates");

  return (
    <section id="certificates" className="py-20 px-6 lg:px-20">
      <h2 className="section-title text-center w-full mb-12">Certificates & Awards</h2>
      
      <Tabs defaultValue="certificates" className="w-full" onValueChange={setSelectedTab}>
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1 bg-muted">
          <TabsTrigger 
            value="certificates" 
            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <FileText className="w-4 h-4" />
            Certificates
          </TabsTrigger>
          <TabsTrigger 
            value="awards" 
            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <Award className="w-4 h-4" />
            Awards
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="certificates" className="animate-fade-in">
          <CertificateList />
        </TabsContent>
        
        <TabsContent value="awards" className="animate-fade-in">
          <AwardList />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Certificates;
