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