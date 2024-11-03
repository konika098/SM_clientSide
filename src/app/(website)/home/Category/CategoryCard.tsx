import Image, { StaticImageData } from "next/image";

type CategoryCardProps = {
  img: StaticImageData;
  altname: string;
  name: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ img, altname, name }) => {
  return (
    <div className="bg-fifth_clr px-5 py-4">
      <Image src={img} alt={altname} width={381} height={470}/>
      <h1 className="text-2xl mt-10 font-medium">{name}</h1>
    </div>
  );
};

export default CategoryCard;
