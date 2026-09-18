import React from 'react';
import './ContactUsPageSlider.css';
import { MoveRight } from 'lucide-react';

function ContactUsPageSlider() {
  return (
    <div className="wrapperContactUsPageSlider">
      <div className="bgContainerContactUsPageSlider">
        <div className="gradientOverlayContactUsPageSlider"></div>
        
        <div className="contentContactUsPageSlider">
          
          <div className="leftSideContactUsPageSlider">
            <span className="subtitleContactUsPageSlider">GET IN TOUCH</span>
            <h2 className="titleContactUsPageSlider">
              LET'S TALK<br />DECOR
            </h2>
            <h3 className="taglineContactUsPageSlider">Inspiring. Personalized. Seamless.</h3>
            <p className="descriptionContactUsPageSlider">
              Whether you are looking for the perfect statement piece or need expert advice for a complete room makeover, our team is here to help. Reach out to us and let's craft a beautiful space together.
            </p>
            {/* <button className="exploreBtnContactUsPageSlider">
              SEND A MESSAGE <span className="arrowIconContactUsPageSlider"><MoveRight strokeWidth={1.4}/></span>
            </button> */}
          </div>

          <div className="rightSideContactUsPageSlider">
            <div className="rightTextContactUsPageSlider">
              <span>BRING</span>
              <span>YOUR VISION</span>
              <span className="mutedTextContactUsPageSlider">TO REALITY</span>
              <span className="mutedTextContactUsPageSlider">WITH US.</span>
            </div>
            {/* <div className="verticalLineContactUsPageSlider"></div> */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUsPageSlider;