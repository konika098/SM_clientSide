import { category } from "@/utils/data";
import CategoryCard from "./CategoryCard";
import Title from "@/components/Title";

const Category = () => {
  return (
    <div className="category my-[120px]">
      <div className="container">
      <Title title="Shop by Category"/>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-14">
          {category.map((categoryitem, index) => (
            <CategoryCard
              key={index}
              img={categoryitem.img}
              altname={categoryitem.name}
              name={categoryitem.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
