import Hero from '@/Components/Hero/Hero'
import FAQs from '@/Components/FAQs/FAQs'
import OurTeam from '@/Components/OurTeam/OurTeam'
import HeroLanding from './HeroLanding'
import CustomNavbar from './CustomNavbar'
import landingHeroImg from '../../assets/images/landingHeroImg.jpg';
import bgVid from '../../assets/bgvid.mp4';


const Landing = () => {
    return (
        <>
            <div className="bg-cover bg-center min-h-screen">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full z-[-1] h-full object-cover"
                    style={{ height: "calc(100vh + 264px)" }}
                >
                    <source src={bgVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Navbar */}
                <CustomNavbar />

                {/* Hero Section */}
                <HeroLanding />
            </div>

            <div className='relative'>

                {/* FAQ */}
                <FAQs />
            </div>

            <div className="relative bg-cover bg-center">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full z-[-1] h-full object-cover"
                >
                    <source src={bgVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Our team */}
                <div className='relative'>

                    <OurTeam />
                </div>
            </div>



        </>
    )
}

export default Landing