import BuyProductPage from '@/Components/BuyProductPage/BuyProductPage'
import ProductPageSlider from '@/Components/BuyProductPage/ProductPageSlider/ProductPageSlider'
import BuyPageSlider from '@/Components/ProductArchivePage/BuyPageSlider/BuyPageSlider'
import FacilitiesSection from '@/Components/ProductArchivePage/FacilitiesSection/FacilitiesSection'
import ItsFeelingLongSection from '@/Components/ProductArchivePage/ItsFeelingLongSection/ItsFeelingLongSection'
import ProductCollectionSection from '@/Components/ProductArchivePage/ProductCollectionSection/ProductCollectionSection'
import TopProductBuySection from '@/Components/ProductArchivePage/TopProductBuySection/TopProductBuySection'
import React from 'react'

function page() {
  return (
    <div>
      
      <BuyPageSlider/>
      <TopProductBuySection/>
      <FacilitiesSection/>
      <ItsFeelingLongSection/>
      <ProductCollectionSection/>
      </div>
  )
}

export default page