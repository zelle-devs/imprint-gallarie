import React from 'react';
import './GallaryGridHome.css';

function GallaryGridHome() {
  const dataGallaryGridHome = [
    {
      id: 1,
      title: "Kitchen & Dining",
      imgUrl: "/KichenAndDiningHome.jpg"
    },
    {
      id: 2,
      title: "Artist Products",
      imgUrl: "/artistproducthome.jpg"
    },
    {
      id: 3,
      title: "Accessories",
      imgUrl: "/accecorieshome.jpg"
    },
    {
      id: 4,
      title: "Tech",
      imgUrl: "/TechDecorHome.jpg"
    }
  ];

  return (
    <div className="containerGallaryGridHome">
      <div className="gridGallaryGridHome">
        {dataGallaryGridHome.map((item) => (
          <div key={item.id} className="cardGallaryGridHome">
            <div className="imageWrapperGallaryGridHome">
              <img src={item.imgUrl} alt={item.title} className="imageGallaryGridHome" />
            </div>
            <p className="textGallaryGridHome">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallaryGridHome;