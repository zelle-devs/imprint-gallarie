import BuyProductPage from '@/Components/BuyProductPage/BuyProductPage'
import FacilitiesSection from '@/Components/ProductArchivePage/FacilitiesSection/FacilitiesSection'
import ItsFeelingLongSection from '@/Components/ProductArchivePage/ItsFeelingLongSection/ItsFeelingLongSection'
import ProductCollectionSection from '@/Components/ProductArchivePage/ProductCollectionSection/ProductCollectionSection'
import TopProductBuySection from '@/Components/ProductArchivePage/TopProductBuySection/TopProductBuySection'
import React from 'react'

function page() {
  return (
    <div>
      
      {/* <BuyProductPage/> */}
      <TopProductBuySection/>
      <FacilitiesSection/>
      <ItsFeelingLongSection/>
      <ProductCollectionSection/>
      </div>
  )
}

export default page