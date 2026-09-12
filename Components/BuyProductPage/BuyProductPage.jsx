"use client"
import React, { useState, useRef } from 'react';
import './BuyProductPage.css';
import { CheckCircle, CircleCheck } from 'lucide-react';

const sliderImagesBuyProductPage = [
    './PorductPageBuy1.jpg',
    './PorductPageBuy2.jpg',
    './PorductPageBuy3.jpg',
];
const avatarImagesBuyProductPage = [
    'https://i.pravatar.cc/48?img=12',
    'https://i.pravatar.cc/48?img=32',
    'https://i.pravatar.cc/48?img=45',
];

function BuyProductPage() {
    const [quantityBuyProductPage, setQuantityBuyProductPage] = useState(1);
    const [timeLeftBuyProductPage, setTimeLeftBuyProductPage] = useState(70113);
    const [currentSlideBuyProductPage, setCurrentSlideBuyProductPage] = useState(0);
    
    const touchStartXRef = useRef(0);
    const touchDeltaXRef = useRef(0);
    const isDraggingRef = useRef(false);
    const mouseStartXRef = useRef(0);
    const mouseDeltaXRef = useRef(0);
    const isMouseDownRef = useRef(false);

    React.useEffect(() => {
        const timerBuyProductPage = setInterval(() => {
            setTimeLeftBuyProductPage((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timerBuyProductPage);
    }, []);

    const formatTimeBuyProductPage = (totalSeconds) => {
        const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    };

    const decreaseQuantityBuyProductPage = () => {
        setQuantityBuyProductPage((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const increaseQuantityBuyProductPage = () => {
        setQuantityBuyProductPage((prev) => prev + 1);
    };

    const goToSlideBuyProductPage = (index) => {
        const lastIndex = sliderImagesBuyProductPage.length - 1;
        if (index < 0) index = 0;
        if (index > lastIndex) index = lastIndex;
        setCurrentSlideBuyProductPage(index);
    };

    const handleTouchStartBuyProductPage = (e) => {
        touchStartXRef.current = e.touches[0].clientX;
        touchDeltaXRef.current = 0;
        isDraggingRef.current = true;
    };

    const handleTouchMoveBuyProductPage = (e) => {
        if (!isDraggingRef.current) return;
        touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
    };

    const handleTouchEndBuyProductPage = () => {
        if (!isDraggingRef.current) return;
        const threshold = 50;
        if (touchDeltaXRef.current < -threshold) {
            goToSlideBuyProductPage(currentSlideBuyProductPage + 1);
        } else if (touchDeltaXRef.current > threshold) {
            goToSlideBuyProductPage(currentSlideBuyProductPage - 1);
        }
        touchDeltaXRef.current = 0;
        isDraggingRef.current = false;
    };

    const handleMouseDownBuyProductPage = (e) => {
        mouseStartXRef.current = e.clientX;
        mouseDeltaXRef.current = 0;
        isMouseDownRef.current = true;
    };

    const handleMouseMoveBuyProductPage = (e) => {
        if (!isMouseDownRef.current) return;
        mouseDeltaXRef.current = e.clientX - mouseStartXRef.current;
    };

    const handleMouseUpBuyProductPage = () => {
        if (!isMouseDownRef.current) return;
        const threshold = 50;
        if (mouseDeltaXRef.current < -threshold) {
            goToSlideBuyProductPage(currentSlideBuyProductPage + 1);
        } else if (mouseDeltaXRef.current > threshold) {
            goToSlideBuyProductPage(currentSlideBuyProductPage - 1);
        }
        mouseDeltaXRef.current = 0;
        isMouseDownRef.current = false;
    };

    return (
        <div className="pageWrapperBuyProductPage">
            <div className="topSectionBuyProductPage">
                <div className="gallerySectionBuyProductPage">
                    <div className="galleryRowBuyProductPage">
                        <div className="verticalThumbColumnBuyProductPage">
                            {sliderImagesBuyProductPage.map((imgSrc, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    className={`verticalThumbItemBuyProductPage${currentSlideBuyProductPage === index ? ' verticalThumbActiveBuyProductPage' : ''}`}
                                    onClick={() => goToSlideBuyProductPage(index)}
                                    aria-label={`View image ${index + 1}`}
                                >
                                    <img
                                        src={imgSrc}
                                        alt={`Batman wall art view ${index + 1}`}
                                        className="verticalThumbImageBuyProductPage"
                                        draggable={false}
                                    />
                                </button>
                            ))}
                        </div>

                        <div className="mainImageWrapperBuyProductPage">
                            <div
                                className="sliderTrackBuyProductPage"
                                style={{
                                    transform: `translateX(-${currentSlideBuyProductPage * 100}%)`,
                                }}
                                onTouchStart={handleTouchStartBuyProductPage}
                                onTouchMove={handleTouchMoveBuyProductPage}
                                onTouchEnd={handleTouchEndBuyProductPage}
                                onMouseDown={handleMouseDownBuyProductPage}
                                onMouseMove={handleMouseMoveBuyProductPage}
                                onMouseUp={handleMouseUpBuyProductPage}
                                onMouseLeave={handleMouseUpBuyProductPage}
                            >
                                {sliderImagesBuyProductPage.map((imgSrc, index) => (
                                    <div className="sliderSlideBuyProductPage" key={index}>
                                        <img
                                            src={imgSrc}
                                            alt="Batman wall art displayed in living room"
                                            className="mainImageBuyProductPage"
                                            draggable={false}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                type="button"
                                className="sliderArrowBuyProductPage sliderArrowPrevBuyProductPage"
                                onClick={() => goToSlideBuyProductPage(currentSlideBuyProductPage - 1)}
                                disabled={currentSlideBuyProductPage === 0}
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                className="sliderArrowBuyProductPage sliderArrowNextBuyProductPage"
                                onClick={() => goToSlideBuyProductPage(currentSlideBuyProductPage + 1)}
                                disabled={currentSlideBuyProductPage === sliderImagesBuyProductPage.length - 1}
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>

                <div className="detailsSectionBuyProductPage">
                    <div className="ratingRowBuyProductPage">
                        <span className="starsBuyProductPage">★★★★★</span>
                        <span className="ratingTextBuyProductPage">4.8 From 136 Reviews</span>
                    </div>

                    <h1 className="productTitleBuyProductPage">Premium Artistic Handpainted Wall Decor</h1>

                    <div className="priceRowBuyProductPage">
                        <span className="oldPriceBuyProductPage">Rs. 39,999.00</span>
                        <span className="newPriceBuyProductPage">Rs. 24,999.00</span>
                        <span className="discountBadgeBuyProductPage">- 37%</span>
                    </div>

                    <p className="stockTextBuyProductPage">HURRY UP! ONLY 4 ITEMS ARE IN STOCK.</p>

                    <div className="dividerBuyProductPage"></div>

                    <div className="badgeRowBuyProductPage">
                        <div className="badgeBoxBuyProductPage">
                            <span className="badgeIconBuyProductPage"><CircleCheck size={30} /></span>
                            <div className="badgeTextGroupBuyProductPage">
                                <span className="badgeTitleBuyProductPage">Free Shipping</span>
                                <span className="badgeSubBuyProductPage">All Over Pakistan Delivery</span>
                            </div>
                        </div>
                        <div className="badgeBoxBuyProductPage">
                            <span className="badgeIconBuyProductPage"><CircleCheck size={30} /></span>
                            <div className="badgeTextGroupBuyProductPage">
                                <span className="badgeTitleBuyProductPage">COD Available</span>
                                <span className="badgeSubBuyProductPage">Prepaid Payments</span>
                            </div>
                        </div>
                    </div>

                    <div className="avatarRowBuyProductPage">
                        <div className="avatarStackBuyProductPage">
                            {avatarImagesBuyProductPage.map((imgSrc, index) => (
                                <img
                                    src={imgSrc}
                                    alt="Customer avatar"
                                    className="avatarImageBuyProductPage"
                                    key={index}
                                />
                            ))}
                        </div>
                        <span className="avatarTextBuyProductPage">
                            Ar. Riaan and more than 250+ customers already purchased
                        </span>
                    </div>

                    <div className="paymentRowBuyProductPage">
                        <span className="paymentBadgeBuyProductPage visaBadgeBuyProductPage">VISA</span>
                        <span className="paymentBadgeBuyProductPage mastercardBadgeBuyProductPage">
                            <span className="mcCircleOneBuyProductPage"></span>
                            <span className="mcCircleTwoBuyProductPage"></span>
                        </span>
                        <span className="paymentBadgeBuyProductPage paypalBadgeBuyProductPage">PayPal</span>
                        <span className="paymentBadgeBuyProductPage applePayBadgeBuyProductPage">Pay</span>
                        <span className="paymentBadgeBuyProductPage shopBadgeBuyProductPage">shop</span>
                        <span className="paymentBadgeBuyProductPage gpayBadgeBuyProductPage">GPay</span>
                    </div>
                    <div className="quantitySectionBuyProductPage">
                        <div>
                            <span className="quantityLabelBuyProductPage">Quantity</span>
                            <div className="quantityBoxBuyProductPage">
                                <button
                                    type="button"
                                    className="quantityBtnBuyProductPage"
                                    onClick={decreaseQuantityBuyProductPage}
                                >
                                    −
                                </button>
                                <span className="quantityValueBuyProductPage">{quantityBuyProductPage}</span>
                                <button
                                    type="button"
                                    className="quantityBtnBuyProductPage"
                                    onClick={increaseQuantityBuyProductPage}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='addtocartbuttonbuyproductpagemain'>
                            <button type="button" className="addToCartBtnBuyProductPage">
                                ADD TO CART
                            </button>
                        </div>
                    </div>

                    <button type="button" className="buyNowBtnBuyProductPage">
                        BUY IT NOW
                    </button>

                    <div className="pickupRowBuyProductPage">
                        <span className="pickupIconBuyProductPage">✓</span>
                        <span className="pickupTextBuyProductPage">
                            Pickup available at B-32/2 Wazirpur Industrial Area First Floor
                            <br />
                            Usually ready in 24 hours
                            <br />
                            <a href="#" className="viewStoreLinkBuyProductPage">
                                View store information
                            </a>
                        </span>
                    </div>

                    <div className="featureRowBuyProductPage">
                        <span className="featurePillBuyProductPage">
                            <span className="featureIconBuyProductPage">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-accordion icon-truck"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M0 3.752c0-.277.224-.502.5-.502h10.147a.5.5 0 0 1 .5.502v9.91l-.595 1.003H7.223V13.66h2.923V4.253H1.002v9.408h1.682v1.004H.501A.5.5 0 0 1 0 14.163zm18.999 4.332-7.851-1.975V5.075l8.473 2.131a.5.5 0 0 1 .379.487v6.47a.5.5 0 0 1-.5.502h-2.193v-1.003H19zM11.148 13.662h2.196v1.003h-2.792z" />
                                    <path d="M7.713 14.185a2.56 2.56 0 0 1-2.56 2.565 2.56 2.56 0 0 1-2.56-2.565 2.56 2.56 0 0 1 2.56-2.564 2.56 2.56 0 0 1 2.56 2.564m-2.56 1.562a1.56 1.56 0 0 0 1.558-1.562 1.56 1.56 0 0 0-1.559-1.56 1.56 1.56 0 0 0-1.558 1.56 1.56 1.56 0 0 0 1.558 1.562m12.368-1.562a2.56 2.56 0 1 1-5.12 0 2.56 2.56 0 0 1 5.12 0m-2.56 1.562a1.56 1.56 0 1 0 0-3.122 1.56 1.56 0 0 0 0 3.122" />
                                </svg>
                                <span>Fast Shipping</span>
                            </span>
                            <span className="featurePillBuyProductPage">
                                <span className="featureIconBuyProductPage">
                                    <div>

                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-accordion icon-chat-bubble"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M5.8 10.243a1 1 0 1 1 2 0 1 1 0 0 1-2 0M9.23 10.243a1 1 0 1 1 2 0 1 1 0 0 1-2 0M12.66 10.243a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />

                                        <path
                                            fillRule="evenodd"
                                            d="m16.645 17.204-.008-.004a19 19 0 0 1-.767-.423c-.645-.367-1.263-.72-1.442-.598a7.472 7.472 0 1 1 2.05-2.082c-.134.202.192.843.533 1.513.147.29.297.584.414.85l.006.014c.193.443.293.808.136.944-.128.136-.488.006-.922-.214m1.614.936c-.38.372-.857.345-1.046.321a2.5 2.5 0 0 1-.626-.181 11 11 0 0 1-1.081-.56l-.132-.074c-.29-.166-.538-.307-.744-.408a8.472 8.472 0 1 1 2.877-2.902l.008.02c.092.22.226.483.385.795l.084.165c.178.353.388.774.516 1.146.063.225-.02.668-.384 1.009"
                                        />
                                    </svg>
                                    <span>24/7 support</span>
                                </span>
                            </span>
                            <span className="featurePillBuyProductPage">
                                <span className="featureIconBuyProductPage">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-accordion icon-return"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M11.571 1.059c0-.309.249-.559.556-.559h1.33C17.07.5 20 3.453 20 7.09s-2.93 6.589-6.543 6.589L1.9 13.71l-.591-.59.59-.572 11.558.013c2.997 0 5.432-2.451 5.432-5.472 0-3.02-2.435-5.471-5.432-5.471h-1.33a.557.557 0 0 1-.556-.56" />

                                        <path d="M6.003 7.007a.553.553 0 0 1 .786.011.56.56 0 0 1-.012.79zM1.31 13.12l5.43 5.426a.56.56 0 0 1 0 .79.553.553 0 0 1-.785 0L.162 13.503a.56.56 0 0 1 .007-.796l3.035-2.965 2.8-2.735.773.801-2.798 2.736c-1.025 1-2.108 2.027-2.67 2.576" />
                                    </svg>
                                    <span>Free Exchange</span>
                                </span>
                            </span>
                        </span>
                    </div>

                    <div className="deliveryRowBuyProductPage">
                        <div className="deliveryBoxBuyProductPage">
                            <span className="deliveryIconBuyProductPage"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62177 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62177 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62177 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62177 2.75 7.91356 2.75159 6.61358 2.92637ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.8358 12.8964C11.5468 12.6074 11.4022 12.4629 11.3261 12.2791C11.25 12.0954 11.25 11.891 11.25 11.4822V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="currentColor"></path>
                            </svg></span>
                            <div className="deliveryTextGroupBuyProductPage">
                                <span className="deliveryLabelBuyProductPage">Order in</span>
                                <span className="deliveryValueBuyProductPage">
                                    {formatTimeBuyProductPage(timeLeftBuyProductPage)}
                                </span>
                            </div>
                        </div>
                        <span className="deliveryArrowBuyProductPage">→</span>
                        <div className="deliveryBoxBuyProductPage">
                            <span className="deliveryIconBuyProductPage"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="26px" height="26px" viewBox="0 0 35 35" data-name="Layer 2" id="a866a81f-2948-4418-8bd5-1a5193c5f74e"><path d="M29.545,34.75H5.455a5.211,5.211,0,0,1-5.2-5.2V8.56a5.21,5.21,0,0,1,5.205-5.2h24.09a5.21,5.21,0,0,1,5.2,5.205V29.545A5.211,5.211,0,0,1,29.545,34.75ZM5.455,5.855A2.708,2.708,0,0,0,2.75,8.56V29.545a2.709,2.709,0,0,0,2.705,2.7h24.09a2.708,2.708,0,0,0,2.7-2.7V8.56a2.707,2.707,0,0,0-2.7-2.7Z"></path><path d="M33.5,17.331H1.541a1.25,1.25,0,0,1,0-2.5H33.5a1.25,1.25,0,0,1,0,2.5Z"></path><path d="M9.459,9.155a1.249,1.249,0,0,1-1.25-1.25V1.5a1.25,1.25,0,0,1,2.5,0V7.905A1.25,1.25,0,0,1,9.459,9.155Z"></path><path d="M25.542,9.155a1.249,1.249,0,0,1-1.25-1.25V1.5a1.25,1.25,0,0,1,2.5,0V7.905A1.25,1.25,0,0,1,25.542,9.155Z"></path></svg></span>
                            <div className="deliveryTextGroupBuyProductPage">
                                <span className="deliveryLabelBuyProductPage">Delivers</span>
                                <span className="deliveryValueBuyProductPage">Tuesday</span>
                            </div>
                        </div>
                    </div>

                    <div className="safeDeliveryCardBuyProductPage">
                        <span className="safeDeliveryIconBuyProductPage"><CircleCheck size={80} /></span>
                        <div className="safeDeliveryTextGroupBuyProductPage">
                            <h3 className="safeDeliveryTitleBuyProductPage">Safe Delivery Promise</h3>
                            <p className="safeDeliveryDescBuyProductPage">
                                If your item arrives damaged or defective, we'll replace it — no questions asked.
                            </p>
                        </div>
                    </div>

                    <div className="qualityCardBuyProductPage">
                        <div className="qualityHeaderBuyProductPage">
                            <h4 className="qualityTitleBuyProductPage">Good Quality</h4>
                            <div className="qualityNavBuyProductPage">
                                <button type="button" className="qualityNavBtnBuyProductPage">
                                    ‹
                                </button>
                                <button type="button" className="qualityNavBtnBuyProductPage">
                                    ›
                                </button>
                            </div>
                        </div>
                        <p className="qualityTextBuyProductPage">
                            Beautifully crafted with attention to detail. ★★★★★
                        </p>
                    </div>
                </div>
            </div>

            <div className="descriptionSectionBuyProductPage">
                <div className="descriptionInnerBuyProductPage">
                    <p className="descriptionParaBuyProductPage">
                        Elevate your living space with our Quirky LED Wall Art, a unique blend of
                        contemporary design and functional lighting. This standout piece features a
                        vibrant, futuristic print brought to life with integrated neon LED lights that
                        seamlessly accentuate the design. Ideal for homes that embrace creativity and
                        individuality, this artwork transforms any room into a stylish sanctuary.
                    </p>
                    <p className="descriptionParaBuyProductPage">
                        Whether you're curating a gallery wall or looking for a single statement piece,
                        this LED wall art effortlessly fits the bill. Crafted with precision, this piece
                        merges art and technology, appealing to modern home decor enthusiasts. Its
                        lightweight construction ensures easy mounting, while the energy-efficient LED
                        lighting adds a soft glow to your interiors without consuming excess power.
                    </p>

                    <div className="specGroupBuyProductPage">
                        <h4 className="specHeadingBuyProductPage">Dimension</h4>
                        <p className="specValueBuyProductPage">Height : 48" &nbsp;&nbsp; Length : 32" &nbsp;&nbsp; Width : 2"</p>
                    </div>

                    <div className="specGroupBuyProductPage">
                        <h4 className="specHeadingBuyProductPage">Material</h4>
                        <p className="specValueBuyProductPage">MDF with Metal Framing and LED Light</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyProductPage;