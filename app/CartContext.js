"use client"
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItemsCartSidebar, setCartItemsCartSidebar] = useState([]);
    const [isOpenCartSidebar, setIsOpenCartSidebar] = useState(false);

    const openCartSidebar = () => setIsOpenCartSidebar(true);
    const closeCartSidebar = () => setIsOpenCartSidebar(false);
    const addItemCartSidebar = (product) => {
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
    };

    const increaseItemCartSidebar = (id) => {
        setCartItemsCartSidebar((prevItems) =>
            prevItems.map((item) =>
                item.idCartSidebar === id
                    ? { ...item, quantityCartSidebar: item.quantityCartSidebar + 1 }
                    : item
            )
        );
    };

    // Decreasing below 1 removes the item, matching common cart UX.
    const decreaseItemCartSidebar = (id) => {
        setCartItemsCartSidebar((prevItems) =>
            prevItems
                .map((item) =>
                    item.idCartSidebar === id
                        ? { ...item, quantityCartSidebar: item.quantityCartSidebar - 1 }
                        : item
                )
                .filter((item) => item.quantityCartSidebar > 0)
        );
    };

    const removeItemCartSidebar = (id) => {
        setCartItemsCartSidebar((prevItems) =>
            prevItems.filter((item) => item.idCartSidebar !== id)
        );
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
            }}
        >
            {children}
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