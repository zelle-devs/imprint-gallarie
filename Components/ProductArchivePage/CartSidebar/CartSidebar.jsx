"use client"
import React, { useEffect } from 'react';
import './CartSidebar.css';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartCartSidebar } from '@/app/CartContext';

function CartSidebar() {
    const {
        isOpenCartSidebar,
        closeCartSidebar,
        cartItemsCartSidebar,
        increaseItemCartSidebar,
        decreaseItemCartSidebar,
        removeItemCartSidebar,
    } = useCartCartSidebar();

    // Lock body scroll while the sidebar is open, restore on close/unmount
    useEffect(() => {
        if (isOpenCartSidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpenCartSidebar]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDownCartSidebar = (e) => {
            if (e.key === 'Escape' && isOpenCartSidebar) {
                closeCartSidebar();
            }
        };
        document.addEventListener('keydown', handleKeyDownCartSidebar);
        return () => document.removeEventListener('keydown', handleKeyDownCartSidebar);
    }, [isOpenCartSidebar, closeCartSidebar]);

    const subtotalCartSidebar = cartItemsCartSidebar.reduce(
        (sum, item) => sum + item.priceCartSidebar * item.quantityCartSidebar,
        0
    );

    const formatPriceCartSidebar = (value) =>
        `Rs. ${value.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <>
            <div
                className={`cartOverlayCartSidebar${isOpenCartSidebar ? ' cartOverlayVisibleCartSidebar' : ''}`}
                onClick={closeCartSidebar}
                aria-hidden="true"
            />

            <aside
                className={`cartPanelCartSidebar${isOpenCartSidebar ? ' cartPanelOpenCartSidebar' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
            >
                <div className="cartHeaderCartSidebar">
                    <div className="cartHeaderTitleGroupCartSidebar">
                        <ShoppingBag size={20} />
                        <h2 className="cartHeaderTitleCartSidebar">Your Cart</h2>
                    </div>
                    <button
                        type="button"
                        className="cartCloseBtnCartSidebar"
                        onClick={closeCartSidebar}
                        aria-label="Close cart"
                    >
                        <X size={22} />
                    </button>
                </div>

                <div className="cartBodyCartSidebar">
                    {cartItemsCartSidebar.length === 0 ? (
                        <div className="cartEmptyStateCartSidebar">
                            <ShoppingBag size={36} strokeWidth={1.3} />
                            <p>Your cart is empty right now.</p>
                        </div>
                    ) : (
                        <ul className="cartItemListCartSidebar">
                            {cartItemsCartSidebar.map((item) => (
                                <li className="cartItemRowCartSidebar" key={item.idCartSidebar}>
                                    <div className="cartItemImageWrapperCartSidebar">
                                        <img
                                            src={item.imageCartSidebar}
                                            alt={item.titleCartSidebar}
                                            className="cartItemImageCartSidebar"
                                        />
                                    </div>

                                    <div className="cartItemDetailsCartSidebar">
                                        <div className="cartItemTitleRowCartSidebar">
                                            <p className="cartItemTitleCartSidebar">{item.titleCartSidebar}</p>
                                            <button
                                                type="button"
                                                className="cartRemoveBtnCartSidebar"
                                                onClick={() => removeItemCartSidebar(item.idCartSidebar)}
                                                aria-label="Remove item"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>

                                        {item.optionsCartSidebar && (
                                            <p className="cartItemOptionsCartSidebar">
                                                {item.optionsCartSidebar}
                                            </p>
                                        )}

                                        <p className="cartItemPriceCartSidebar">
                                            {formatPriceCartSidebar(item.priceCartSidebar)}
                                        </p>

                                        <div className="cartItemQuantityBoxCartSidebar">
                                            <button
                                                type="button"
                                                className="cartQuantityBtnCartSidebar"
                                                onClick={() => decreaseItemCartSidebar(item.idCartSidebar)}
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="cartQuantityValueCartSidebar">
                                                {item.quantityCartSidebar}
                                            </span>
                                            <button
                                                type="button"
                                                className="cartQuantityBtnCartSidebar"
                                                onClick={() => increaseItemCartSidebar(item.idCartSidebar)}
                                                aria-label="Increase quantity"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <p className="cartItemLineTotalCartSidebar">
                                        {formatPriceCartSidebar(item.priceCartSidebar * item.quantityCartSidebar)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {cartItemsCartSidebar.length > 0 && (
                    <div className="cartFooterCartSidebar">
                        <div className="cartSubtotalRowCartSidebar">
                            <span>Subtotal</span>
                            <span className="cartSubtotalValueCartSidebar">
                                {formatPriceCartSidebar(subtotalCartSidebar)}
                            </span>
                        </div>
                        <p className="cartShippingNoteCartSidebar">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <button type="button" className="cartCheckoutBtnCartSidebar"  onClick={() => {
                                closeCartSidebar();
                                window.location.href = '/cart';
                            }}>
                            View Cart
                        </button>

                        

                        <button
                            type="button"
                            className="cartContinueBtnCartSidebar"
                            onClick={closeCartSidebar}
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </aside>
        </>
    );
}

export default CartSidebar;