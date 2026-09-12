"use client"

import React, { useRef, useState, useEffect } from 'react';
import './MakeYourOwnCarousal.css';

function MakeYourOwnCarousal() {
  const carouselRefMakeYourOwnCarousal = useRef(null);
  const [isAtStartMakeYourOwnCarousal, setIsAtStartMakeYourOwnCarousal] = useState(true);
  const [isAtEndMakeYourOwnCarousal, setIsAtEndMakeYourOwnCarousal] = useState(false);

  const handleScrollMakeYourOwnCarousal = () => {
    if (carouselRefMakeYourOwnCarousal.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRefMakeYourOwnCarousal.current;
      setIsAtStartMakeYourOwnCarousal(scrollLeft <= 5);
      setIsAtEndMakeYourOwnCarousal(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  useEffect(() => {
    handleScrollMakeYourOwnCarousal();
    window.addEventListener('resize', handleScrollMakeYourOwnCarousal);
    return () => window.removeEventListener('resize', handleScrollMakeYourOwnCarousal);
  }, []);

  const scrollRightMakeYourOwnCarousal = () => {
    if (carouselRefMakeYourOwnCarousal.current) {
      const card = carouselRefMakeYourOwnCarousal.current.querySelector('.cardMakeYourOwnCarousal');
      if (card) {
        const scrollAmount = card.offsetWidth + 20; 
        carouselRefMakeYourOwnCarousal.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const scrollLeftMakeYourOwnCarousal = () => {
    if (carouselRefMakeYourOwnCarousal.current) {
      const card = carouselRefMakeYourOwnCarousal.current.querySelector('.cardMakeYourOwnCarousal');
      if (card) {
        const scrollAmount = card.offsetWidth + 20; 
        carouselRefMakeYourOwnCarousal.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

const dataMakeYourOwnCarousal = [
    {
      id: 1,
      name: "Trinity Coffee Table",
      imgUrl: "/Trrinity.jpg",
      regularPrice: "Rs 1,441,430",
      currentPrice: "Rs 1,056,400",
      discountText: "- Sale 27% Off",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 2,
      name: "Parota Exterior U-shaped Sectio...",
      imgUrl: "/Parota_Exterior.jpg",
      regularPrice: null,
      currentPrice: "Rs 2,474,200",
      discountText: "",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 3,
      name: "Flitch Mod Lounge Chair",
      imgUrl: "/Flitch_Mod_Lounge_Chair.jpg",
      regularPrice: null,
      currentPrice: "Rs 625,500",
      discountText: "",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 4,
      name: "Milo Sofa",
      imgUrl: "/Milo_Sofa.jpg",
      regularPrice: null,
      currentPrice: "Rs 2,807,522",
      discountText: "",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 5,
      name: "Modern Accent Chair",
      imgUrl: "/Modern_Accent_Chair.jpg",
      regularPrice: "Rs 333,600",
      currentPrice: "Rs 249,922",
      discountText: "- Sale 25% Off",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 6,
      name: "Rustic Dining Table",
      imgUrl: "/Rustic_Dining_Table.jpg",
      regularPrice: null,
      currentPrice: "Rs 403,100",
      discountText: "",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 7,
      name: "Minimalist Bookshelf",
      imgUrl: "/Minimilist_bookshelf.jpg",
      regularPrice: "Rs 166,800",
      currentPrice: "Rs 125,100",
      discountText: "- Sale 25% Off",
      showFlash: false,
      freeShipping: false
    },
    {
      id: 8,
      name: "Velvet Pouf Ottoman",
      imgUrl: "/Velvet_Pouf_Ottoman.jpg",
      regularPrice: null,
      currentPrice: "Rs 33,360",
      discountText: "",
      showFlash: false,
      freeShipping: false
    },
  ];

  return (
    <div className="containerMakeYourOwnCarousal">
      <div className="headerMakeYourOwnCarousal">
        <div className="titleSectionMakeYourOwnCarousal">
          <p className="subTitleMakeYourOwnCarousal">MAKE IT YOUR OWN</p>
          <h2 className="mainTitleMakeYourOwnCarousal">Customizable Furniture</h2>
        </div>
        <a href="/shop-all-products" className="moreLinkMakeYourOwnCarousal">More in Furniture</a>
      </div>

      <div className="carouselWrapperMakeYourOwnCarousal">
        {!isAtStartMakeYourOwnCarousal && (
          <button className="arrowButtonMakeYourOwnCarousal leftArrowButtonMakeYourOwnCarousal" onClick={scrollLeftMakeYourOwnCarousal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        <div className="trackMakeYourOwnCarousal" ref={carouselRefMakeYourOwnCarousal} onScroll={handleScrollMakeYourOwnCarousal}>
          {dataMakeYourOwnCarousal.map((item) => (
            <div key={item.id} className="cardMakeYourOwnCarousal">
              <div className="imageWrapperMakeYourOwnCarousal">
                <img src={item.imgUrl} alt={item.name} className="imageMakeYourOwnCarousal" />
              </div>
              <div className="detailsMakeYourOwnCarousal">
                <div className="titleRowMakeYourOwnCarousal">
                  {/* <span className="flagIconMakeYourOwnCarousal">🇺🇸</span> */}
                  <p className="productNameMakeYourOwnCarousal">{item.name}</p>
                </div>
                
                {!item.regularPrice && (
                  <p className="regularPriceMakeYourOwnCarousal">{item.regularPrice}</p>
                )}
                
                <div className="priceRowMakeYourOwnCarousal">
                  <p className={`currentPriceMakeYourOwnCarousal ${item.regularPrice ? 'saleColorMakeYourOwnCarousal' : ''}`}>
                    {item.currentPrice}
                  </p>
                  {item.discountText && (
                    <p className="discountTextMakeYourOwnCarousal">{item.discountText}</p>
                  )}
                  {item.showFlash && (
                    <span className="flashIconMakeYourOwnCarousal">⚡</span>
                  )}
                </div>

                {item.freeShipping && (
                  <p className="shippingMakeYourOwnCarousal">Free Shipping</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {!isAtEndMakeYourOwnCarousal && (
          <button className="arrowButtonMakeYourOwnCarousal rightArrowButtonMakeYourOwnCarousal" onClick={scrollRightMakeYourOwnCarousal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default MakeYourOwnCarousal;