import PrivacyPolicyImprint from '@/Components/PrivacyPolicyImprint/PrivacyPolicyImprint'
import PrivacyPolicySlider from '@/Components/PrivacyPolicyImprint/PrivacyPolicySlider/PrivacyPolicySlider'
import React from 'react'

function page() {
  return (
    <div>
        <PrivacyPolicySlider/>
        <PrivacyPolicyImprint/>
    </div>
  )
}

export default page