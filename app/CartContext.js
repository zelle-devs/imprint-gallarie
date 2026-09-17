"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import ImprintLoader from '@/Components/ImprintLoader/ImprintLoader'; // <-- apna sahi path yahan lagao

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItemsCartSidebar, setCartItemsCartSidebar] = useState([]);
    const [isOpenCartSidebar, setIsOpenCartSidebar] = useState(false);
    const [isLoadedCartSidebar, setIsLoadedCartSidebar] = useState(false);
    const [isCartLoadingCartSidebar, setIsCartLoadingCartSidebar] = useState(false); 

    useEffect(() => {
        const savedCart = localStorage.getItem('beyvora_cart');
        if (savedCart) {
            try {
                setCartItemsCartSidebar(JSON.parse(savedCart));
            } catch (error) {
                setCartItemsCartSidebar([]);
            }
        }
        setIsLoadedCartSidebar(true);
    }, []);

    useEffect(() => {
        if (isLoadedCartSidebar) {
            localStorage.setItem('beyvora_cart', JSON.stringify(cartItemsCartSidebar));
        }
    }, [cartItemsCartSidebar, isLoadedCartSidebar]);

    const openCartSidebar = () => setIsOpenCartSidebar(true);
    const closeCartSidebar = () => setIsOpenCartSidebar(false);

    // 👇 Yahan delay ko 5000ms (5 seconds) kar diya hai
    const runWithCartLoaderCartSidebar = (action, delay = 5000) => {
        setIsCartLoadingCartSidebar(true);
        setTimeout(() => {
            action();
            setIsCartLoadingCartSidebar(false);
        }, delay);
    };

    const addItemCartSidebar = (product) => {
        runWithCartLoaderCartSidebar(() => {
            setCartItemsCartSidebar((prevItems) => {
                const existingItem = prevItems.find(
                    (item) => item.idCartSidebar === product.idCartSidebar
                );

                if (existingItem) {
                    return prevItems.map((item) =>
                        item.idCartSidebar === product.idCartSidebar
                            ? {
                                  ...item,
                                  quantityCartSidebar:
                                      item.quantityCartSidebar +
                                      (product.quantityCartSidebar || 1),
                              }
                            : item
                    );
                }

                return [
                    ...prevItems,
                    { ...product, quantityCartSidebar: product.quantityCartSidebar || 1 },
                ];
            });

            openCartSidebar(); 
        });
    };

    const increaseItemCartSidebar = (id) => {
        runWithCartLoaderCartSidebar(() => {
            setCartItemsCartSidebar((prevItems) =>
                prevItems.map((item) =>
                    item.idCartSidebar === id
                        ? { ...item, quantityCartSidebar: item.quantityCartSidebar + 1 }
                        : item
                )
            );
        });
    };

    const decreaseItemCartSidebar = (id) => {
        runWithCartLoaderCartSidebar(() => {
            setCartItemsCartSidebar((prevItems) =>
                prevItems
                    .map((item) =>
                        item.idCartSidebar === id
                            ? { ...item, quantityCartSidebar: item.quantityCartSidebar - 1 }
                            : item
                    )
                    .filter((item) => item.quantityCartSidebar > 0)
            );
        });
    };

    const removeItemCartSidebar = (id) => {
        runWithCartLoaderCartSidebar(() => {
            setCartItemsCartSidebar((prevItems) =>
                prevItems.filter((item) => item.idCartSidebar !== id)
            );
        });
    };

    return (
        <CartContext.Provider
            value={{
                cartItemsCartSidebar,
                isOpenCartSidebar,
                openCartSidebar,
                closeCartSidebar,
                addItemCartSidebar,
                increaseItemCartSidebar,
                decreaseItemCartSidebar,
                removeItemCartSidebar,
                isCartLoadingCartSidebar,        
                runWithCartLoaderCartSidebar,    
            }}
        >
            {isCartLoadingCartSidebar && <ImprintLoader label="Updating your cart" />}
            {isLoadedCartSidebar ? children : null}
        </CartContext.Provider>
    );
}

export function useCartCartSidebar() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartCartSidebar must be used within a CartProvider');
    }
    return context;
}