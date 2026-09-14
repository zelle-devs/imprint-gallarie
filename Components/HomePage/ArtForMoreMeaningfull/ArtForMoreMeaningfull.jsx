import React from 'react';
import './ArtForMoreMeaningfull.css';

function ArtForMoreMeaningfull() {
  return (
    <div className="sectionArtForMoreMeaningfull">
      <div className="containerArtForMoreMeaningfull">
        
        <div className="leftColArtForMoreMeaningfull">
          <img 
            src="https://picsum.photos/1000/600?random=901" 
            alt="Meaningful Art Interior" 
            className="leftImgArtForMoreMeaningfull" 
          />
        </div>

        <div className="rightColArtForMoreMeaningfull">
          <div className="textContentArtForMoreMeaningfull">
            <span className="subtitleArtForMoreMeaningfull">ROOTED IN MEANING</span>
            <h2 className="titleArtForMoreMeaningfull">
              Art for a More<br />Meaningful Home
            </h2>
            <p className="descArtForMoreMeaningfull">
              Our designs are inspired by heritage, nature and timeless aesthetics — created to add depth, warmth and intention to your space.
            </p>
            <a href="#" className="linkArtForMoreMeaningfull">
              OUR STORY <span className="arrowArtForMoreMeaningfull">&rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ArtForMoreMeaningfull;