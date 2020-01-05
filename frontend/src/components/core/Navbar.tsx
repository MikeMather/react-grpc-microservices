import React, { useContext } from 'react';
import { Header, Nav, Badge } from './Styled';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import { CartItemType } from '../../types';


const Navbar: React.FC = () => {

    // The items in the cart
    const { items } = useContext<CartItemType[]>(CartContext);
    return (
        <Header>
            <Nav>
                <Link to="/home">Home</Link>
                <Link to="/cart">Cart {!!items.length && <Badge>{items.length}</Badge>}</Link>
                <Link to="/checkout">Checkout</Link>
            </Nav>
        </Header>
    );
};

export default Navbar;