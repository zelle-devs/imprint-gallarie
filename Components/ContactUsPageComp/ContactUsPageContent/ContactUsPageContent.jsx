import React from "react";
import "./ContactUsPageContent.css";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Play, 
  Smartphone, 
  Truck, 
  Package, 
  Headphones, 
  Lock, 
  CheckCircle 
} from "lucide-react";

function ContactUsPageContent() {
  return (
    <div className="ContactUsPageContent">
      <section className="contactSectionContactUsPageContent">
        <div className="contactWrapContactUsPageContent">
          <div className="speakWithUsContactUsPageContent"> 
            <h2 className="speakHeadingContactUsPageContent">Speak With Us</h2>
            <p className="speakParaContactUsPageContent">
              Whether you need design advice, order updates, or have a question about our curated decor collections, our team is here to help you transform your space.
            </p>

            <ul className="contactListContactUsPageContent">
              <li className="contactItemContactUsPageContent">
                <span className="contactIconContactUsPageContent">
                  <MapPin size={18} />
                </span>
                <div className="contactTextContactUsPageContent">
                  <h4 className="contactLabelContactUsPageContent">
                    Store Address
                  </h4>
                  <p className="contactValueContactUsPageContent">
                    123 Decor Boulevard, Design District, New York, NY, USA 10001
                  </p>
                </div>
              </li>

              <li className="contactItemContactUsPageContent">
                <span className="contactIconContactUsPageContent">
                  <Phone size={18} />
                </span>
                <div className="contactTextContactUsPageContent">
                  <h4 className="contactLabelContactUsPageContent">Call Us</h4>
                  <p className="contactValueContactUsPageContent">
                    +1 (800) 123-4567
                  </p>
                </div>
              </li>

              <li className="contactItemContactUsPageContent">
                <span className="contactIconContactUsPageContent">
                  <Mail size={18} />
                </span>
                <div className="contactTextContactUsPageContent">
                  <h4 className="contactLabelContactUsPageContent">Mail Us</h4>
                  <p className="contactValueContactUsPageContent">
                    hello@beyvoradecor.com
                  </p>
                </div>
              </li>

              <li className="contactItemContactUsPageContent">
                <span className="contactIconContactUsPageContent">
                  <Globe size={18} />
                </span>
                <div className="contactTextContactUsPageContent">
                  <h4 className="contactLabelContactUsPageContent">Website</h4>
                  <p className="contactValueContactUsPageContent">
                    www.beyvoradecor.com
                  </p>
                </div>
              </li>
            </ul>

            {/* <div className="brandLogosContactUsPageContent">
              <span className="brandLogoContactUsPageContent">Lumina</span>
              <span className="brandLogoContactUsPageContent">VogueDecor</span>
              <span className="brandLogoContactUsPageContent">Artisan</span>
            </div> */}
          </div>

          {/* Right: 24/7 Support form */}
          <div className="supportFormContactUsPageContent"> 
            <h2 className="supportHeadingContactUsPageContent">
              24/7 Support
            </h2>
            <p className="supportParaContactUsPageContent">
              Reach out to us anytime. Our interior design specialists and customer support team are available around the clock to assist you.
            </p>

            <form
              className="supportFormFieldsContactUsPageContent"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="formRowContactUsPageContent">
                <input
                  type="text"
                  placeholder="First name"
                  className="formInputContactUsPageContent"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="formInputContactUsPageContent"
                />
              </div>
              <div className="formRowContactUsPageContent">
                <input
                  type="email"
                  placeholder="Email address"
                  className="formInputContactUsPageContent"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="formInputContactUsPageContent"
                />
              </div>
              <textarea
                placeholder="How can we help you style your home?"
                className="formTextareaContactUsPageContent"
                rows={5}
              />
              <button
                type="submit"
                className="formSubmitBtnContactUsPageContent"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* App download banner */}
      <section className="appDownloadContactUsPageContent">
        <img
          src="./aboutussecondbacgrounimage.jpg"
          alt="Luxury home interior"
          className="appDownloadImageContactUsPageContent"
        />
        <div className="appDownloadOverlayContactUsPageContent" />
        <div className="appDownloadContentContactUsPageContent">
          <h2 className="appDownloadHeadingContactUsPageContent">
            Download Our App To Make Shopping Easier.
          </h2>
          <p className="appDownloadParaContactUsPageContent">
            Browse our latest decor collections, get exclusive in-app discounts, and visualize premium furniture in your space using our AR features. Download now on iOS and Android.
          </p>
          <div className="storeButtonsContactUsPageContent">
            <button className="storeButtonContactUsPageContent">
              <span className="storeButtonIconContactUsPageContent"><Play size={20} fill="currentColor" /></span>
              <span className="storeButtonTextContactUsPageContent">
                <small>Get It On</small>
                Google Play
              </span>
            </button>
            <button className="storeButtonContactUsPageContent">
              <span className="storeButtonIconContactUsPageContent"><Smartphone size={20} /></span>
              <span className="storeButtonTextContactUsPageContent">
                <small>Download on the</small>
                App Store
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Feature icons row */}
      <section className="featuresContactUsPageContent">
        <div className="featureItemContactUsPageContent">
          <span className="featureIconContactUsPageContent"><Truck size={36} /></span>
          <h4 className="featureTitleContactUsPageContent">Timely Delivery</h4>
          <p className="featureTextContactUsPageContent">
            Prompt and reliable delivery for all your furniture and decor pieces.
          </p>
        </div>
        <div className="featureItemContactUsPageContent">
          <span className="featureIconContactUsPageContent"><Package size={36} /></span>
          <h4 className="featureTitleContactUsPageContent">Free Shipping</h4>
          <p className="featureTextContactUsPageContent">
            Enjoy complimentary shipping on all decor orders over $150.
          </p>
        </div>
        <div className="featureItemContactUsPageContent">
          <span className="featureIconContactUsPageContent"><Headphones size={36} /></span>
          <h4 className="featureTitleContactUsPageContent">24/7 Support</h4>
          <p className="featureTextContactUsPageContent">
            Our dedicated design and support team is available around the clock.
          </p>
        </div>
        <div className="featureItemContactUsPageContent">
          <span className="featureIconContactUsPageContent"><Lock size={36} /></span>
          <h4 className="featureTitleContactUsPageContent">Secured Payment</h4>
          <p className="featureTextContactUsPageContent">
            Your transactions are protected with industry-leading encryption.
          </p>
        </div>
        <div className="featureItemContactUsPageContent">
          <span className="featureIconContactUsPageContent"><CheckCircle size={36} /></span>
          <h4 className="featureTitleContactUsPageContent">Safe Check Out</h4>
          <p className="featureTextContactUsPageContent">
            Experience a fast, smooth, and fully secure checkout process every time.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="mapSectionContactUsPageContent">
        <iframe
          className="mapIframeContactUsPageContent"
          title="Store location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.87428914026!2d-74.19727038727212!3d40.71277537306232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}

export default ContactUsPageContent;