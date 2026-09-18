"use client"

import React, { useState, useRef } from 'react';
import './Footer.css';
import { usePageTransition } from '@/app/TransitionContext';

function Footer() {
    const [openSection, setOpenSection] = useState(null);
    const footerRef = useRef(null);
    const bgRef = useRef(null);
    const { navigate } = usePageTransition();

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleMouseMove = (e) => {
        if (!footerRef.current || !bgRef.current) return;
        const rect = footerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;  
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const moveX = x * 25; 
        const moveY = y * 25;
        bgRef.current.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
        if (bgRef.current) {
            bgRef.current.style.transform = `scale(1.15) translate(0px, 0px)`;
        }
    };

    const handleNavClick = (e, href, label) => {
        if (href.startsWith('#')) {
            return;
        }
        e.preventDefault();
        navigate(href, label);
    };

    return (
        <footer
            className="wrapper-ImprintFooterMain"
            ref={footerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="bg-image-ImprintFooterMain" ref={bgRef}></div>
            <div className="bg-overlay-ImprintFooterMain"></div>
            <div className="container-ImprintFooterMain">

                <div className="col1-ImprintFooterMain">
                    <div className="BevoraMainFooter-logo">
                        <strong>Imprint</strong> <span>Gallary</span>
                    </div>
                    <p className="desc-ImprintFooterMain">
                        Join 10K+ design pros and access unique, high-quality pieces by original creators, 100% risk-free. Discover the Imprint difference.
                    </p>
                </div>

                <div className="col2-ImprintFooterMain col-accordion">
                    <h3 
                        className={`title-ImprintFooterMain accordion-header ${openSection === 'company' ? 'active' : ''}`}
                        onClick={() => toggleSection('company')}
                    >
                        Quick Links
                        <span className="accordion-icon"></span>
                    </h3>
                    <div className={`accordion-content ${openSection === 'company' ? 'open' : ''}`}>
                        <ul className="list-ImprintFooterMain">
                            <li><a href="/about-us" onClick={(e) => handleNavClick(e, '/about-us', 'About Us')} className="link-ImprintFooterMain">About Us</a></li> 
                            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact', 'Contact Us')} className="link-ImprintFooterMain">Contact Us</a></li> 
                            <li><a href="#sale" onClick={(e) => handleNavClick(e, '#sale', 'Sale')} className="link-ImprintFooterMain">Sale</a></li>
                            <li><a href="#blog" onClick={(e) => handleNavClick(e, '#blog', 'Blog')} className="link-ImprintFooterMain">Blog</a></li> 
                        </ul>
                    </div>
                </div>

                <div className="col3-ImprintFooterMain col-accordion">
                    <h3 
                        className={`title-ImprintFooterMain accordion-header ${openSection === 'creators' ? 'active' : ''}`}
                        onClick={() => toggleSection('creators')}
                    >
                        Category
                        <span className="accordion-icon"></span>
                    </h3>
                    <div className={`accordion-content ${openSection === 'creators' ? 'open' : ''}`}>
                        <ul className="list-ImprintFooterMain">
                            <li><a href="#application" onClick={(e) => handleNavClick(e, '#application', 'Premium Cases')} className="link-ImprintFooterMain">Premium Cases</a></li>
                            <li><a href="/shop-all-products" onClick={(e) => handleNavClick(e, '/shop-all-products', 'Designer Wallets')} className="link-ImprintFooterMain">Designer Wallets</a></li>
                            <li><a href="/shop-all-products" onClick={(e) => handleNavClick(e, '/shop-all-products', 'Designer Bottles')} className="link-ImprintFooterMain">Designer Bottles</a></li>
                            <li><a href="/shop-all-products" onClick={(e) => handleNavClick(e, '/shop-all-products', 'Coffee Mugs')} className="link-ImprintFooterMain">Coffee Mugs</a></li>
                            <li><a href="/shop-all-products" onClick={(e) => handleNavClick(e, '/shop-all-products', 'Printed Wall Art')} className="link-ImprintFooterMain">Printed Wall Art</a></li>
                            <li><a href="/shop-all-products" onClick={(e) => handleNavClick(e, '/shop-all-products', 'Designer Wall Clocks')} className="link-ImprintFooterMain">Designer Wall Clocks</a></li>
                        </ul>
                    </div>
                </div>

                <div className="bottom-bar-ImprintFooterMain">
                    <div className="bottom-links-ImprintFooterMain">
                        <a href="#products-sitemap" onClick={(e) => handleNavClick(e, '#products-sitemap', 'Returns & Refunds')} className="bottom-link-ImprintFooterMain">Returns & Refunds</a>
                        <a href="#creators-sitemap" onClick={(e) => handleNavClick(e, '#creators-sitemap', 'Shipping Policy')} className="bottom-link-ImprintFooterMain">Shipping Policy</a>
                        <a href="#privacy-policy" onClick={(e) => handleNavClick(e, '#privacy-policy', 'FAQ')} className="bottom-link-ImprintFooterMain">FAQ</a> 
                    </div>

                    <div className="bottom-info-ImprintFooterMain">
                        <div className="bottom-left-ImprintFooterMain">
                            <span className="currency-ImprintFooterMain"> Rs (PKR)</span>
                            <span className="copyright-ImprintFooterMain">© 2026 Imprint, Inc. (Designed and Managed By Zellesolutions Pvt.Ltd)</span>
                        </div>

                        <div className="social-icons-ImprintFooterMain">
                            <svg className="social-icon-ImprintFooterMain" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="18" cy="6" r="1"/>
                            </svg>
                            <svg className="social-icon-ImprintFooterMain" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                            <svg className="social-icon-ImprintFooterMain" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/>
                            </svg>
                            <svg className="social-icon-ImprintFooterMain" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;