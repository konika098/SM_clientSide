import Banner from "./(website)/home/Banner";
import Benefit from "./(website)/home/Benefit/Benefit";
import Bestseller from "./(website)/home/Bestseller/Bestseller";
import Category from "./(website)/home/Category/Category";
import Instagram from "./(website)/home/Instagram";
import Shipping from "./(website)/home/Shipping";

export default function Home() {
  return (
   <>
   <Banner/>
   <Category/>
   <Bestseller/>
   <Benefit/>
   <Shipping/>
   <Instagram/>
   </>
  );
}
