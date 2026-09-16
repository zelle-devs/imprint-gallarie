import React from 'react';
import './ProductCollectionSection.css';

function ProductCollectionSection() {
  const productsProductCollectionSection = [
    {
      id: 1,
      title: "Forest Green",
      subtitle: "Phone Case",
      price: "PKR 6,500",
      img: "/PhoneCaseProduct2.jpg"
    },
    {
      id: 2,
      title: "Classic Sand",
      subtitle: "Phone Case",
      price: "PKR 6,500",
      img: "/PhoneCaseProduct4.jpg"
    },
    {
      id: 3,
      title: "Contour",
      subtitle: "Phone Case",
      price: "PKR 6,500",
      img: "/PhoneCaseProduct3.jpg"
    },
    {
      id: 4,
      title: "Vintage Brown",
      subtitle: "Phone Case",
      price: "PKR 6,500",
      img: "/PhoneCaseProduct6.jpg"
    }
  ];

  return (
    <div className="sectionProductCollectionSection">
      <div className="containerProductCollectionSection">
        
        <div className="headerProductCollectionSection">
          <h2 className="titleProductCollectionSection">You May Also Like</h2>
          <a href="#" className="viewAllLinkProductCollectionSection">
            View All <span className="arrowProductCollectionSection">&rarr;</span>
          </a>
        </div>

        <div className="gridProductCollectionSection">
          {productsProductCollectionSection.map((product) => (
            <div key={product.id} className="cardProductCollectionSection">
              <div className="imageWrapperProductCollectionSection">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="productImgProductCollectionSection" 
                />
              </div>
              <div className="infoProductCollectionSection">
                <h3 className="cardTitleProductCollectionSection">{product.title}</h3>
                <p className="cardSubtitleProductCollectionSection">{product.subtitle}</p>
                <p className="cardPriceProductCollectionSection">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProductCollectionSection;