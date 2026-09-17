import React from 'react';
import './GallaryGridHome.css';

function GallaryGridHome() {
  const collectionsGallaryGridHome = [
    {
      id: 1,
      title: "Premium Cases",
      img: "/PremiumCasesCategoryHome.jpeg",
      link: "/shop-all-products" // Yahan link add kiya gaya hai
    },
    {
      id: 2,
      title: "Designer Wallets",
      img: "/WalletsCategoryHome.jpeg",
      link: "/shop-all-products"
    },
    {
      id: 3,
      title: "Designer Bottles",
      img: "/DesignerBottlesCategoryHome.jpeg",
      link: "/shop-all-products"
    },
    {
      id: 4,
      title: "Coffee Mugs",
      img: "/CoffeeMugsCategoryHome.jpeg",
      link: "/shop-all-products"
    },
    {
      id: 5,
      title: "Printed Wall Art",
      img: "/PrintedWallArtsCategoryHome.jpeg",
      link: "/shop-all-products"
    },
    {
      id: 6,
      title: "Designer Wall Clocks",
      img: "/DesignerWallClocksCategoryHome.jpeg",
      link: "/shop-all-products"
    }
  ];

  return (
    <div className="containerGallaryGridHome">
      <div className="headerGallaryGridHome">
        <div className="headerLeftGallaryGridHome">
          <span className="subtitleGallaryGridHome">EXPLORE THE COLLECTION</span>
          <h2 className="titleGallaryGridHome">Pieces for Every Story</h2>
        </div>
        <div className="headerRightGallaryGridHome">
          <a href="/shop-all-products" className="viewAllLinkGallaryGridHome">
            VIEW ALL COLLECTIONS <span className="arrowLinkGallaryGridHome">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="gridGallaryGridHome">
        {collectionsGallaryGridHome.map((item) => (
          /* div ko a tag se replace kiya aur href mein item.link daal diya */
          <a 
            href={item.link} 
            key={item.id} 
            className="cardGallaryGridHome" 
            style={{ textDecoration: 'none' }}
          >
            <img src={item.img} alt={item.title} className="cardImageGallaryGridHome" />
            <div className="cardOverlayGallaryGridHome">
              <h3 className="cardTitleGallaryGridHome">{item.title}</h3>
              <span className="cardArrowGallaryGridHome">&rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default GallaryGridHome;