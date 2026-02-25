import React, { createContext, useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('exergie_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('exergie_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (event) => {
        // Check if event is already in cart
        const exists = cart.find((item) => item.id === event.id);
        if (exists) {
            toast.error(`${event.name} is already in the cart!`, {
                style: {
                    background: '#333',
                    color: '#fff',
                    border: '1px solid rgba(255, 77, 77, 0.4)'
                },
                iconTheme: {
                    primary: '#ff4d4d',
                    secondary: '#fff'
                }
            });
            return;
        }

        setCart([...cart, event]);
        toast.success(`${event.name} added to cart!`, {
            style: {
                background: '#333',
                color: '#fff',
                border: '1px solid rgba(123, 97, 255, 0.4)'
            },
            iconTheme: {
                primary: '#7b61ff',
                secondary: '#fff'
            }
        });
    };

    const removeFromCart = (eventId) => {
        setCart(cart.filter((item) => item.id !== eventId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isItemInCart = (eventId) => {
        return cart.some((item) => item.id === eventId);
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isItemInCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
