import React from 'react';
import Image from 'next/image';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { Product } from '@/utils/type'; // Adjust this path as necessary

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="relative p-4 border rounded-lg shadow-md hover:shadow-lg group">
    <div className="relative h-64 w-full rounded-lg overflow-hidden">
      <Image src={product.img} alt={product.name} layout="fill" objectFit="cover" />
    </div>
    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-2 bg-white rounded-full shadow hover:scale-105">
        <CiHeart className="text-gray-600" />
      </button>
      <button className="p-2 bg-white rounded-full shadow hover:scale-105">
        <CiSearch className="text-gray-600" />
      </button>
    </div>
    <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
    <div className="flex items-center space-x-2">
      <span className="text-primary_clr font-bold">${product.price}</span>
      {product.oldPrice && <span className="line-through text-gray-500">${product.oldPrice}</span>}
    </div>
  </div>
);

export default ProductCard;
