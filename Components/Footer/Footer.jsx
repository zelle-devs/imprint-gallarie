"use client"

import React, { useState , useRef} from 'react';
import './Footer.css';

function Footer() {
    // State to track open accordion sections on mobile
    const [openSection, setOpenSection] = useState(null);
      const footerRef = useRef(null);
    const bgRef = useRef(null);
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };
    const handleMouseMove = (e) => {
        if (!footerRef.current || !bgRef.current) return;
        const rect = footerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 se 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const moveX = x * 25; // max ~25px shift
        const moveY = y * 25;
        bgRef.current.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px)`;
    };

      const handleMouseLeave = () => {
        if (bgRef.current) {
            bgRef.current.style.transform = `scale(1.15) translate(0px, 0px)`;
        }
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

                {/* Column 1 */}
                <div className="col1-ImprintFooterMain">
                    <div className="BevoraMainFooter-logo">
                        <strong>Imprint</strong> <span>Gallary</span>
                    </div>
                    <p className="desc-ImprintFooterMain">
                        Join 10K+ design pros and access unique, high-quality pieces by original creators, 100% risk-free. Discover the Imprint difference.
                    </p>
                </div>

                {/* Column 2 - OUR COMPANY (Accordion on Mobile) */}
                <div className="col2-ImprintFooterMain col-accordion">
                    <h3 
                        className={`title-ImprintFooterMain accordion-header ${openSection === 'company' ? 'active' : ''}`}
                        onClick={() => toggleSection('company')}
                    >
                        OUR COMPANY
                        <span className="accordion-icon"></span>
                    </h3>
                    <div className={`accordion-content ${openSection === 'company' ? 'open' : ''}`}>
                        <ul className="list-ImprintFooterMain">
                            <li><a href="#about" className="link-ImprintFooterMain">About Us</a></li>
                            <li><a href="#promise" className="link-ImprintFooterMain">The Imprint Promise</a></li>
                            <li><a href="#returns" className="link-ImprintFooterMain">Returns & Refunds</a></li>
                            <li><a href="#shipping" className="link-ImprintFooterMain">Shipping Policy</a></li>
                            <li><a href="#contact" className="link-ImprintFooterMain">Contact Us</a></li>
                            <li><a href="#faq" className="link-ImprintFooterMain">FAQ</a></li>
                            <li><a href="#sale" className="link-ImprintFooterMain">Sale</a></li>
                            <li><a href="#blog" className="link-ImprintFooterMain">Blog</a></li>
                            <li><a href="#uk" className="link-ImprintFooterMain">Imprint UK</a></li>
                            <li><a href="#ie" className="link-ImprintFooterMain">Imprint IE</a></li>
                        </ul>
                    </div>
                </div>

                {/* Column 3 - CREATORS (Accordion on Mobile) */}
                <div className="col3-ImprintFooterMain col-accordion">
                    <h3 
                        className={`title-ImprintFooterMain accordion-header ${openSection === 'creators' ? 'active' : ''}`}
                        onClick={() => toggleSection('creators')}
                    >
                        CREATORS
                        <span className="accordion-icon"></span>
                    </h3>
                    <div className={`accordion-content ${openSection === 'creators' ? 'open' : ''}`}>
                        <ul className="list-ImprintFooterMain">
                            <li><a href="#application" className="link-ImprintFooterMain">Creator Application</a></li>
                            <li><a href="#support" className="link-ImprintFooterMain">Creator Support</a></li>
                        </ul>
                    </div>

                    <h3 className="title-ImprintFooterMain spacing-ImprintFooterMain">WE ACCEPT</h3>
                    <div className="payments-ImprintFooterMain">
                        <div className="payment-icon-ImprintFooterMain visa-ImprintFooterMain"></div>
                        <div className="payment-icon-ImprintFooterMain mastercard-ImprintFooterMain"></div>
                        <div className="payment-icon-ImprintFooterMain amex-ImprintFooterMain"></div>
                        <div className="payment-icon-ImprintFooterMain unionpay-ImprintFooterMain"></div>
                        <div className="payment-icon-ImprintFooterMain jcb-ImprintFooterMain"></div>
                        <div className="payment-icon-ImprintFooterMain discover-ImprintFooterMain"></div>
                        <div className="payment-icon-ImprintFooterMain diners-ImprintFooterMain"></div>
                    </div>
                </div>

                {/* Column 4 - TRADE (Accordion on Mobile) */}
                <div className="col4-ImprintFooterMain col-accordion">
                    <h3 
                        className={`title-ImprintFooterMain accordion-header ${openSection === 'trade' ? 'active' : ''}`}
                        onClick={() => toggleSection('trade')}
                    >
                        TRADE
                        <span className="accordion-icon"></span>
                    </h3>
                    <div className={`accordion-content ${openSection === 'trade' ? 'open' : ''}`}>
                        <ul className="list-ImprintFooterMain">
                            <li><a href="#trade" className="link-ImprintFooterMain">Join the Trade Program</a></li>
                        </ul>
                    </div>

                    <h3 className="title-ImprintFooterMain spacing-ImprintFooterMain">GIFT CARDS</h3>
                    <h3 className="title-ImprintFooterMain">ACCESSIBILITY ASSISTANCE</h3>
                </div>

                {/* Bottom Bar */}
                <div className="bottom-bar-ImprintFooterMain">
                    <div className="bottom-links-ImprintFooterMain">
                        <a href="#products-sitemap" className="bottom-link-ImprintFooterMain">Products Sitemap</a>
                        <a href="#creators-sitemap" className="bottom-link-ImprintFooterMain">Creators Sitemap</a>
                        <a href="#privacy-policy" className="bottom-link-ImprintFooterMain">Privacy Policy</a>
                        <a href="#general-terms" className="bottom-link-ImprintFooterMain">General Terms</a>
                        <a href="#regions" className="bottom-link-ImprintFooterMain">Regions</a>
                    </div>

                    <div className="bottom-info-ImprintFooterMain">
                        <div className="bottom-left-ImprintFooterMain">
                            <span className="currency-ImprintFooterMain">🇺🇸 | $ (USD)</span>
                            <span className="copyright-ImprintFooterMain">© 2026 Imprint, Inc. (owned by Book An Artist Pty Ltd)</span>
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
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <svg className="social-icon-ImprintFooterMain" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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