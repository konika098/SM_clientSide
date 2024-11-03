import Image, { StaticImageData } from 'next/image';

type ISellerProps = {
  img: StaticImageData;
  altname: string;
  name: string;
  price: number;
  d_price: number;
};

const SellerCard: React.FC<ISellerProps> = ({ img, altname, name, price, d_price }) => {
  return (
    <div className="p-4  transition-shadow duration-200 ease-in-out">
      <Image src={img} alt={altname} className="object-cover  h-[300px] mb-4" />
      <h1 className="text-lg font-semibold mb-2">{name}</h1>
      <div className="flex items-center gap-2">
      <h1 className="text-primary_clr font-bold">${d_price}</h1>
        <h1 className="text-third_clr line-through">${price}</h1>
       
      </div>
    </div>
  );
};

export default SellerCard;