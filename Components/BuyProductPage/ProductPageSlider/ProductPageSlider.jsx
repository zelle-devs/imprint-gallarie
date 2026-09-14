import React from 'react';
import './ProductPageSlider.css';

function ProductPageSlider() {
  return (
    <div className="containerProductPageSlider">
      <div className="bgContainerProductPageSlider">
        <div className="overlayProductPageSlider"></div>
        
        <div className="contentProductPageSlider">
          <div className="leftColProductPageSlider">
            <span className="subtitleProductPageSlider">PHONE CASES</span>
            
            <h1 className="titleProductPageSlider">
              Protection<br />Meets Personality.
            </h1>
            
            <p className="descProductPageSlider">
              Premium phone cases, designed to carry<br />your story, your way.
            </p>
            
            <div className="dividerProductPageSlider"></div>
            
            <div className="breadcrumbProductPageSlider">
              <a href="#" className="crumbLinkProductPageSlider">Home</a>
              <span className="crumbSeparatorProductPageSlider">&gt;</span>
              <a href="#" className="crumbLinkProductPageSlider">Shop</a>
              <span className="crumbSeparatorProductPageSlider">&gt;</span>
              <span className="crumbCurrentProductPageSlider">Phone Cases</span>
            </div>
          </div>

          <div className="rightColProductPageSlider">
            <span className="rightTextItemProductPageSlider">MORE</span>
            <span className="rightTextItemProductPageSlider">THAN A</span>
            <span className="rightTextItemProductPageSlider">PRODUCT.</span>
            <span className="rightTextItemProductPageSlider">IT'S A</span>
            <span className="rightTextItemProductPageSlider">FEELING.</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProductPageSlider;