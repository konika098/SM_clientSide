import { bestseller } from "@/utils/data";
import React from "react";
import SellerCard from "./SellerCard";
import Button from "@/components/Button";
import Image from "next/image";
import photo from "/public/assets/photo.png";
import Title from "@/components/Title";

const Bestseller = () => {
  return (
    <div className="bestseller mb-20">
      <div className="container">
        <div>
          <Title
            title=" Bestseller Products"
            subtitle="It is a long established fact that a reader will be distracted by
            the readable content."
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="h-[780px] min-w-[392px] relative">
            <Image src={photo} alt="best product" className="w-full h-full" />
            <div className="absolute bottom-10 left-10">
              <h1 className="text-white text-4xl mb-8">Empower Yourself</h1>
              <Button name="Explore More" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {bestseller.map((items, index) => (
              <SellerCard
                key={index}
                img={items.img}
                altname={items.name}
                name={items.name}
                price={items.price}
                d_price={items.discount_price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
