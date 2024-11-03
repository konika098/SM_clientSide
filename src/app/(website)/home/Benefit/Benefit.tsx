import React from "react";
import BenefitSection from "./BenefitSection";
import Image from "next/image";
import photo from "/public/assets/photo.png";
import Title from "@/components/Title";

const Benefit = () => {
  return (
    <div className="benefit bg-fifth_clr py-[120px]">
      <div className="container">
        <div>
            <Title title="Benefit Using Our Product" subtitle="It is a long established fact that a reader will be distracted by
            the readable content."/>
        </div>
        <div className="flex justify-between items-center">
          <BenefitSection />
          <div className="max-w-[511px] h-full">
            <Image src={photo} alt="photo" className="h-[550px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
