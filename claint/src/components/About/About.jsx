import React from 'react'
import AboutSection from './AboutSection'
import QualitySection from './QualitySection'
import TrustCust from './TrustCust'
import PlatformTrust from './PlatformTrust'

const About = () => {
  return (
    <div className=' lg:px-4  mt-8'>
        <AboutSection />
        <QualitySection />
        <TrustCust />
        <PlatformTrust />
    </div>
  )
}

export default About