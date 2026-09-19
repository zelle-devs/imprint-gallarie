import ContactUsPageSlider from '@/Components/ContactUsPageComp/ContactUsPageSlider/ContactUsPageSlider'
import PrivacyPolicySlider from '@/Components/PrivacyPolicyImprint/PrivacyPolicySlider/PrivacyPolicySlider'
import TermsAndConditionsImprint from '@/Components/TermsAndConditionsImprint/TermsAndConditionsImprint'
import React from 'react'

function page() {
  return (
    <div><PrivacyPolicySlider/>
        <TermsAndConditionsImprint/>
        </div>
  )
}

export default page