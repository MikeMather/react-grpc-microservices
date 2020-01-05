import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import Api from './api/Api';
import { CartItemType, ProductType } from './types';

export const CartContext = createContext([]);
export const ProductContext = createContext([]);

const App: React.FC = () => {
    const [cart, setCart] = useState<CartItemType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        getCart();
    }, []);

    useEffect(() => {
        getProducts()
    }, [cart])

    const getProducts = () => {
        Api('/products').getAll()
            .then(res => res.json())
            .then(r => {
                const cartIds = cart.map(c => c.product_id);
                setProducts(r.products.map(product => ({
                    ...product,
                    inCart: cartIds.includes(product.id)
                })));
            })
            .catch(err => console.log(err));
    }

    const getCart = () => {
        return Api('/cart').getAll()
            .then(res => res.json())
            .then(r => setCart(r.items))
            .catch(err => console.log(err));
    }

    return (
        <div className="App">
            <ProductContext.Provider value={{ products }}>
                <CartContext.Provider value={{ items: cart, getCart }}>
                    <AppRouter />
                </CartContext.Provider>
            </ProductContext.Provider>
        </div>
    );
}

export default App;
