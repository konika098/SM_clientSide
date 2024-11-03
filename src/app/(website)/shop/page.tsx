import React from 'react';
import Sidebar from './Sidebar';
import ProductGrid from './ProductGrid';
import { products } from '@/utils/data'; 

const Shop = () => {
  return (
    <div className="shop">
      <div className="container flex">
        <Sidebar />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Shop;
