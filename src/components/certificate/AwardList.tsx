
import React from "react";
import { awards } from "@/data/awards.data";
import AwardCard from "./AwardCard";

const AwardList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {awards.map((award) => (
        <AwardCard key={award.id} award={award} />
      ))}
    </div>
  );
};

export default AwardList;
