"use client"
import React, { useState } from 'react';
import './ShopByCategoryHomePage.css';

function ShopByCategoryHomePage() {
  const [activeTabShopByCategoryHomePage, setActiveTabShopByCategoryHomePage] = useState('personal');

  const dataShopByCategoryHomePage = [
    {
      id: 'personal',
      tabLabel: 'PERSONAL',
      mainImg: '/PersonalTabSectionImage.png',
      smallImg: '/RightSideSmallImagePersonal.jpg',
      desc: 'Set the tone for sleep, style, and everything in between.',
      btnText: 'SHOP PERSONAL'
    },
    {
      id: 'home',
      tabLabel: 'HOME',
      mainImg: '/HomeTabSectionImage.png',
      smallImg: '/RightSideSmallImageHome.jpg',
      desc: 'Personalize your Home with the perfect splash of personality.',
      btnText: 'SHOP HOME'
    },
    // {
    //   id: 'office',
    //   tabLabel: 'OFFICE',
    //   mainImg: '/Office_Gallary_Home.jpg',
    //   smallImg: '/Office_Gallary_HomeSide.jpg',
    //   desc: 'Design a workspace that actually works for you.',
    //   btnText: 'SHOP OFFICE'
    // },
    // {
    //   id: 'livingroom',
    //   tabLabel: 'LIVING ROOM',
    //   mainImg: '/Livingroom_Gallary_Home.jpg',
    //   smallImg: 'Livingroom_Gallary_HomeSide.jpg',
    //   desc: 'Make your space the main event.',
    //   btnText: 'SHOP LIVING ROOM'
    // }
  ];

  const currentDataShopByCategoryHomePage = dataShopByCategoryHomePage.find(
    (item) => item.id === activeTabShopByCategoryHomePage
  );

  return (
    <div className="containerShopByCategoryHomePage">
      <h2 className="titleShopByCategoryHomePage">Shop By Collection</h2>
      
      <div className="tabsWrapperShopByCategoryHomePage">
        <div className="tabsContainerShopByCategoryHomePage">
          {dataShopByCategoryHomePage.map((tab) => (
            <button
              key={tab.id}
              className={`tabButtonShopByCategoryHomePage ${activeTabShopByCategoryHomePage === tab.id ? 'activeTabShopByCategoryHomePage' : ''}`}
              onClick={() => setActiveTabShopByCategoryHomePage(tab.id)}
            >
              {tab.tabLabel}
            </button>
          ))}
        </div>
      </div>

      <div key={currentDataShopByCategoryHomePage.id} className="contentWrapperShopByCategoryHomePage">
        <div className="mainImageContainerShopByCategoryHomePage">
          <img 
            src={currentDataShopByCategoryHomePage.mainImg} 
            alt={currentDataShopByCategoryHomePage.tabLabel} 
            className="mainImageShopByCategoryHomePage" 
          />
        </div>
        
        <div className="detailsContainerShopByCategoryHomePage">
          <div className="smallImageContainerShopByCategoryHomePage">
            <img 
              src={currentDataShopByCategoryHomePage.smallImg} 
              alt={`${currentDataShopByCategoryHomePage.tabLabel} detail`} 
              className="smallImageShopByCategoryHomePage" 
            />
          </div>
          <div className="textContainerShopByCategoryHomePage">
            <p className="descriptionShopByCategoryHomePage">
              {currentDataShopByCategoryHomePage.desc}
            </p>
            <button className="shopButtonShopByCategoryHomePage">
              {currentDataShopByCategoryHomePage.btnText}
            </button>
          </div>
        </div>
        
      </div>
       <button className="MobileshopButtonShopByCategoryHomePage">
              {currentDataShopByCategoryHomePage.btnText}
            </button>
    </div>
  );
}

export default ShopByCategoryHomePage;