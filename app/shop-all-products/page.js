import CustomPersonalUnforgettable from '@/Components/BuyProductPage/CustomPersonalUnforgettable/CustomPersonalUnforgettable'
import ProductPageSlider from '@/Components/BuyProductPage/ProductPageSlider/ProductPageSlider'
import ShopProductsImprints from '@/Components/BuyProductPage/ShopProductsImprints/ShopProductsImprints'
import ShopAllProductSection from '@/Components/ShopAllProductSection/ShopAllProductSection'
import React from 'react'

function page() {
  return (
    <div>
      <ProductPageSlider/>
      {/* <ShopAllProductSection/> */}
      <ShopProductsImprints/>
      <CustomPersonalUnforgettable/>
      </div>
  )
}

export default page