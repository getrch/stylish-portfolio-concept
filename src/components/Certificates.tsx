
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CertificateList from "./certificate/CertificateList";
import AwardList from "./certificate/AwardList";

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
