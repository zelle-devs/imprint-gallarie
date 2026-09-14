import React from 'react';
import './CustomPersonalUnforgettable.css';

function CustomPersonalUnforgettable() {
  return (
    <div className="sectionCustomPersonalUnforgettable">
      <div className="overlayCustomPersonalUnforgettable"></div>
      
      <div className="containerCustomPersonalUnforgettable">
        
        <div className="leftContentCustomPersonalUnforgettable">
          <span className="subtitleCustomPersonalUnforgettable">MAKE IT YOURS</span>
          <h2 className="titleCustomPersonalUnforgettable">Custom. Personal. Unforgettable.</h2>
        </div>

        <div className="rightContentCustomPersonalUnforgettable">
          <button className="btnCustomPersonalUnforgettable">
            EXPLORE PERSONALIZATION <span className="arrowCustomPersonalUnforgettable">&rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default CustomPersonalUnforgettable;