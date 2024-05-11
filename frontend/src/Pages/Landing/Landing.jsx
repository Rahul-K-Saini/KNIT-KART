<<<<<<< HEAD
import React from 'react'
=======
import Hero from '@/Components/Hero/Hero'
>>>>>>> 24d1d6a8e33ed06d9e3ae1a9abb32600bbe794bb
import FAQs from '@/Components/FAQs/FAQs'
import OurTeam from '@/Components/OurTeam/OurTeam'
import HeroLanding from './HeroLanding'
import landingHeroImg from '../../assets/images/landingHeroImg.jpg';


const Landing = () => {
    return (
        <>
            <div className=" bg-cover bg-center" style={{ backgroundImage: `url(${landingHeroImg})` }}>
                {/* Hero Section */}
                <HeroLanding />

                {/* FAQ */}
                <FAQs />

                {/* Our team */}
                <OurTeam />
            </div>
        </>
    )
}

export default Landing