"use client"
import React, { useState } from 'react';
import './TopProductBuySection.css';

function TopProductBuySection() {
  const [activeImageTopProductBuySection, setActiveImageTopProductBuySection] = useState(0);
  const [selectedDeviceTopProductBuySection, setSelectedDeviceTopProductBuySection] = useState('iPhone 15 Pro');
  const [selectedFinishTopProductBuySection, setSelectedFinishTopProductBuySection] = useState('Black');
  const [personalizationTextTopProductBuySection, setPersonalizationTextTopProductBuySection] = useState('AR');

  const imagesTopProductBuySection = [
    "https://picsum.photos/600/800?random=1501",
    "https://picsum.photos/600/800?random=1502",
    "https://picsum.photos/600/800?random=1503",
    "https://picsum.photos/600/800?random=1504",
    "https://picsum.photos/600/800?random=1505"
  ];

  const finishesTopProductBuySection = [
    { name: 'Black', color: '#1C1C1C' },
    { name: 'Beige', color: '#E7DCC5' },
    { name: 'Gray', color: '#9CA3AF' }
  ];

  const handleTextChangeTopProductBuySection = (e) => {
    if (e.target.value.length <= 5) {
      setPersonalizationTextTopProductBuySection(e.target.value);
    }
  };

  return (
    <div className="sectionTopProductBuySection">
      <div className="containerTopProductBuySection">
        
        <div className="leftColTopProductBuySection">
          <div className="thumbnailsTopProductBuySection">
            {imagesTopProductBuySection.map((img, index) => (
              <div 
                key={index} 
                className={`thumbWrapperTopProductBuySection ${activeImageTopProductBuySection === index ? 'activeThumbTopProductBuySection' : ''}`}
                onClick={() => setActiveImageTopProductBuySection(index)}
              >
                <img src={img} alt={`Thumbnail ${index}`} className="thumbImgTopProductBuySection" />
                {index === imagesTopProductBuySection.length - 1 && (
                  <div className="playOverlayTopProductBuySection">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mainImageWrapperTopProductBuySection">
            <img 
              src={imagesTopProductBuySection[activeImageTopProductBuySection]} 
              alt="Main Product View" 
              className="mainImgTopProductBuySection" 
            />
          </div>
        </div>

        <div className="rightColTopProductBuySection">
          
          <div className="headerInfoTopProductBuySection">
            <span className="categoryTopProductBuySection">PHONE CASES</span>
            <h1 className="titleTopProductBuySection">Midnight Marble</h1>
            <h3 className="subtitleTopProductBuySection">Bold. Refined. Uniquely yours.</h3>
            <p className="descTopProductBuySection">
              A statement in every detail. Midnight Marble blends timeless design with everyday protection — and the option to make it personal.
            </p>
            <div className="priceTopProductBuySection">PKR 6,500</div>
            
            <div className="reviewsTopProductBuySection">
              <div className="starsTopProductBuySection">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <span className="reviewTextTopProductBuySection">4.8 (120 reviews)</span>
            </div>
          </div>

          <div className="dividerTopProductBuySection"></div>

          <div className="formTopProductBuySection">
            
            <div className="inputGroupTopProductBuySection">
              <label className="labelTopProductBuySection">Select Device</label>
              <div className="selectWrapperTopProductBuySection">
                <select 
                  className="selectTopProductBuySection"
                  value={selectedDeviceTopProductBuySection}
                  onChange={(e) => setSelectedDeviceTopProductBuySection(e.target.value)}
                >
                  <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                  <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                  <option value="iPhone 14 Pro">iPhone 14 Pro</option>
                </select>
                <div className="selectIconTopProductBuySection">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>

            <div className="inputGroupTopProductBuySection">
              <label className="labelTopProductBuySection">Select Finish</label>
              <div className="swatchesTopProductBuySection">
                {finishesTopProductBuySection.map((finish) => (
                  <div 
                    key={finish.name} 
                    className={`swatchOuterTopProductBuySection ${selectedFinishTopProductBuySection === finish.name ? 'activeSwatchTopProductBuySection' : ''}`}
                    onClick={() => setSelectedFinishTopProductBuySection(finish.name)}
                  >
                    <div className="swatchInnerTopProductBuySection" style={{ backgroundColor: finish.color }}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="inputGroupTopProductBuySection">
              <label className="labelTopProductBuySection">Personalization (Optional)</label>
              <div className="textInputWrapperTopProductBuySection">
                <input 
                  type="text" 
                  className="textInputTopProductBuySection" 
                  value={personalizationTextTopProductBuySection}
                  onChange={handleTextChangeTopProductBuySection}
                  placeholder="Enter text"
                />
                <span className="charCountTopProductBuySection">{personalizationTextTopProductBuySection.length}/5</span>
              </div>
              <p className="inputHintTopProductBuySection">Add initials, a name, or a word that matters.</p>
            </div>

          </div>

          <button className="addToCartBtnTopProductBuySection">
            ADD TO CART <span className="cartArrowTopProductBuySection">&rarr;</span>
          </button>

          <div className="trustBadgesTopProductBuySection">
            <div className="badgeItemTopProductBuySection">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              <span className="badgeTextTopProductBuySection">Premium<br/>Protection</span>
            </div>
            <div className="badgeItemTopProductBuySection">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span className="badgeTextTopProductBuySection">Personalized<br/>Just for You</span>
            </div>
            <div className="badgeItemTopProductBuySection">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              <span className="badgeTextTopProductBuySection">Worldwide<br/>Shipping</span>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default TopProductBuySection;