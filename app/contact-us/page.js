"use client"
import ContactUsPageContent from '@/Components/ContactUsPageComp/ContactUsPageContent/ContactUsPageContent'
import ContactUsPageSlider from '@/Components/ContactUsPageComp/ContactUsPageSlider/ContactUsPageSlider'
import React from 'react'

function page() {
  return (
    <div >
        <ContactUsPageSlider/>
        <ContactUsPageContent/>
    </div>
  )
}

export default page