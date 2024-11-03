import { shipping } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Shipping = () => {
  return (
    <div className="shipping py-20 bg-primary_clr text-white">
      <div className="container">
        <div className="flex  gap-[96px]">
          {shipping.map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div>
                <Image src={item.icon} alt={item.name} />
              </div>
              <div>
                <h1 className="text-lg">{item.name}</h1>
                <p className="text-sm mt-1">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shipping;
