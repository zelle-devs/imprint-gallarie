"use client"
import React, { useEffect, useState } from 'react'
import './OrderConfirmationPage.css'

const trackerSteps = [
  { key: 'confirmed', label: 'Confirmed', status: 'done' },
  { key: 'packaging', label: 'Packaging', status: 'active' },
  { key: 'delivered', label: 'Delivered', status: 'pending' },
]

function formatCurrency(value) {
  return `PKR ${value.toLocaleString()}`
}

function StepIcon({ status }) {
  if (status === 'done') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (status === 'active') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 6h9.5a2 2 0 012 2v5.5H2V6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M2 6l3-3.5h4.5L12 6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M2 9h11.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 8.2L7 12.5l6.5-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
    </svg>
  )
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8C16.6 4.7 15.6 4.6 14.5 4.6c-2.3 0-3.9 1.4-3.9 4V11H8v3h2.6v7H14z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M3 3l7.5 9L3.5 21H6l6-6.8L17 21h4l-7.8-9.5L20.5 3H18l-5.6 6.3L7.4 3H3z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: 'https://pinterest.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 18c.6-1.7 1.4-4.5 1.9-6.6M12.7 6.3c2.6 0 4.3 1.6 4.3 4 0 2.9-1.5 5.1-3.9 5.1-1 0-1.8-.5-2.1-1.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
]

function OrderSummaryPanel({ order }) {
  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const tax = subtotal * order.taxRate
  const total = subtotal + order.shipping + tax

  return (
    <div className="summaryCardOrderConfirmationPage">
      <div className="summaryHeaderRowOrderConfirmationPage">
        <h2 className="summaryTitleOrderConfirmationPage">Order summary</h2>
        <span className="summaryDateOrderConfirmationPage">{order.placedOn}</span>
      </div>

      <div className="itemListOrderConfirmationPage">
        {order.items.map((item) => (
          <div className="itemRowOrderConfirmationPage" key={item.id}>
            <div className="itemImageWrapOrderConfirmationPage">
              <img className="itemImageOrderConfirmationPage" src={item.image} alt={item.name} />
            </div>
            <div className="itemInfoOrderConfirmationPage">
              <p className="itemNameOrderConfirmationPage">{item.name}</p>
              <p className="itemVariantOrderConfirmationPage">{item.variant}</p>
              <p className="itemQtyOrderConfirmationPage">Qty {item.qty}</p>
            </div>
            <span className="itemPriceOrderConfirmationPage">
              {formatCurrency(item.price * item.qty)}
            </span>
          </div>
        ))}
      </div>

      <hr className="summaryDividerOrderConfirmationPage" />

      <div className="priceListOrderConfirmationPage">
        <div className="priceRowOrderConfirmationPage">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div
          className={
            'priceRowOrderConfirmationPage' +
            (order.shipping === 0 ? ' priceRowFreeOrderConfirmationPage' : '')
          }
        >
          <span>Shipping</span>
          <span>{order.shipping === 0 ? 'Free' : formatCurrency(order.shipping)}</span>
        </div>
        <div className="priceRowOrderConfirmationPage">
          <span>Tax</span>
          <span>{formatCurrency(tax)}</span>
        </div>
      </div>

      <div className="priceRowTotalOrderConfirmationPage">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>

      <hr className="summaryDividerOrderConfirmationPage" />

      <div className="detailBlocksOrderConfirmationPage">
        <div className="detailBlockOrderConfirmationPage">
          <p className="detailLabelOrderConfirmationPage">Shipping to</p>
          <p className="detailTextOrderConfirmationPage">
            <strong>{order.shippingAddress.name}</strong>
            <br />
            {order.shippingAddress.lines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="detailBlockOrderConfirmationPage">
          <p className="detailLabelOrderConfirmationPage">Payment</p>
          <p className="detailTextOrderConfirmationPage">
            <strong>{order.payment.method}</strong>
            <br />
            {order.payment.last4 ? `Ending in ${order.payment.last4}` : ''}
          </p>
        </div>
      </div>
    </div>
  )
}

function OrderConfirmationPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('beyvora_current_order');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return <div style={{ padding: '100px', textAlign: 'center', fontSize: '20px' }}>Loading your order details...</div>;
  }

  return (
    <div className="wrapperOrderConfirmationPage">
      <div className="pageGridOrderConfirmationPage">

        <div className="cardOrderConfirmationPage">

          <div className="brandStripOrderConfirmationPage">
            <span className="brandMarkOrderConfirmationPage">IMPRINT<br/> <span style={{fontSize:'8px', marginTop:'-5px', fontFamily:'var(--font-montserrat)', letterSpacing:'5.5px'}}>GALLERIA</span></span>
            <span className="orderRefOrderConfirmationPage">Order {order.orderNumber}</span>
          </div>

          <div className="heroOrderConfirmationPage">
            <div className="checkCircleOrderConfirmationPage">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  className="checkPathOrderConfirmationPage"
                  d="M9 17.5L14.5 23L25 11"
                  stroke="#FBFAF7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="heroTitleOrderConfirmationPage">Order confirmed</h1>
            <p className="heroSubtitleOrderConfirmationPage">We've got it and we're getting it ready.</p>
          </div>

          <div className="trackerOrderConfirmationPage">
            <div className="trackerRowOrderConfirmationPage">
              <div className="trackerLineTrackOrderConfirmationPage" />
              <div className="trackerLineFillOrderConfirmationPage" />
              {trackerSteps.map((step) => (
                <div className="trackerStepOrderConfirmationPage" key={step.key}>
                  <div
                    className={
                      'stepIconOrderConfirmationPage' +
                      (step.status === 'done' ? ' stepIconDoneOrderConfirmationPage' : '') +
                      (step.status === 'active' ? ' stepIconActiveOrderConfirmationPage' : '')
                    }
                  >
                    <StepIcon status={step.status} />
                  </div>
                  <span
                    className={
                      'stepLabelOrderConfirmationPage' +
                      (step.status !== 'pending' ? ' stepLabelActiveOrderConfirmationPage' : '')
                    }
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="noteOrderConfirmationPage">
            <div className="noteIconWrapOrderConfirmationPage">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 4.5V8l2.5 1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="noteTextOrderConfirmationPage">
              Sit back and relax — your order will arrive in <strong>4 to 5 working days</strong>.
            </p>
          </div>
          
          <OrderSummaryPanel order={order} />
          
          <div className="thanksOrderConfirmationPage">
            <h2 className="thanksTitleOrderConfirmationPage">Thank you for shopping with us</h2>
            <p className="thanksTextOrderConfirmationPage">
              We'll send you an email as soon as your package is on its way.
            </p>
          </div>
                
          <div className="socialRowOrderConfirmationPage">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="socialLinkOrderConfirmationPage"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="actionsOrderConfirmationPage">
            <button className="continueBtnOrderConfirmationPage" type="button" onClick={() => window.location.href = '/'}>
              Continue shopping
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default OrderConfirmationPage