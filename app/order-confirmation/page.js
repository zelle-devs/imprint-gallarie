import OrderConfirmationPage from '@/Components/OrderConfirmationPage/OrderConfirmationPage'
import ODConfirmationPageSlider from '@/Components/ProductArchivePage/BuyPageSlider/ODConfirmationPageSlider/ODConfirmationPageSlider'
import React from 'react'

function page() {
  return (
    <div>
      <ODConfirmationPageSlider/>
      <OrderConfirmationPage/>
      </div>
  )
}

export default page