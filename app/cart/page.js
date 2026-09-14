import CustomPersonalUnforgettable from '@/Components/BuyProductPage/CustomPersonalUnforgettable/CustomPersonalUnforgettable'
import TopSectionCartPage from '@/Components/CartPageMain/TopSectionCartPage/TopSectionCartPage'
import YouMayAlsoLikeCartMain from '@/Components/CartPageMain/YouMayAlsoLikeCartMain/YouMayAlsoLikeCartMain'
import React from 'react'

function page() {
  return (
    <div>
        <TopSectionCartPage/>
        <YouMayAlsoLikeCartMain/>
        <CustomPersonalUnforgettable/>
    </div>
  )
}

export default page