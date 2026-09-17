"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './CheckoutMainPage.css';
import { useCartCartSidebar } from '@/app/CartContext';

function CheckoutMainPage() {
  const router = useRouter();
  const [shippingMethodCheckoutMainPage, setShippingMethodCheckoutMainPage] = useState('standard');
  const [paymentMethodCheckoutMainPage, setPaymentMethodCheckoutMainPage] = useState('credit');

  // 👇 Form data store karne ke liye state add ki gayi hai
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    province: 'Select Province',
    postalCode: '',
    phone: ''
  });

  const { cartItemsCartSidebar } = useCartCartSidebar();

  const subtotal = cartItemsCartSidebar.reduce(
    (total, item) => total + (item.priceCartSidebar * item.quantityCartSidebar),
    0
  );

  const shippingCost = shippingMethodCheckoutMainPage === 'standard' ? 500 : 1000;

  const total = subtotal > 0 ? subtotal + shippingCost : 0;

  const formatPrice = (val) => `PKR ${val.toLocaleString()}`;

  // 👇 Input fields ka data handle karne ka function
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 👇 Order Place karne ka function jisme saara data save hoga
  const handlePlaceOrder = () => {
    const randomOrderNumber = `BEY-${Math.floor(10000 + Math.random() * 90000)}`;
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const orderData = {
      orderNumber: randomOrderNumber,
      placedOn: currentDate,
      items: cartItemsCartSidebar.map((item) => ({
        id: item.idCartSidebar,
        name: item.titleCartSidebar,
        variant: item.optionsCartSidebar || 'Standard',
        qty: item.quantityCartSidebar,
        price: item.priceCartSidebar,
        image: item.imageCartSidebar
      })),
      shipping: shippingCost,
      taxRate: 0,
      shippingAddress: {
        name: `${formData.firstName} ${formData.lastName}`,
        lines: [
          formData.address,
          formData.apartment ? formData.apartment : '',
          `${formData.city}, ${formData.province} ${formData.postalCode}`,
          'Pakistan'
        ].filter(Boolean)
      },
      payment: {
        method: paymentMethodCheckoutMainPage === 'credit' ? 'Credit / Debit Card' :
                paymentMethodCheckoutMainPage === 'apple' ? 'Apple Pay' :
                paymentMethodCheckoutMainPage === 'google' ? 'Google Pay' : 'Cash on Delivery',
        last4: paymentMethodCheckoutMainPage === 'credit' ? '****' : '' 
      }
    };

    localStorage.setItem('beyvora_current_order', JSON.stringify(orderData));
    
    // 👇 Order Confirmation page par redirect karein
    router.push('/order-confirmation'); 
  };

  return (
    <>
      <div className="pageCheckoutMainPage">
        <div className="containerCheckoutMainPage">

          <div className="leftColCheckoutMainPage">

            <div className="breadcrumbsCheckoutMainPage">
              <span className="crumbCheckoutMainPage">Cart</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              <span className="crumbCheckoutMainPage activeCrumbCheckoutMainPage">Checkout</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              <span className="crumbCheckoutMainPage">Payment</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              <span className="crumbCheckoutMainPage">Order Complete</span>
            </div>

            <div className="headerCheckoutMainPage">
              <h1 className="titleCheckoutMainPage">Checkout</h1>
              <p className="subtitleCheckoutMainPage">Almost yours. Let's make it official.</p>
            </div>

            <div className="formSectionCheckoutMainPage">
              <div className="stepHeaderCheckoutMainPage">
                <div className="stepNumberCheckoutMainPage">1</div>
                <div className="stepTitleWrapperCheckoutMainPage">
                  <h2 className="stepTitleCheckoutMainPage">Contact Information</h2>
                  <p className="stepSubtitleCheckoutMainPage">We'll use this to keep you updated on your order.</p>
                </div>
                <div className="loginLinkCheckoutMainPage">
                  Already have an account? <a href="#">Log in</a>
                </div>
              </div>
              <div className="stepContentCheckoutMainPage">
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address" className="inputCheckoutMainPage fullWidthCheckoutMainPage" />
                <label className="checkboxLabelCheckoutMainPage">
                  <input type="checkbox" className="checkboxCheckoutMainPage" defaultChecked />
                  Email me with news and offers (optional)
                </label>
              </div>
            </div>

            <div className="formSectionCheckoutMainPage">
              <div className="stepHeaderCheckoutMainPage">
                <div className="stepNumberCheckoutMainPage">2</div>
                <div className="stepTitleWrapperCheckoutMainPage">
                  <h2 className="stepTitleCheckoutMainPage">Shipping Address</h2>
                  <p className="stepSubtitleCheckoutMainPage">Where should we send your order?</p>
                </div>
              </div>
              <div className="stepContentCheckoutMainPage gridLayoutCheckoutMainPage">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First name" className="inputCheckoutMainPage halfWidthCheckoutMainPage" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last name" className="inputCheckoutMainPage halfWidthCheckoutMainPage" />
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="inputCheckoutMainPage fullWidthCheckoutMainPage" />
                <input type="text" name="apartment" value={formData.apartment} onChange={handleInputChange} placeholder="Apartment, suite, etc. (optional)" className="inputCheckoutMainPage fullWidthCheckoutMainPage" />
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="inputCheckoutMainPage thirdWidthCheckoutMainPage" />
                <select name="province" value={formData.province} onChange={handleInputChange} className="selectCheckoutMainPage thirdWidthCheckoutMainPage">
                  <option>Select Province</option>
                  <option>Sindh</option>
                  <option>Punjab</option>
                  <option>KPK</option>
                  <option>Balochistan</option>
                </select>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} placeholder="Postal code" className="inputCheckoutMainPage thirdWidthCheckoutMainPage" />
                <select className="selectCheckoutMainPage halfWidthCheckoutMainPage">
                  <option>Pakistan</option>
                </select>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone number" className="inputCheckoutMainPage halfWidthCheckoutMainPage" />
              </div>
            </div>

            <div className="formSectionCheckoutMainPage">
              <div className="stepHeaderCheckoutMainPage">
                <div className="stepNumberCheckoutMainPage">3</div>
                <div className="stepTitleWrapperCheckoutMainPage">
                  <h2 className="stepTitleCheckoutMainPage">Shipping Method</h2>
                  <p className="stepSubtitleCheckoutMainPage">Choose how you'd like to receive your order.</p>
                </div>
              </div>
              <div className="stepContentCheckoutMainPage">
                <div className="radioGroupCheckoutMainPage">
                  <label className={`radioLabelCheckoutMainPage ${shippingMethodCheckoutMainPage === 'standard' ? 'activeRadioCheckoutMainPage' : ''}`}>
                    <div className="radioLeftCheckoutMainPage">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethodCheckoutMainPage === 'standard'}
                        onChange={() => setShippingMethodCheckoutMainPage('standard')}
                        className="radioInputCheckoutMainPage"
                      />
                      <div className="radioTextCheckoutMainPage">
                        <span className="radioTitleCheckoutMainPage">Standard Shipping</span>
                        <span className="radioDescCheckoutMainPage">3-5 business days</span>
                      </div>
                    </div>
                    <span className="radioPriceCheckoutMainPage">PKR 500</span>
                  </label>

                  <label className={`radioLabelCheckoutMainPage ${shippingMethodCheckoutMainPage === 'express' ? 'activeRadioCheckoutMainPage' : ''}`}>
                    <div className="radioLeftCheckoutMainPage">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethodCheckoutMainPage === 'express'}
                        onChange={() => setShippingMethodCheckoutMainPage('express')}
                        className="radioInputCheckoutMainPage"
                      />
                      <div className="radioTextCheckoutMainPage">
                        <span className="radioTitleCheckoutMainPage">Express Shipping</span>
                        <span className="radioDescCheckoutMainPage">1-2 business days</span>
                      </div>
                    </div>
                    <span className="radioPriceCheckoutMainPage">PKR 1,000</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="formSectionCheckoutMainPage">
              <div className="stepHeaderCheckoutMainPage">
                <div className="stepNumberCheckoutMainPage">4</div>
                <div className="stepTitleWrapperCheckoutMainPage">
                  <h2 className="stepTitleCheckoutMainPage">Payment Method</h2>
                  <p className="stepSubtitleCheckoutMainPage">Secure and encrypted payments.</p>
                </div>
              </div>
              <div className="stepContentCheckoutMainPage">
                <div className="paymentGroupCheckoutMainPage">

                  <div className={`paymentOptionCheckoutMainPage ${paymentMethodCheckoutMainPage === 'credit' ? 'activePaymentCheckoutMainPage' : ''}`}>
                    <label className="paymentLabelCheckoutMainPage">
                      <div className="paymentLabelLeftCheckoutMainPage">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethodCheckoutMainPage === 'credit'}
                          onChange={() => setPaymentMethodCheckoutMainPage('credit')}
                          className="radioInputCheckoutMainPage"
                        />
                        <span className="paymentTitleCheckoutMainPage">Credit / Debit Card</span>
                      </div>
                      <div className="paymentIconsCheckoutMainPage">
                        <span className="cardIconTextCheckoutMainPage visaCheckoutMainPage">VISA</span>
                        <div className="cardIconCircleCheckoutMainPage mastercard1CheckoutMainPage"></div>
                        <div className="cardIconCircleCheckoutMainPage mastercard2CheckoutMainPage"></div>
                        <span className="cardIconTextCheckoutMainPage amexCheckoutMainPage">AMEX</span>
                      </div>
                    </label>

                    {paymentMethodCheckoutMainPage === 'credit' && (
                      <div className="creditCardFormCheckoutMainPage">
                        <div className="inputWithIconCheckoutMainPage fullWidthCheckoutMainPage">
                          <input type="text" placeholder="Card number" className="inputCheckoutMainPage" />
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inputIconCheckoutMainPage"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        </div>
                        <div className="cardSplitCheckoutMainPage">
                          <input type="text" placeholder="MM / YY" className="inputCheckoutMainPage halfWidthCheckoutMainPage" />
                          <div className="inputWithIconCheckoutMainPage halfWidthCheckoutMainPage">
                            <input type="text" placeholder="CVV" className="inputCheckoutMainPage" />
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inputIconCheckoutMainPage"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <label className={`paymentLabelCheckoutMainPage borderTopCheckoutMainPage ${paymentMethodCheckoutMainPage === 'apple' ? 'activePaymentLabelCheckoutMainPage' : ''}`}>
                    <div className="paymentLabelLeftCheckoutMainPage">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethodCheckoutMainPage === 'apple'}
                        onChange={() => setPaymentMethodCheckoutMainPage('apple')}
                        className="radioInputCheckoutMainPage"
                      />
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 21.43c-1.127.534-2.264.84-3.414.84-2.585 0-4.646-1.147-6.044-3.35C5.508 16.71 4.7 13.784 4.7 10.14c0-3.328 1.05-6.05 3.125-8.087C9.362.535 11.458 0 14.114 0c2.404 0 4.382.955 5.86 2.825.864 1.08 1.455 2.502 1.748 4.19-.68-.352-1.425-.562-2.22-.612-1.99-.12-3.834.78-5.074 2.44-1.2 1.6-1.636 3.633-1.18 5.67.24 1.07.72 2.05 1.39 2.86.85.99 1.99 1.74 3.25 2.12-.494.675-1.042 1.325-1.642 1.938zm-6.177-16.14c-1.396 0-2.61.593-3.435 1.632-.824 1.04-1.252 2.37-1.252 3.843 0 1.947.536 3.528 1.625 4.88.943 1.156 2.17 1.838 3.543 2.02.26.035.534.053.805.053 1.317 0 2.557-.48 3.553-1.353 1.05-1.006 1.678-2.508 1.678-4.148 0-1.74-.63-3.265-1.72-4.22-.976-.843-2.193-1.272-3.488-1.272-1.31 0-2.57.433-3.563 1.25-.97.798-1.577 2.13-1.577 3.535 0 .093.004.186.012.28.163-.56.554-1.396 1.453-2.027.842-.596 1.76-.84 2.652-.84.22 0 .445.016.666.05.952.146 1.83.613 2.533 1.32.748.752 1.15 1.867 1.15 3.013 0 1.25-.425 2.4-1.205 3.2-.746.772-1.68 1.247-2.678 1.39-.23.033-.464.048-.696.048-1.135 0-2.222-.435-3.047-1.235-.91-.885-1.425-2.227-1.425-3.69 0-1.5.526-2.906 1.464-3.864.88-.9 2.015-1.408 3.238-1.442.138-.004.278-.005.417.004z"></path></svg>
                      <span className="paymentTitleCheckoutMainPage">Apple Pay</span>
                    </div>
                  </label>

                  <label className={`paymentLabelCheckoutMainPage borderTopCheckoutMainPage ${paymentMethodCheckoutMainPage === 'google' ? 'activePaymentLabelCheckoutMainPage' : ''}`}>
                    <div className="paymentLabelLeftCheckoutMainPage">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethodCheckoutMainPage === 'google'}
                        onChange={() => setPaymentMethodCheckoutMainPage('google')}
                        className="radioInputCheckoutMainPage"
                      />
                      <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      <span className="paymentTitleCheckoutMainPage">Google Pay</span>
                    </div>
                  </label>

                  <label className={`paymentLabelCheckoutMainPage borderTopCheckoutMainPage ${paymentMethodCheckoutMainPage === 'cod' ? 'activePaymentLabelCheckoutMainPage' : ''}`}>
                    <div className="paymentLabelLeftCheckoutMainPage">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethodCheckoutMainPage === 'cod'}
                        onChange={() => setPaymentMethodCheckoutMainPage('cod')}
                        className="radioInputCheckoutMainPage"
                      />
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
                      <span className="paymentTitleCheckoutMainPage">Cash on Delivery</span>
                    </div>
                  </label>

                </div>
              </div>
            </div>

            <button 
              className="placeOrderBtnCheckoutMainPage" 
              onClick={handlePlaceOrder}
              disabled={cartItemsCartSidebar.length === 0}
            >
              PLACE ORDER &rarr;
            </button>

          </div>

          <div className="rightColCheckoutMainPage">

            <div className="summaryHeaderCheckoutMainPage">
              <h2 className="summaryTitleCheckoutMainPage">Order Summary</h2>
              <a href="/cart" className="editCartLinkCheckoutMainPage">Edit Cart</a>
            </div>

            <div className="summaryItemsCheckoutMainPage">
              {cartItemsCartSidebar.length === 0 ? (
                <div style={{ padding: '20px 0', color: '#666' }}>Your cart is empty.</div>
              ) : (
                cartItemsCartSidebar.map((item) => (
                  <div key={item.idCartSidebar} className="summaryItemCheckoutMainPage">
                    <div className="summaryItemLeftCheckoutMainPage">
                      <div className="summaryImgWrapperCheckoutMainPage">
                        <img src={item.imageCartSidebar} alt={item.titleCartSidebar} className="summaryImgCheckoutMainPage" />
                      </div>
                      <div className="summaryItemInfoCheckoutMainPage">
                        <span className="summaryItemNameCheckoutMainPage">{item.titleCartSidebar}</span>
                        <span className="summaryItemTypeCheckoutMainPage">{item.type || 'Product'}</span>
                        {item.optionsCartSidebar && (
                          <span className="summaryItemDescCheckoutMainPage">{item.optionsCartSidebar}</span>
                        )}
                      </div>
                    </div>
                    <div className="summaryItemRightCheckoutMainPage">
                      <span className="summaryItemQtyCheckoutMainPage">Qty: {item.quantityCartSidebar}</span>
                      <span className="summaryItemPriceCheckoutMainPage">
                        {formatPrice(item.priceCartSidebar * item.quantityCartSidebar)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="summaryCalculationsCheckoutMainPage">
              <div className="calcRowCheckoutMainPage">
                <span className="calcLabelCheckoutMainPage">Subtotal</span>
                <span className="calcValueCheckoutMainPage">{formatPrice(subtotal)}</span>
              </div>
              <div className="calcRowCheckoutMainPage">
                <span className="calcLabelCheckoutMainPage">Shipping</span>
                <span className="calcValueCheckoutMainPage">{formatPrice(shippingCost)}</span>
              </div>
            </div>

            <div className="totalRowCheckoutMainPage">
              <span className="totalLabelCheckoutMainPage">Total</span>
              <div className="totalRightCheckoutMainPage">
                <span className="totalValueCheckoutMainPage">{formatPrice(total)}</span>
                <span className="taxNoteCheckoutMainPage">(including applicable taxes)</span>
              </div>
            </div>

            <div className="discountBoxCheckoutMainPage">
              <input type="text" placeholder="Discount code (optional)" className="discountInputCheckoutMainPage" />
              <button className="discountBtnCheckoutMainPage">Apply</button>
            </div>

            <div className="trustFeaturesCheckoutMainPage">
              <div className="trustItemCheckoutMainPage">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                <div className="trustTextCheckoutMainPage">
                  <span className="trustTitleCheckoutMainPage">Secure Checkout</span>
                  <span className="trustDescCheckoutMainPage">Your information is safe with us.</span>
                </div>
              </div>
              <div className="trustItemCheckoutMainPage">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <div className="trustTextCheckoutMainPage">
                  <span className="trustTitleCheckoutMainPage">Worldwide Shipping</span>
                  <span className="trustDescCheckoutMainPage">Thoughtful gifts, everywhere.</span>
                </div>
              </div>
              <div className="trustItemCheckoutMainPage">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                <div className="trustTextCheckoutMainPage">
                  <span className="trustTitleCheckoutMainPage">Beautifully Packaged</span>
                  <span className="trustDescCheckoutMainPage">Ready to make an impression.</span>
                </div>
              </div>
            </div>

            <div className="promoImageWrapperCheckoutMainPage">
              {/* 👇 Image updated specific to new website */}
              <img src="/artformorehomeimage.png" alt="beyvora Box" className="promoImgCheckoutMainPage" />
              <div className="promoCardCheckoutMainPage">
                Good<br />Things<br />Carry<br />Meaning.
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  );
}

export default CheckoutMainPage;