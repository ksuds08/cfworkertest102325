import React from 'react';
import { Product } from '../types';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = React.memo(({ products }) => {
    return (
        <div role="list">
            {products.map((product) => ( 
                <div key={product.id} role="listitem">
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
});

export default ProductList;
