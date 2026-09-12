"use client"

import React, { useRef, useState, useEffect } from 'react';
import './ReadyToShopCarousal.css';

function ReadyToShopCarousal() {
  const carouselRefReadyToShopCarousal = useRef(null);
  const [isAtStartReadyToShopCarousal, setIsAtStartReadyToShopCarousal] = useState(true);
  const [isAtEndReadyToShopCarousal, setIsAtEndReadyToShopCarousal] = useState(false);

  const handleScrollReadyToShopCarousal = () => {
    if (carouselRefReadyToShopCarousal.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRefReadyToShopCarousal.current;
      setIsAtStartReadyToShopCarousal(scrollLeft <= 5);
      setIsAtEndReadyToShopCarousal(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  useEffect(() => {
    handleScrollReadyToShopCarousal();
    window.addEventListener('resize', handleScrollReadyToShopCarousal);
    return () => window.removeEventListener('resize', handleScrollReadyToShopCarousal);
  }, []);

  const scrollRightReadyToShopCarousal = () => {
    if (carouselRefReadyToShopCarousal.current) {
      const card = carouselRefReadyToShopCarousal.current.querySelector('.cardReadyToShopCarousal');
      if (card) {
        const scrollAmount = card.offsetWidth + 20; 
        carouselRefReadyToShopCarousal.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const scrollLeftReadyToShopCarousal = () => {
    if (carouselRefReadyToShopCarousal.current) {
      const card = carouselRefReadyToShopCarousal.current.querySelector('.cardReadyToShopCarousal');
      if (card) {
        const scrollAmount = card.offsetWidth + 20; 
        carouselRefReadyToShopCarousal.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

 const dataReadyToShopCarousal = [
    {
      id: 1,
      name: "Modern Accent Chair",
      imgUrl: "/Modern_Accent_Chair.jpg",
      regularPrice: "Rs 333,600",
      currentPrice: "Rs 249,922",
      discountText: "- Sale 25% Off",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 2,
      name: "Rustic Dining Table",
      imgUrl: "/Rustic_Dining_Table.jpg",
      regularPrice: null,
      currentPrice: "Rs 403,100",
      discountText: "",
       showFlash: false,
      freeShipping: false
    },
    {
      id: 3,
      name: "Minimalist Bookshelf",
      imgUrl: "/Minimilist_bookshelf.jpg",
      regularPrice: "Rs 166,800",
      currentPrice: "Rs 125,100",
      discountText: "- Sale 25% Off",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 4,
      name: "Velvet Pouf Ottoman",
      imgUrl: "/Velvet_Pouf_Ottoman.jpg",
      regularPrice: null,
      currentPrice: "Rs 33,360",
      discountText: "",
       showFlash: false,
      freeShipping: false
    },
     {
      id: 5,
      name: "Trinity Coffee Table",
      imgUrl: "/Trrinity.jpg",
      regularPrice: "Rs 1,441,430",
      currentPrice: "Rs 1,056,400",
      discountText: "- Sale 27% Off",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 6,
      name: "Parota Exterior U-shaped Sectio...",
      imgUrl: "/Parota_Exterior.jpg",
      regularPrice: null,
      currentPrice: "Rs 2,474,200",
      discountText: "",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 7,
      name: "Flitch Mod Lounge Chair",
      imgUrl: "/Flitch_Mod_Lounge_Chair.jpg",
      regularPrice: null,
      currentPrice: "Rs 625,500",
      discountText: "",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 8,
      name: "Milo Sofa",
      imgUrl: "/Milo_Sofa.jpg",
      regularPrice: null,
      currentPrice: "Rs 2,807,522",
      discountText: "",
      showFlash: false,
      freeShipping: false
    },
  ];

  return (
    <div className="containerReadyToShopCarousal">
      <div className="headerReadyToShopCarousal">
        <div className="titleSectionReadyToShopCarousal">
          <p className="subTitleReadyToShopCarousal">READY TO SHOP </p>
          <h2 className="mainTitleReadyToShopCarousal">In Stock Lighting</h2>
        </div>
        <a href="/shop-all-products" className="moreLinkReadyToShopCarousal">More in Lighting</a>
      </div>

      <div className="carouselWrapperReadyToShopCarousal">
        {!isAtStartReadyToShopCarousal && (
          <button className="arrowButtonReadyToShopCarousal leftArrowButtonReadyToShopCarousal" onClick={scrollLeftReadyToShopCarousal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        <div className="trackReadyToShopCarousal" ref={carouselRefReadyToShopCarousal} onScroll={handleScrollReadyToShopCarousal}>
          {dataReadyToShopCarousal.map((item) => (
            <div key={item.id} className="cardReadyToShopCarousal">
              <div className="imageWrapperReadyToShopCarousal">
                <img src={item.imgUrl} alt={item.name} className="imageReadyToShopCarousal" />
              </div>
              <div className="detailsReadyToShopCarousal">
                <div className="titleRowReadyToShopCarousal">
                  {/* <span className="flagIconReadyToShopCarousal">🇺🇸</span> */}
                  <p className="productNameReadyToShopCarousal">{item.name}</p>
                </div>
                
                {!item.regularPrice && (
                  <p className="regularPriceReadyToShopCarousal">{item.regularPrice}</p>
                )}
                
                <div className="priceRowReadyToShopCarousal">
                  <p className={`currentPriceReadyToShopCarousal ${item.regularPrice ? 'saleColorReadyToShopCarousal' : ''}`}>
                    {item.currentPrice}
                  </p>
                  {item.discountText && (
                    <p className="discountTextReadyToShopCarousal">{item.discountText}</p>
                  )}
                  {item.showFlash && (
                    <span className="flashIconReadyToShopCarousal">⚡</span>
                  )}
                </div>

                {item.freeShipping && (
                  <p className="shippingReadyToShopCarousal">Free Shipping</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {!isAtEndReadyToShopCarousal && (
          <button className="arrowButtonReadyToShopCarousal rightArrowButtonReadyToShopCarousal" onClick={scrollRightReadyToShopCarousal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default ReadyToShopCarousal;