import React from 'react';
import './FacilitiesSection.css';

function FacilitiesSection() {
  const facilitiesFacilitiesSection = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
      ),
      title: "Premium Materials",
      subtitle: "Built to last."
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          <path d="M15 5l4 4"></path>
          <path d="M4 22h16"></path>
        </svg>
      ),
      title: "Personalize It",
      subtitle: "Make it yours."
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="4" rx="1"></rect>
          <path d="M12 8v13"></path>
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
        </svg>
      ),
      title: "Elegant Packaging",
      subtitle: "Ready to gift."
    },
    {
      id: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      title: "Worldwide Shipping",
      subtitle: "Thoughtful gifts, everywhere."
    }
  ];

  return (
    <div className="sectionFacilitiesSection">
      <div className="containerFacilitiesSection">
        {facilitiesFacilitiesSection.map((item) => (
          <div key={item.id} className="itemFacilitiesSection">
            <div className="iconFacilitiesSection">
              {item.icon}
            </div>
            <h4 className="titleFacilitiesSection">{item.title}</h4>
            <p className="subtitleFacilitiesSection">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacilitiesSection;