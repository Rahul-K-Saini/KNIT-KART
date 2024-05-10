import React from 'react'
import Hero from '@/Components/Hero/Hero'
import FAQs from '@/Components/FAQs/FAQs'
import OurTeam from '@/Components/OurTeam/OurTeam'

const Landing = () => {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* FAQ */}
            <FAQs />

            {/* Our team */}
            <OurTeam />
        </>
    )
}

export default Landing