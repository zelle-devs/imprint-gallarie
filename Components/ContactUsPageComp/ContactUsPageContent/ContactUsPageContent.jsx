import React, { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Briefcase,
  Plus,
  Minus,
} from "lucide-react";
import "./ContactUsPageContent.css";

function ContactUsPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "How do I place a custom order?",
      answer:
        "Choose your product, upload your artwork or select a template, then submit your order through our online designer. Our team will confirm the details before printing.",
    },
    {
      question: "What file types do you accept?",
      answer:
        "We accept PNG, JPG, SVG, AI and PDF files. For the sharpest print quality, vector files (AI/SVG) or high resolution PNGs are recommended.",
    },
    {
      question: "Do you offer bulk or corporate discounts?",
      answer:
        "Yes, we offer tiered pricing for bulk and corporate orders. Reach out through our business inquiry form and our team will prepare a custom quote.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard orders ship within 3-5 business days. Bulk and custom orders may take 7-10 business days depending on order size and customisation.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Absolutely. Once your order ships, you'll receive a tracking link by email so you can follow its progress right to your door.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="contactUsPageContent">
      {/* Top info cards */}
      <section className="infoCardsSectionContactUsPageContent">
        <div className="infoCardsGridContactUsPageContent">
          <div className="infoCardItemContactUsPageContent">
            <span className="infoCardIconContactUsPageContent">
              <Phone size={20} strokeWidth={1.6} />
            </span>
            <div className="infoCardTextWrapContactUsPageContent">
              <h4 className="infoCardTitleContactUsPageContent">Call Us</h4>
              <p className="infoCardTextContactUsPageContent">
                +1 (800) 123-4567
              </p>
              <p className="infoCardSubTextContactUsPageContent">
                Mon - Fri, 9AM - 6PM (EST)
              </p>
            </div>
          </div>

          <div className="infoCardItemContactUsPageContent">
            <span className="infoCardIconContactUsPageContent">
              <Mail size={20} strokeWidth={1.6} />
            </span>
            <div className="infoCardTextWrapContactUsPageContent">
              <h4 className="infoCardTitleContactUsPageContent">Email Us</h4>
              <p className="infoCardTextContactUsPageContent">
                hello@imprintGallery.com
              </p>
              <p className="infoCardSubTextContactUsPageContent">
                We reply within 24 hours
              </p>
            </div>
          </div>

          <div className="infoCardItemContactUsPageContent">
            <span className="infoCardIconContactUsPageContent">
              <MessageCircle size={20} strokeWidth={1.6} />
            </span>
            <div className="infoCardTextWrapContactUsPageContent">
              <h4 className="infoCardTitleContactUsPageContent">
                Live Chat
              </h4>
              <p className="infoCardTextContactUsPageContent">
                Chat with our team
              </p>
              <p className="infoCardSubTextContactUsPageContent">
                Quick answers, real people
              </p>
            </div>
          </div>

          <div className="infoCardItemContactUsPageContent">
            <span className="infoCardIconContactUsPageContent">
              <MapPin size={20} strokeWidth={1.6} />
            </span>
            <div className="infoCardTextWrapContactUsPageContent">
              <h4 className="infoCardTitleContactUsPageContent">
                Our Location
              </h4>
              <p className="infoCardTextContactUsPageContent">
                123 Creative Lane,
              </p>
              <p className="infoCardSubTextContactUsPageContent">
                New York, NY 10001, USA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Send us a message */}
      <section className="messageSectionContactUsPageContent">
        <div className="messageGridContactUsPageContent">
          {/* Left: form card */}
          <div className="messageFormCardContactUsPageContent">
            <span className="messageLabelContactUsPageContent">
              SEND US A MESSAGE
            </span>
            <h2 className="messageHeadingContactUsPageContent">
              We'd Love to Hear From You
            </h2>
            <p className="messageParaContactUsPageContent">
              Fill out the form below and our team will get back to you as
              soon as possible.
            </p>

            <form
              className="messageFormContactUsPageContent"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="formRowContactUsPageContent">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="formInputContactUsPageContent"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="formInputContactUsPageContent"
                />
              </div>

              <div className="formRowContactUsPageContent">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="formInputContactUsPageContent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="formInputContactUsPageContent"
                />
              </div>

              <select
                defaultValue=""
                className="formSelectContactUsPageContent"
              >
                <option value="" disabled>
                  How can we help you?
                </option>
                <option value="order">Order Support</option>
                <option value="custom">Custom Order</option>
                <option value="bulk">Bulk / Corporate Order</option>
                <option value="other">Something Else</option>
              </select>

              <textarea
                placeholder="Your Message"
                rows={5}
                className="formTextareaContactUsPageContent"
              />

              <label className="formCheckboxRowContactUsPageContent">
                <input type="checkbox" className="formCheckboxContactUsPageContent" />
                <span className="formCheckboxTextContactUsPageContent">
                  I agree to the{" "}
                  <a href="#privacy" className="formLinkContactUsPageContent">
                    Privacy Policy
                  </a>{" "}
                  and consent to be contacted by Imprint Gallery.
                </span>
              </label>

              <button
                type="submit"
                className="formSubmitBtnContactUsPageContent"
              >
                Send Message
                <Send size={16} strokeWidth={1.8} />
              </button>
            </form>
          </div>

          {/* Right: image card + bulk orders card */}
          <div className="messageAsideContactUsPageContent">
            <div className="messageImageCardContactUsPageContent">
              <img
                src="./imprintContactUSPageimage12.jpg"
                alt="Workspace with laptop and notebook"
                className="messageImageContactUsPageContent"
              />
              <div className="needHelpOverlayContactUsPageContent">
                <h4 className="needHelpHeadingContactUsPageContent">
                  Need Help Right Away?
                </h4>
                <p className="needHelpTextContactUsPageContent">
                  Check our FAQs or start a live chat for instant support
                </p>
                <button className="needHelpBtnContactUsPageContent">
                  View FAQs
                </button>
              </div>
            </div>

            <div className="bulkOrdersCardContactUsPageContent">
              <span className="bulkOrdersIconContactUsPageContent">
                <Briefcase size={20} strokeWidth={1.6} />
              </span>
              <div className="bulkOrdersTextWrapContactUsPageContent">
                <h4 className="bulkOrdersHeadingContactUsPageContent">
                  For Business &amp; Bulk Orders
                </h4>
                <p className="bulkOrdersTextContactUsPageContent">
                  Looking for custom merchandise for your team, event, or
                  brand? Get in touch with our corporate team.
                </p>
                <a
                  href="#inquire"
                  className="bulkOrdersLinkContactUsPageContent"
                >
                  Inquire Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="faqSectionContactUsPageContent">
        <div className="faqGridContactUsPageContent">
          <div className="faqImageColContactUsPageContent">
            <img
              src="./imprintContactUSPageimage3.jpg"
              alt="Printed merchandise, hoodie and accessories"
              className="faqImageContactUsPageContent"
            />
          </div>

          <div className="faqListColContactUsPageContent">
            <span className="faqLabelContactUsPageContent">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="faqHeadingContactUsPageContent">Quick Answers</h3>
            <p className="faqParaContactUsPageContent">
              Find answers to common questions about orders, customisation,
              shipping, and more.
            </p>

            <div className="faqAccordionContactUsPageContent">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    className="faqAccordionItemContactUsPageContent"
                    key={item.question}
                  >
                    <button
                      type="button"
                      className="faqAccordionTriggerContactUsPageContent"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="faqAccordionQuestionContactUsPageContent">
                        {item.question}
                      </span>
                      <span className="faqAccordionIconContactUsPageContent">
                        {isOpen ? (
                          <Minus size={16} strokeWidth={1.8} />
                        ) : (
                          <Plus size={16} strokeWidth={1.8} />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="faqAccordionAnswerContactUsPageContent">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <button className="faqViewAllBtnContactUsPageContent">
              View All FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletterSectionContactUsPageContent">
        <div className="newsletterContentContactUsPageContent">
          <span className="newsletterIconContactUsPageContent">
            <Send size={22} strokeWidth={1.6} />
          </span>

          <div className="newsletterTextWrapContactUsPageContent">
            <h3 className="newsletterHeadingContactUsPageContent">
              Stay in the Loop
            </h3>
            <p className="newsletterParaContactUsPageContent">
              Get updates on new products, special offers, and creative
              inspiration.
            </p>
          </div>

          <form
            className="newsletterFormContactUsPageContent"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletterInputContactUsPageContent"
            />
            <button
              type="submit"
              className="newsletterSubmitBtnContactUsPageContent"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPageContent;