import React, { useState, useEffect, useContext } from 'react';
import Styled from './Styled';
import { ProductType, ContextType } from '../../types';
import Api from '../../api/Api';
import Product from './Product';
import { ProductContext } from '../../App';


const ProductList: React.FC = () => {
    const { products } = useContext<ProductType[]>(ProductContext);
    
    return (
        <Styled.ProductListContainer>
            {products.map(product => (
                <Product {...product} price={product.price / 100} />
            ))}
        </Styled.ProductListContainer>
    );
};

export default ProductList;