import React from 'react'
import AboutSection from './AboutSection'
import QualitySection from './QualitySection'
import DeliverySection from './DeliverySection'
import TrustCust from './TrustCust'
import FocusSection from './FocusSection'
import TeamSection from './TeamSection'

const About = () => {
  return (
    <div className='container mx-auto lg:px-4  mt-8'>
        <AboutSection />
        <QualitySection />
        <DeliverySection />
        <TrustCust />
        <FocusSection />
        <TeamSection />
    </div>
  )
}

export default About