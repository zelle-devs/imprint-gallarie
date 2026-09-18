import React from 'react';
import './AboutUsPageSlider.css';

function AboutUsPageSlider() {
  return (
    <div className="containerAboutUsPageSlider">
      <div className="bgContainerAboutUsPageSlider">
        <div className="overlayAboutUsPageSlider"></div>
        
        <div className="contentAboutUsPageSlider">
          <div className="leftColAboutUsPageSlider">
            <span className="subtitleAboutUsPageSlider">IMPRINT GALLERIA</span>
            
            <h1 className="titleAboutUsPageSlider">
              Art Meets<br />Expression.
            </h1>
            
            <p className="descAboutUsPageSlider">
              Curated art and timeless pieces, designed to<br />bring your walls and spaces to life.
            </p>
            
            <div className="dividerAboutUsPageSlider"></div>
            
            <div className="breadcrumbAboutUsPageSlider">
              <a href="#" className="crumbLinkAboutUsPageSlider">Home</a>
              <span className="crumbSeparatorAboutUsPageSlider">&gt;</span>
              <span className="crumbCurrentAboutUsPageSlider">About Us</span>
            </div>
          </div>

          <div className="rightColAboutUsPageSlider">
            <span className="rightTextItemAboutUsPageSlider">MORE</span>
            <span className="rightTextItemAboutUsPageSlider">THAN JUST</span>
            <span className="rightTextItemAboutUsPageSlider">ART.</span>
            <span className="rightTextItemAboutUsPageSlider">IT'S YOUR</span>
            <span className="rightTextItemAboutUsPageSlider">STORY.</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AboutUsPageSlider;