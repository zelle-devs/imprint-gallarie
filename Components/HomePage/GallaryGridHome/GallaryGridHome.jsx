import React from 'react';
import './GallaryGridHome.css';

function GallaryGridHome() {
  const collectionsGallaryGridHome = [
    {
      id: 1,
      title: "Premium Cases",
      img: "/PremiumCasesCategoryHome.jpeg"
    },
    {
      id: 2,
      title: "Designer Wallets",
      img: "/WalletsCategoryHome.jpeg"
    },
    {
      id: 3,
      title: "Designer Bottles",
      img: "/DesignerBottlesCategoryHome.jpeg"
    },
    {
      id: 4,
      title: "Coffee Mugs",
      img: "/CoffeeMugsCategoryHome.jpeg"
    },
    {
      id: 5,
      title: "Printed Wall Art",
      img: "/PrintedWallArtsCategoryHome.jpeg"
    },
    {
      id: 6,
      title: "Designer Wall Clocks",
      img: "/DesignerWallClocksCategoryHome.jpeg"
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
          <a href="#" className="viewAllLinkGallaryGridHome">
            VIEW ALL COLLECTIONS <span className="arrowLinkGallaryGridHome">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="gridGallaryGridHome">
        {collectionsGallaryGridHome.map((item) => (
          <div key={item.id} className="cardGallaryGridHome">
            <img src={item.img} alt={item.title} className="cardImageGallaryGridHome" />
            <div className="cardOverlayGallaryGridHome">
              <h3 className="cardTitleGallaryGridHome">{item.title}</h3>
              <span className="cardArrowGallaryGridHome">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallaryGridHome;