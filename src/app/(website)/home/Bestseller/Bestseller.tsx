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
        <Title
          title="Bestseller Products"
          subtitle="It is a long established fact that a reader will be distracted by the readable content."
        />
        <div className="grid grid-cols-[auto,1fr] gap-8">
          {/* Main Product Section */}
          <div className="relative h-[780px] max-w-[392px] rounded-lg shadow-lg overflow-hidden">
            <Image src={photo} alt="Best product" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 p-4 text-center">
              <h1 className="text-white text-4xl font-bold mb-4">Empower Yourself</h1>
              <Button name="Explore More" />
            </div>
          </div>

          {/* Product List */}
          <div className="grid grid-cols-3 gap-4">
            {bestseller.map((item, index) => (
              <SellerCard
                key={index}
                img={item.img}
                altname={item.name}
                name={item.name}
                price={item.price}
                d_price={item.discount_price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
