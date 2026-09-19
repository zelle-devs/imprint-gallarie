import React from 'react';
import './PrivacyPolicyImprint.css';
import { FiPhone, FiMail, FiMessageCircle, FiMapPin } from 'react-icons/fi';

function PrivacyPolicyImprint() {
  return (
    <div className="wrapperPrivacyPolicyImprint">
      <div className="containerPrivacyPolicyImprint">
        
        {/* Header Section */}
        <header className="headerPrivacyPolicyImprint">
          <h1 className="mainTitlePrivacyPolicyImprint">Privacy Policy</h1>
          <p className="subtitlePrivacyPolicyImprint">Effective Date: October 2026</p>
        </header>

        {/* Content Section */}
        <main className="contentPrivacyPolicyImprint">
          
          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">1. Introduction & Scope</h2>
            <p className="paragraphPrivacyPolicyImprint">
              Welcome to Imprint Gallery. We deeply respect your privacy and are committed to protecting your personal data. This detailed Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or purchase our customized products, including personalized mugs, customized wallets, custom-designed clocks, and printed water bottles.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">2. Information We Collect</h2>
            <p className="paragraphPrivacyPolicyImprint">
              To provide you with the best custom merchandise, we collect distinct types of information:
            </p>
            <ul className="listPrivacyPolicyImprint">
              <li className="listItemPrivacyPolicyImprint">
                <strong>Personal Identification:</strong> Name, email address, shipping address, and phone number.
              </li>
              <li className="listItemPrivacyPolicyImprint">
                <strong>Customization Data:</strong> Personal images, family photos, text, monograms, and design preferences uploaded specifically for customizing your mugs, wallets, and clocks.
              </li>
              <li className="listItemPrivacyPolicyImprint">
                <strong>Payment Information:</strong> Processed securely via third-party gateways. We do not store your raw credit card details on our servers.
              </li>
            </ul>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">3. How We Use Your Information</h2>
            <p className="paragraphPrivacyPolicyImprint">
              The data we collect is primarily used to fulfill your orders. Your uploaded designs are used exclusively to manufacture your custom bottles and other merchandise. We also use your contact details to send order updates, shipping tracking links, and respond to your customer support inquiries.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">4. Consent & User Rights</h2>
            <p className="paragraphPrivacyPolicyImprint">
              By uploading your personal images and designs to our platform, you grant us explicit consent to use those files for the sole purpose of creating your customized products. You reserve the right to request access, modification, or deletion of your personal data and uploaded files at any time by contacting our support team.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">5. Data Sharing and Third Parties</h2>
            <p className="paragraphPrivacyPolicyImprint">
              Imprint Gallery does not sell, trade, or rent your personal information to others. We only share necessary data with trusted third-party service providers, such as shipping carriers (to deliver your custom wallets and clocks) and secure payment processors, under strict confidentiality agreements.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">6. Data Retention Policy</h2>
            <p className="paragraphPrivacyPolicyImprint">
              We understand the sensitive nature of your personal photos and custom artwork. Therefore, all uploaded customization data (images, logos, texts) is kept on our active servers only for as long as it takes to process, print, and deliver your order. Once your order is completed, production files are routinely purged from our active systems.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">7. Data Security Measures</h2>
            <p className="paragraphPrivacyPolicyImprint">
              We implement robust, industry-standard security measures, including SSL encryption, to protect your personal data and custom designs during transmission. Our databases are secured against unauthorized access, alteration, disclosure, or destruction of your personal information.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">8. Cookies and Tracking Technologies</h2>
            <p className="paragraphPrivacyPolicyImprint">
              Our website uses cookies to enhance your browsing experience, remember the custom items in your shopping cart, and analyze site traffic. You can choose to disable cookies through your browser settings, though this may limit your ability to use our custom product design tools effectively.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">9. User Generated Content & Intellectual Property</h2>
            <p className="paragraphPrivacyPolicyImprint">
              You retain full ownership and intellectual property rights to any designs, photos, or text you upload for printing on our mugs, wallets, and bottles. Imprint Gallery claims no ownership over your creations and will never use your custom designs for marketing purposes without your explicit written permission.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">10. Children's Privacy</h2>
            <p className="paragraphPrivacyPolicyImprint">
              Our website and custom printing services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal data, we will take immediate steps to delete such information.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">11. Changes to This Privacy Policy</h2>
            <p className="paragraphPrivacyPolicyImprint">
              Imprint Gallery reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this policy periodically to stay informed about how we are protecting your personal information.
            </p>
          </section>

          <section className="sectionPrivacyPolicyImprint">
            <h2 className="sectionTitlePrivacyPolicyImprint">12. Contact Us</h2>
            <p className="paragraphPrivacyPolicyImprint">
              If you have any questions or concerns regarding this privacy policy, how we handle your custom designs, or your data rights, please reach out to us through any of the following methods:
            </p>
            
            <div className="contactGridPrivacyPolicyImprint">
              {/* Call Us */}
              <div className="contactCardPrivacyPolicyImprint">
                <div className="iconCirclePrivacyPolicyImprint"><FiPhone /></div>
                <h3 className="contactTitlePrivacyPolicyImprint">Call Us</h3>
                <p className="contactTextPrivacyPolicyImprint">+1 (800) 123-4567 </p>
                <p className="contactSubTextPrivacyPolicyImprint">Mon - Fri, 9AM - 6PM (EST) </p>
              </div>

              {/* Email Us */}
              <div className="contactCardPrivacyPolicyImprint">
                <div className="iconCirclePrivacyPolicyImprint"><FiMail /></div>
                <h3 className="contactTitlePrivacyPolicyImprint">Email Us</h3>
                <p className="contactTextPrivacyPolicyImprint">hello@imprintGallery.com </p>
                <p className="contactSubTextPrivacyPolicyImprint">We reply within 24 hours </p>
              </div>

              {/* Live Chat */}
              <div className="contactCardPrivacyPolicyImprint">
                <div className="iconCirclePrivacyPolicyImprint"><FiMessageCircle /></div>
                <h3 className="contactTitlePrivacyPolicyImprint">Live Chat</h3>
                <p className="contactTextPrivacyPolicyImprint">Chat with our team </p>
                <p className="contactSubTextPrivacyPolicyImprint">Quick answers, real people </p>
              </div>

              {/* Location */}
              <div className="contactCardPrivacyPolicyImprint">
                <div className="iconCirclePrivacyPolicyImprint"><FiMapPin /></div>
                <h3 className="contactTitlePrivacyPolicyImprint">Our Location</h3>
                <p className="contactTextPrivacyPolicyImprint">123 Creative Lane, </p>
                <p className="contactSubTextPrivacyPolicyImprint">New York, NY 10001, USA </p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default PrivacyPolicyImprint;