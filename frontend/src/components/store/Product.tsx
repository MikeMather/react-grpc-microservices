import React, { useContext } from 'react';
import Styled from './Styled'
import { ProductType, ContextType } from '../../types';
import Api from '../../api/Api';
import { CartContext } from '../../App';

const { ProductDetails, ProductContainer, ProductImage, AddButton, InCartLabel } = Styled;

const Product: React.FC<ProductType> = ({id, name, imagePath, description, price, inCart}) => {
    
    const { getCart } = useContext<ContextType>(CartContext);

    const handleAddToCart = () => {
        Api('/cart/add-item').create({
            product_id: id,
            quantity: 1
        })
        .then(() => getCart())
        .catch(err => console.log(err));
    };

    return (
        <ProductContainer>
            <ProductImage url={imagePath} />
            <ProductDetails>
                <p>{name}</p>
                <p>{description}</p>
                <p>${price}</p>
            </ProductDetails>
            {inCart 
                ? <InCartLabel>In Cart</InCartLabel>
                : <AddButton onClick={handleAddToCart}>Add to Cart</AddButton>
            }
            
        </ProductContainer>
    )
}

export default Product;