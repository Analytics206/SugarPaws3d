import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const products = [
        // Sample product data
        { id: 1, name: 'Fun Character 1', price: 10.99, image: '/path/to/image1.jpg' },
        { id: 2, name: 'Fun Character 2', price: 12.99, image: '/path/to/image2.jpg' },
        { id: 3, name: 'Fun Character 3', price: 9.99, image: '/path/to/image3.jpg' },
    ];

    return (
        <div className="products-page">
            <h1>Our 3D Models</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;