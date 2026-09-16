import CustomPersonalUnforgettable from '@/Components/BuyProductPage/CustomPersonalUnforgettable/CustomPersonalUnforgettable'
import TopSectionCartPage from '@/Components/CartPageMain/TopSectionCartPage/TopSectionCartPage'
import YouMayAlsoLikeCartMain from '@/Components/CartPageMain/YouMayAlsoLikeCartMain/YouMayAlsoLikeCartMain'
import CartPageSlider from '@/Components/ProductArchivePage/BuyPageSlider/CartPageSlider/CartPageSlider'
import React from 'react'

function page() {
  return (
    <div>
      <CartPageSlider/>
        <TopSectionCartPage/>
        <YouMayAlsoLikeCartMain/>
        <CustomPersonalUnforgettable/>
    </div>
  )
}

export default page