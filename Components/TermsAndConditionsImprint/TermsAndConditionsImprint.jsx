import React from 'react';
import './TermsAndConditionsImprint.css';
import { FiPhone, FiMail, FiMessageCircle, FiMapPin } from 'react-icons/fi';

function TermsAndConditionsImprint() {
  return (
    <div className="wrapperTermsAndConditionsImprint">
      <div className="containerTermsAndConditionsImprint">
        
        {/* Header Section */}
        <header className="headerTermsAndConditionsImprint">
          <h1 className="mainTitleTermsAndConditionsImprint">Terms and Conditions</h1>
          <p className="subtitleTermsAndConditionsImprint">Effective Date: October 2026</p>
        </header>

        {/* Content Section */}
        <main className="contentTermsAndConditionsImprint">
          
          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">1. Agreement to Terms</h2>
            <p className="paragraphTermsAndConditionsImprint">
              Welcome to Imprint Gallery. These Terms and Conditions constitute a legally binding agreement made between you and Imprint Gallery concerning your access to and use of our website and services. By accessing the site and placing an order for our personalized products, you agree that you have read, understood, and are bound by all of these terms.
            </p>
          </section>

          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">2. Custom Order Requirements & Accuracy</h2>
            <p className="paragraphTermsAndConditionsImprint">
              Imprint Gallery specializes in personalized products created from the texts, images, and designs you provide. 
            </p>
            <ul className="listTermsAndConditionsImprint">
              <li className="listItemTermsAndConditionsImprint">
                <strong>Accuracy:</strong> You are strictly responsible for ensuring that all spelling, grammar, and image resolutions are correct before submitting your order. We print exactly what is provided.
              </li>
              <li className="listItemTermsAndConditionsImprint">
                <strong>Final Approval:</strong> Once an order is placed and enters our production queue, modifications or cancellations cannot be guaranteed. 
              </li>
              <li className="listItemTermsAndConditionsImprint">
                <strong>Color Variations:</strong> Due to differences in monitor displays and the physical printing process, minor color variations between your digital design and the final product are normal and not considered defects.
              </li>
            </ul>
          </section>

          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">3. User Content & Prohibited Material</h2>
            <p className="paragraphTermsAndConditionsImprint">
              By uploading designs, logos, or photos to Imprint Gallery, you declare that you hold the necessary rights and permissions to use those materials. You agree not to submit any content that is copyrighted by a third party without authorization, or that is illegal, offensive, discriminatory, or violates the privacy rights of others. We reserve the right to reject and cancel any order that violates these content guidelines.
            </p>
          </section>

          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">4. Intellectual Property</h2>
            <p className="paragraphTermsAndConditionsImprint">
              Unless otherwise indicated, the Site is our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (excluding your uploaded custom designs) are owned or licensed to Imprint Gallery and are protected by copyright and trademark laws.
            </p>
          </section>

          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">5. Pricing, Billing, & Payments</h2>
            <p className="paragraphTermsAndConditionsImprint">
              All prices are subject to change without prior notice. We reserve the right to correct any pricing errors or refuse any orders placed with an incorrect price. Payment is required in full at checkout before any custom production begins. We accept major credit cards and verified digital payment gateways.
            </p>
          </section>

          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">6. Product Availability</h2>
            <p className="paragraphTermsAndConditionsImprint">
              We make every effort to display the inventory of our blank products accurately. However, we cannot guarantee that a specific item size, color, or style will always be in stock. If an item becomes unavailable after your order is placed, we will contact you immediately to offer a substitution or a refund.
            </p>
          </section>

          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">7. Limitation of Liability</h2>
            <p className="paragraphTermsAndConditionsImprint">
              To the fullest extent permitted by law, Imprint Gallery shall not be liable for any indirect, consequential, incidental, or punitive damages resulting from your use of our website or products. Our liability to you for any cause whatsoever will at all times be limited to the amount paid, if any, by you to us for the custom product in question.
            </p>
          </section>

          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">8. Governing Law</h2>
            <p className="paragraphTermsAndConditionsImprint">
              These Terms and Conditions and your use of the Imprint Gallery website are governed by and construed in accordance with the laws of the jurisdiction in which our business is registered, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">9. Modifications to Terms</h2>
            <p className="paragraphTermsAndConditionsImprint">
              We reserve the right to update, alter, or replace any part of these Terms and Conditions at our sole discretion by posting updates to our website. It is your responsibility to check this page periodically for changes.
            </p>
          </section>

          <section className="sectionTermsAndConditionsImprint">
            <h2 className="sectionTitleTermsAndConditionsImprint">10. Contact Us</h2>
            <p className="paragraphTermsAndConditionsImprint">
              If you have any questions or require clarification regarding these Terms and Conditions, please contact our administrative team:
            </p>
            
            <div className="contactGridTermsAndConditionsImprint">
              {/* Call Us */}
              <div className="contactCardTermsAndConditionsImprint">
                <div className="iconCircleTermsAndConditionsImprint"><FiPhone /></div>
                <h3 className="contactTitleTermsAndConditionsImprint">Call Us</h3>
                <p className="contactTextTermsAndConditionsImprint">+1 (800) 123-4567 </p>
                <p className="contactSubTextTermsAndConditionsImprint">Mon - Fri, 9AM - 6PM (EST) </p>
              </div>

              {/* Email Us */}
              <div className="contactCardTermsAndConditionsImprint">
                <div className="iconCircleTermsAndConditionsImprint"><FiMail /></div>
                <h3 className="contactTitleTermsAndConditionsImprint">Email Us</h3>
                <p className="contactTextTermsAndConditionsImprint">hello@imprintGallery.com </p>
                <p className="contactSubTextTermsAndConditionsImprint">We reply within 24 hours </p>
              </div>

              {/* Live Chat */}
              <div className="contactCardTermsAndConditionsImprint">
                <div className="iconCircleTermsAndConditionsImprint"><FiMessageCircle /></div>
                <h3 className="contactTitleTermsAndConditionsImprint">Live Chat</h3>
                <p className="contactTextTermsAndConditionsImprint">Chat with our team </p>
                <p className="contactSubTextTermsAndConditionsImprint">Quick answers, real people </p>
              </div>

              {/* Location */}
              <div className="contactCardTermsAndConditionsImprint">
                <div className="iconCircleTermsAndConditionsImprint"><FiMapPin /></div>
                <h3 className="contactTitleTermsAndConditionsImprint">Our Location</h3>
                <p className="contactTextTermsAndConditionsImprint">123 Creative Lane, </p>
                <p className="contactSubTextTermsAndConditionsImprint">New York, NY 10001, USA </p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default TermsAndConditionsImprint;