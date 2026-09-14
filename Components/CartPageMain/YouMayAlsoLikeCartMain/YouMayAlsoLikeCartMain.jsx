import React from 'react';
import './YouMayAlsoLikeCartMain.css';

function YouMayAlsoLikeCartMain() {
  const recommendedProductsYouMayAlsoLikeCartMain = [
    {
      id: 1,
      title: "Leather Wallet",
      price: "PKR 7,200",
      img: "https://picsum.photos/400/250?random=1901"
    },
    {
      id: 2,
      title: "Leather Desk Mat",
      price: "PKR 8,900",
      img: "https://picsum.photos/400/250?random=1902"
    },
    {
      id: 3,
      title: "Designer Wall Clock",
      price: "PKR 12,500",
      img: "https://picsum.photos/400/250?random=1903"
    },
    {
      id: 4,
      title: "Gift Box",
      price: "PKR 3,500",
      img: "https://picsum.photos/400/250?random=1904"
    }
  ];

  return (
    <div className="sectionYouMayAlsoLikeCartMain">
      <div className="containerYouMayAlsoLikeCartMain">
        
        <div className="headerYouMayAlsoLikeCartMain">
          <h2 className="titleYouMayAlsoLikeCartMain">You May Also Like</h2>
          <a href="#" className="linkYouMayAlsoLikeCartMain">
            View All <span className="arrowYouMayAlsoLikeCartMain">&rarr;</span>
          </a>
        </div>

        <div className="gridYouMayAlsoLikeCartMain">
          {recommendedProductsYouMayAlsoLikeCartMain.map((product) => (
            <div key={product.id} className="cardYouMayAlsoLikeCartMain">
              
              <div className="imgWrapperYouMayAlsoLikeCartMain">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="imgYouMayAlsoLikeCartMain" 
                />
              </div>
              
              <div className="infoWrapperYouMayAlsoLikeCartMain">
                <div className="textWrapperYouMayAlsoLikeCartMain">
                  <h3 className="cardTitleYouMayAlsoLikeCartMain">{product.title}</h3>
                  <p className="cardPriceYouMayAlsoLikeCartMain">{product.price}</p>
                </div>
                <button className="cartBtnYouMayAlsoLikeCartMain">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default YouMayAlsoLikeCartMain;