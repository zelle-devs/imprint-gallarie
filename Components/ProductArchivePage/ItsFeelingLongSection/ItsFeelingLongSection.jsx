import React from 'react';
import './ItsFeelingLongSection.css';

function ItsFeelingLongSection() {
  return (
    <div className="sectionItsFeelingLongSection">
      <div className="bgContainerItsFeelingLongSection">
        <div className="overlayItsFeelingLongSection"></div>
        
        <div className="contentItsFeelingLongSection">
          <div className="textWrapperItsFeelingLongSection">
            <span className="subtitleItsFeelingLongSection">MORE THAN A PRODUCT</span>
            <h2 className="titleItsFeelingLongSection">It's a Feeling.</h2>
            <p className="descItsFeelingLongSection">
              Carry what matters, every day.
            </p>
            <button className="btnItsFeelingLongSection">
              EXPLORE MORE <span className="arrowItsFeelingLongSection">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItsFeelingLongSection;