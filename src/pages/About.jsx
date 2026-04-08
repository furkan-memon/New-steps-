import React from 'react'
import AboutSection from '../components/About/AboutSection'
import QualitySection from '../components/About/QualitySection'
import TrustCust from '../components/About/TrustCust'
import PlatformTrust from '../components/About/PlatformTrust'

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