import ProductCard from '@/components/products/ProductCard';
import React from 'react';

const Products = async () => {

    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();
    console.log(products);

    return (
        <div>
            <h2>All Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;