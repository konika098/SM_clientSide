import Button from "@/components/Button"; 
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import banner from "/public/assets/images.png"

const Banner = () => {
  return (
    <div className="banner bg-fifth_clr pt-[128px] pb-[210px]">
      <div className="container">
        <div className="flex justify-center items-center">
        <div>
          <h1 className="font-luxurious text-8xl text-primary_clr">Made for you!</h1>
          <h1 className="text-7xl text-secondary_clr">Unleash Your Divine Beauty With Us</h1>
          <p className="text-lg text-third_clr mt-4 mb-14">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
          <Button name="Shop Now" icon={<FaArrowRightLong />}/>
        </div>
        <div>
            <Image src={banner} width={836} height={100} alt="banner img"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
