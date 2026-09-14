import React from 'react';
import './GallaryGridHome.css';

function GallaryGridHome() {
  const collectionsGallaryGridHome = [
    {
      id: 1,
      title: "Textured Wall Decor",
      img: "https://picsum.photos/400/400?random=301"
    },
    {
      id: 2,
      title: "LED Wall Decor",
      img: "https://picsum.photos/400/400?random=302"
    },
    {
      id: 3,
      title: "Islamic Calligraphy",
      img: "https://picsum.photos/400/400?random=303"
    },
    {
      id: 4,
      title: "Metal Wall Decor",
      img: "https://picsum.photos/400/400?random=304"
    },
    {
      id: 5,
      title: "Metal Wall Clocks",
      img: "https://picsum.photos/400/400?random=305"
    },
    {
      id: 6,
      title: "Neon Wall Decor",
      img: "https://picsum.photos/400/400?random=306"
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