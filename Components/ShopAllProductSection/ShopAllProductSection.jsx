'use client';

import React from 'react';
import './ShopAllProductSection.css';
import productsShopAllProductSection from './ShopAllProductSectionData.jsx';
import { useRouter } from 'next/navigation';
function ShopAllProductSection( ) {
    const router = useRouter();


  return (
    <div className="containerShopAllProductSection">
      <div className="gridShopAllProductSection">
        {productsShopAllProductSection.map((item) => (
          <div key={item.id} className="cardShopAllProductSection"  onClick={() => router.push('/buy-product')} >
            <div className="imageWrapperShopAllProductSection">
              <img src={item.img} alt={item.title} className="productImgShopAllProductSection" />
              <div className="badgeShopAllProductSection">{item.badge}</div>
            </div>
            <div className="contentShopAllProductSection">
              <h3 className="titleShopAllProductSection">{item.title}</h3>
              <p className="brandShopAllProductSection">{item.brand}</p>
              <div className="priceRowShopAllProductSection">
                <p className="oldPriceShopAllProductSection">{item.oldPrice}</p>
                <p className="newPriceShopAllProductSection">{item.newPrice}</p>
              </div>
              <button className="addBtnShopAllProductSection">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopAllProductSection;