import Title from "@/components/Title";
import { insta } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Instagram = () => {
  return (
    <div className="insta my-[120px]">
      <div className="container">
        <Title
          title="On The Instagram"
          subtitle="It is a long established fact that a reader will be distracted by the readable content."
        />
        <div className="flex gap-8">
          {insta.map((data, index) => (
            <div key={index}>
              <Image src={data.img} alt="insta" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
