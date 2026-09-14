import React from 'react';
import './CustomDesignForYourSpace.css';

function CustomDesignForYourSpace() {
  return (
    <div className="sectionCustomDesignForYourSpace">
      <div className="bgOverlayCustomDesignForYourSpace"></div>
      
      <div className="containerCustomDesignForYourSpace">
        
        <div className="leftContentCustomDesignForYourSpace">
          <span className="subtitleCustomDesignForYourSpace">LET'S CREATE TOGETHER</span>
          <h2 className="titleCustomDesignForYourSpace">Custom Designs for Your Space</h2>
          <p className="descCustomDesignForYourSpace">
            Have a vision in mind? We bring your ideas to life with bespoke wall art, crafted just for you.
          </p>
        </div>

        <div className="rightContentCustomDesignForYourSpace">
          <button className="btnCustomDesignForYourSpace">
            START A CUSTOM ORDER <span className="arrowCustomDesignForYourSpace">&rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default CustomDesignForYourSpace;