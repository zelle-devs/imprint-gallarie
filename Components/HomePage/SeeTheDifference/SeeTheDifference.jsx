import React from 'react';
import './SeeTheDifference.css';

function SeeTheDifference() {
  return (
    <div className="sectionSeeTheDifference">
      <div className="bgContainerSeeTheDifference">
        <div className="gradientOverlaySeeTheDifference"></div>
        
        <div className="contentWrapperSeeTheDifference">
          <div className="textContentSeeTheDifference">
            <span className="subtitleSeeTheDifference">THE CRAFT</span>
            <h2 className="titleSeeTheDifference">See the Difference</h2>
            <p className="descSeeTheDifference">
              From material to finish, every detail is shaped with purpose. It's this commitment to craftsmanship that sets our pieces apart.
            </p>
            <a href="#" className="linkSeeTheDifference">
              OUR PROCESS <span className="arrowSeeTheDifference">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeTheDifference;