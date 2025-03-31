
import React from "react";
import { certificates } from "@/data/certificates.data";
import CertificateCard from "./CertificateCard";

const CertificateList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {certificates.map((cert) => (
        <CertificateCard key={cert.id} certificate={cert} />
      ))}
    </div>
  );
};

export default CertificateList;
