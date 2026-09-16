"use client"
import React, { useState } from 'react';
import './TopSectionCartPage.css';

function TopSectionCartPage() {
  const [cartItemsTopSectionCartPage, setCartItemsTopSectionCartPage] = useState([
    {
      id: 1,
      name: "Midnight Marble",
      type: "Phone Case",
      details: ["Device: iPhone 15 Pro", "Finish: Matte", "Personalization: AR"],
      price: "PKR 6,500",
      qty: 1,
      total: "PKR 6,500",
      img: "/PhoneCaseProduct1.jpg"
    },
    {
      id: 2,
      name: "Signature Bottle",
      type: "Insulated Water Bottle",
      details: ["Finish: Matte Black", "Personalization: Ahmed"],
      price: "PKR 5,900",
      qty: 1,
      total: "PKR 5,900",
      img: "/DesignerBottlesCategoryHome.jpeg"
    },
    {
      id: 3,
      name: "Classic Mug",
      type: "Ceramic Mug",
      details: ["Color: Black", "Personalization: Good Ideas Travel Well."],
      price: "PKR 4,200",
      qty: 1,
      total: "PKR 4,200",
      img: "/CoffeeMugsCategoryHome.jpeg"
    }
  ]);

  const handleDecreaseTopSectionCartPage = (id) => {
    setCartItemsTopSectionCartPage(prev => 
      prev.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item)
    );
  };

  const handleIncreaseTopSectionCartPage = (id) => {
    setCartItemsTopSectionCartPage(prev => 
      prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
    );
  };

  return (
    <div className="sectionTopSectionCartPage">
      <div className="containerTopSectionCartPage">
        
        <div className="topHeaderTopSectionCartPage">
          <div className="headerLeftTopSectionCartPage">
            <span className="subtitleTopSectionCartPage">YOUR CART</span>
            <h1 className="titleTopSectionCartPage">Thoughtful Choices.</h1>
            <p className="descTopSectionCartPage">You're one step closer to making it personal.</p>
          </div>
          <div className="headerRightTopSectionCartPage">
            <a href="/checkout" className="continueShoppingTopSectionCartPage">
              Continue Shopping &rarr;
            </a>
          </div>
        </div>

        <div className="contentWrapperTopSectionCartPage">
          
          <div className="leftColTopSectionCartPage">
            <div className="cartTableTopSectionCartPage">
              
              <div className="tableHeaderTopSectionCartPage">
                <div className="thProductTopSectionCartPage">Product</div>
                <div className="thPriceTopSectionCartPage">Price</div>
                <div className="thQtyTopSectionCartPage">Quantity</div>
                <div className="thTotalTopSectionCartPage">Total</div>
                <div className="thActionTopSectionCartPage"></div>
              </div>

              <div className="tableBodyTopSectionCartPage">
                {cartItemsTopSectionCartPage.map((item) => (
                  <div key={item.id} className="cartRowTopSectionCartPage">
                    <div className="tdProductTopSectionCartPage">
                      <div className="productImageWrapperTopSectionCartPage">
                        <img src={item.img} alt={item.name} className="productImgTopSectionCartPage" />
                      </div>
                      <div className="productInfoTopSectionCartPage">
                        <h3 className="productNameTopSectionCartPage">{item.name}</h3>
                        <p className="productTypeTopSectionCartPage">{item.type}</p>
                        <ul className="productDetailsListTopSectionCartPage">
                          {item.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                        <a href="#" className="editLinkTopSectionCartPage">Edit</a>
                      </div>
                    </div>
                    
                    <div className="tdPriceTopSectionCartPage">{item.price}</div>
                    
                    <div className="tdQtyTopSectionCartPage">
                      <div className="qtySelectorTopSectionCartPage">
                        <button className="qtyBtnTopSectionCartPage" onClick={() => handleDecreaseTopSectionCartPage(item.id)}>-</button>
                        <span className="qtyValTopSectionCartPage">{item.qty}</span>
                        <button className="qtyBtnTopSectionCartPage" onClick={() => handleIncreaseTopSectionCartPage(item.id)}>+</button>
                      </div>
                    </div>
                    
                    <div className="tdTotalTopSectionCartPage">{item.total}</div>
                    
                    <div className="tdActionTopSectionCartPage">
                      <button className="removeBtnTopSectionCartPage">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cartFooterTopSectionCartPage">
              <div className="giftNoteTopSectionCartPage">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                <div className="giftNoteTextTopSectionCartPage">
                  <span className="giftNoteTitleTopSectionCartPage">Add a gift note <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                  <span className="giftNoteSubTopSectionCartPage">Make it even more special.</span>
                </div>
              </div>
              <a href="#" className="clearCartLinkTopSectionCartPage">Clear Cart</a>
            </div>
          </div>

          <div className="rightColTopSectionCartPage">
            <div className="summaryBoxTopSectionCartPage">
              <h2 className="summaryTitleTopSectionCartPage">Order Summary</h2>
              
              <div className="summaryRowTopSectionCartPage">
                <span>Subtotal (3 items)</span>
                <span>PKR 16,600</span>
              </div>
              <div className="summaryRowTopSectionCartPage">
                <span>Shipping</span>
                <span>PKR 500</span>
              </div>
              <div className="shippingNoteTopSectionCartPage">Calculated at next step</div>
              
              <div className="summaryDividerTopSectionCartPage"></div>
              
              <div className="summaryTotalRowTopSectionCartPage">
                <span>Total</span>
                <span className="totalPriceTopSectionCartPage">PKR 17,100</span>
              </div>
              <a href="/checkout">
              <button  className="checkoutBtnTopSectionCartPage">
                PROCEED TO CHECKOUT &rarr;
              </button>
              </a>

              <div className="paymentOptionsTopSectionCartPage">
                <span className="paymentTextTopSectionCartPage">Or continue with</span>
                <div className="paymentButtonsTopSectionCartPage">
                  <button className="payBtnTopSectionCartPage">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 21.43c-1.127.534-2.264.84-3.414.84-2.585 0-4.646-1.147-6.044-3.35C5.508 16.71 4.7 13.784 4.7 10.14c0-3.328 1.05-6.05 3.125-8.087C9.362.535 11.458 0 14.114 0c2.404 0 4.382.955 5.86 2.825.864 1.08 1.455 2.502 1.748 4.19-.68-.352-1.425-.562-2.22-.612-1.99-.12-3.834.78-5.074 2.44-1.2 1.6-1.636 3.633-1.18 5.67.24 1.07.72 2.05 1.39 2.86.85.99 1.99 1.74 3.25 2.12-.494.675-1.042 1.325-1.642 1.938zm-6.177-16.14c-1.396 0-2.61.593-3.435 1.632-.824 1.04-1.252 2.37-1.252 3.843 0 1.947.536 3.528 1.625 4.88.943 1.156 2.17 1.838 3.543 2.02.26.035.534.053.805.053 1.317 0 2.557-.48 3.553-1.353 1.05-1.006 1.678-2.508 1.678-4.148 0-1.74-.63-3.265-1.72-4.22-.976-.843-2.193-1.272-3.488-1.272-1.31 0-2.57.433-3.563 1.25-.97.798-1.577 2.13-1.577 3.535 0 .093.004.186.012.28.163-.56.554-1.396 1.453-2.027.842-.596 1.76-.84 2.652-.84.22 0 .445.016.666.05.952.146 1.83.613 2.533 1.32.748.752 1.15 1.867 1.15 3.013 0 1.25-.425 2.4-1.205 3.2-.746.772-1.68 1.247-2.678 1.39-.23.033-.464.048-.696.048-1.135 0-2.222-.435-3.047-1.235-.91-.885-1.425-2.227-1.425-3.69 0-1.5.526-2.906 1.464-3.864.88-.9 2.015-1.408 3.238-1.442.138-.004.278-.005.417.004z"></path></svg>
                  </button>
                  <button className="payBtnTopSectionCartPage">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> 
                    <span style={{marginLeft: '4px', fontSize: '11px', fontWeight: '500'}}>Google</span>
                  </button>
                  <button className="payBtnTopSectionCartPage">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0064e0"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V15.39H7.898v-3.39h2.54V9.672c0-2.511 1.492-3.895 3.777-3.895 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.996h2.773l-.443 3.39h-2.33v6.489C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    <span style={{marginLeft: '4px', fontSize: '11px', fontWeight: '500'}}>Meta</span>
                  </button>
                </div>
              </div>

              <div className="trustFeaturesTopSectionCartPage">
                <div className="trustItemTopSectionCartPage">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                  <div className="trustTextTopSectionCartPage">
                    <span className="trustTitleTopSectionCartPage">Worldwide Shipping</span>
                    <span className="trustDescTopSectionCartPage">Thoughtful gifts, everywhere.</span>
                  </div>
                </div>
                <div className="trustItemTopSectionCartPage">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                  <div className="trustTextTopSectionCartPage">
                    <span className="trustTitleTopSectionCartPage">Secure Checkout</span>
                    <span className="trustDescTopSectionCartPage">Shop with confidence.</span>
                  </div>
                </div>
                <div className="trustItemTopSectionCartPage">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                  <div className="trustTextTopSectionCartPage">
                    <span className="trustTitleTopSectionCartPage">Beautifully Packaged</span>
                    <span className="trustDescTopSectionCartPage">Ready to make an impression.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TopSectionCartPage;