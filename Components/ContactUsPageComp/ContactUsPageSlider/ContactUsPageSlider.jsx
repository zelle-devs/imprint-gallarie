import React from 'react';
import './ContactUsPageSlider.css';

function ContactUsPageSlider() {
  return (
    <div className="containerContactUsPageSlider">
      <div className="bgContainerContactUsPageSlider">
        <div className="overlayContactUsPageSlider"></div>
        
        <div className="contentContactUsPageSlider">
          <div className="leftColContactUsPageSlider">
            <span className="subtitleContactUsPageSlider">IMPRINT GALLERIA</span>
            
            <h1 className="titleContactUsPageSlider">
              Let's Get<br />Connected.
            </h1>
            
            <p className="descContactUsPageSlider">
              Have a question about a piece or need assistance?<br />Reach out and let us help you bring your vision to life.
            </p>
            
            <div className="dividerContactUsPageSlider"></div>
            
            <div className="breadcrumbContactUsPageSlider">
              <a href="#" className="crumbLinkContactUsPageSlider">Home</a>
              <span className="crumbSeparatorContactUsPageSlider">&gt;</span>
              <span className="crumbCurrentContactUsPageSlider">Contact Us</span>
            </div>
          </div>

          <div className="rightColContactUsPageSlider">
            <span className="rightTextItemContactUsPageSlider">WE</span>
            <span className="rightTextItemContactUsPageSlider">WOULD LOVE</span>
            <span className="rightTextItemContactUsPageSlider">TO HEAR</span>
            <span className="rightTextItemContactUsPageSlider">FROM</span>
            <span className="rightTextItemContactUsPageSlider">YOU.</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ContactUsPageSlider;