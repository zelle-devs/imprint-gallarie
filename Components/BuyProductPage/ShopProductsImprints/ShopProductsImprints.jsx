"use client"

import React from 'react';
import './ShopProductsImprints.css';
import { useRouter } from 'next/navigation';
function ShopProductsImprints() {
    const router = useRouter();
  const productsShopProductsImprints = [
    {
      id: 1,
      title: "Midnight Marble",
      type: "Customizable Phone Case",
      price: "$ 65",
      colors: ["#D9C8B2", "#2A2A2A", "#555555"],
      img: "/PhoneCaseProduct1.jpg"
    },
    {
      id: 2,
      title: "Forest Green Leather",
      type: "Customizable Phone Case",
      price: "$ 65",
      colors: ["#2C3E35", "#A67C52", "#2A2A2A"],
      img: "/PhoneCaseProduct2.jpg"
    },
    {
      id: 3,
      title: "Contour",
      type: "Customizable Phone Case",
      price: "$ 65",
      colors: ["#2A2A2A", "#D9C8B2", "#D3D3D3"],
      img: "/PhoneCaseProduct3.jpg"
    },
    {
      id: 4,
      title: "Classic Sand",
      type: "Customizable Phone Case",
      price: "$ 65",
      colors: ["#E7DCC5", "#D9C8B2", "#2A2A2A"],
      img: "/PhoneCaseProduct4.jpg"
    },
    {
      id: 5,
      title: "Signature Black",
      type: "Customizable Phone Case",
      price: "$ 65",
      colors: ["#2A2A2A", "#1C2841", "#A67C52"],
      img: "/PhoneCaseProduct5.jpg"
    },
    {
      id: 6,
      title: "Vintage Brown",
      type: "Customizable Phone Case",
      price: "$ 65",
      colors: ["#8B5A2B", "#D9C8B2", "#2A2A2A"],
      img: "/PhoneCaseProduct6.jpg"
    }
  ];

  return (
    <div className="containerShopProductsImprints">
      <div className="gridShopProductsImprints">
        {productsShopProductsImprints.map((product) => (
          <div key={product.id} className="cardShopProductsImprints" onClick={() => router.push('/buy-product')}>
            
            <div className="imageWrapperShopProductsImprints">
              <img src={product.img} alt={product.title} className="productImgShopProductsImprints" />
              <button className="heartBtnShopProductsImprints">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            <div className="detailsShopProductsImprints">
              <h3 className="titleShopProductsImprints">{product.title}</h3>
              <p className="typeShopProductsImprints">{product.type}</p>
              <p className="priceShopProductsImprints">{product.price}</p>
              
              <div className="swatchesShopProductsImprints">
                {product.colors.map((color, index) => (
                  <span 
                    key={index} 
                    className="swatchCircleShopProductsImprints" 
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>

            <button className="addToCartBtnShopProductsImprints">
              ADD TO CART
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopProductsImprints;