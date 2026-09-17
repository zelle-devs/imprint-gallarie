"use client"

import React, { useState, useEffect } from 'react';
import './Header.css';
import { useRouter, usePathname } from 'next/navigation';
import { useCartCartSidebar } from '@/app/CartContext';
import { usePageTransition } from '@/app/TransitionContext';

function Header() {
    const router = useRouter();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { navigate } = usePageTransition();
    const pathname = usePathname();
    const isHome = pathname === '/';
    const { openCartSidebar } = useCartCartSidebar();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isDrawerOpen]);

    const closeDrawer = () => setIsDrawerOpen(false);

    const handleNavClick = (e, href, label) => {
        e.preventDefault();
        closeDrawer();
        navigate(href, label);
    };

    const navLinks = [
        { href: '/shop-all-products', label: 'Premium Cases' },
        { href: '/shop-all-products', label: 'Designer Wallets' },
        { href: '/shop-all-products', label: 'Designer Bottles' },
        { href: '/shop-all-products', label: 'Coffee Mugs' },
        { href: '/shop-all-products', label: 'Printed Wall Art' },
        { href: '/shop-all-products', label: 'Designer Wall Clocks' },
    ];

    return (
        <>
            <div className='BevoraMainHeader-containerTop'>
                <div className='BevoraMainHeader-containerTopBarMain'>
                    <div className='BevoraMainHeader-containerTop_Right'>
                        <p className='BevoraMainHeader-containerTop_Right_FirstPara'>Further Markdowns! Save upto 50% off on these sale favorite <span>Shop All These </span> </p>
                    </div>
                    <div className='BevoraMainHeader-containerTop_Left'>
                        <ul>
                            <li>Become a Imprint Members</li>
                            <hr />
                            <li>Need Help</li>
                            <hr />
                            <li>Ship To Pakistan</li>
                        </ul>
                    </div>
                </div>

            </div>
            <header className={`BevoraMainHeader-wrapper ${isScrolled ? 'is-scrolled' : ''} ${isHome ? 'is-home' : ''}`}>
                <div className="BevoraMainHeader-container">

                    <div className="BevoraMainHeader-top">

                        <button
                            className={`BevoraMainHeader-hamburger ${isDrawerOpen ? 'is-active' : ''}`}
                            onClick={() => setIsDrawerOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={isDrawerOpen}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className="BevoraMainHeader-logo" onClick={() => router.push('/')}>
                            <div >
                                <strong>IMPRINT</strong> <br/><span>GALLARIA</span>

                            </div>
                            <nav className="BevoraMainHeader-nav">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="BevoraMainHeader-nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate(link.href, link.label);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>

                            <div className="BevoraMainHeader-actions">

                                <div className="BevoraMainHeader-search-container">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="BevoraMainHeader-search-input"
                                    />
                                    <svg className="BevoraMainHeader-icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>

                                <div className="BevoraMainHeader-icons">

                                    <svg className="BevoraMainHeader-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <svg className="BevoraMainHeader-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                    <button
                                        type="button"
                                        className="BevoraMainHeader-cart-button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openCartSidebar();
                                        }}
                                        aria-label="Open cart"
                                    >
                                        <svg
                                            className="BevoraMainHeader-icon"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="9" cy="21" r="1"></circle>
                                            <circle cx="20" cy="21" r="1"></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                <div
                    className={`BevoraMainHeader-overlay ${isDrawerOpen ? 'is-visible' : ''}`}
                    onClick={closeDrawer}
                    aria-hidden="true"
                ></div>

                <aside className={`BevoraMainHeader-drawer ${isDrawerOpen ? 'is-open' : ''}`}>
                    <div className="BevoraMainHeader-drawer-top">
                        <div className="BevoraMainHeader-drawer-logo" onClick={() => { router.push('/'); setIsDrawerOpen(false); }}>
                            <strong>Imprint</strong> <span>Gallary</span>
                        </div>
                        <button
                            className="BevoraMainHeader-drawer-close"
                            onClick={closeDrawer}
                            aria-label="Close menu"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="BevoraMainHeader-drawer-search">
                        <input
                            type="text"
                            placeholder="Search"
                            className="BevoraMainHeader-drawer-search-input"
                        />
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>

                    <nav className="BevoraMainHeader-drawer-nav">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.href + index}
                                href={link.href}
                                className="BevoraMainHeader-drawer-nav-link"
                                onClick={(e) => handleNavClick(e, link.href, link.label)}
                                style={{ transitionDelay: isDrawerOpen ? `${40 + index * 30}ms` : '0ms' }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="BevoraMainHeader-drawer-footer">
                        <ul>
                            <li>Become a Imprint Member</li>
                            <li>Need Help</li>
                            <li>Ship To Pakistan</li>
                        </ul>
                    </div>
                </aside>
            </header>
        </>
    );
}

export default Header;