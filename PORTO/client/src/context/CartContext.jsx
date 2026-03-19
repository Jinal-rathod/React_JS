import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const toggleCart = (product) => {
        const exists = cart.find(item => item.id === product.id);

        if (exists) {
            setCart(cart.filter(item => item.id !== product.id));
        } else {
            setCart([...cart, product]);
        }
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                toggleCart,
                isInCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};