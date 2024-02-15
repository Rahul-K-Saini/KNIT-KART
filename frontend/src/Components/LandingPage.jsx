import React from 'react'
import Navbar from './LandingComponents/Navbar';
import Hero from './LandingComponents/Hero';
import Features from './LandingComponents/Features';
import styles from './LandingPage.module.css';
import vid from './media/Background-video.mp4'
import FAQs from './LandingComponents/FAQs';
import Footer from './LandingComponents/Footer';

const LandingPage = () => {
  return (
    <>
      <div className={styles['bg-vid']}>
        <div className={styles['video-container']}>
          <video autoPlay loop muted>
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        <Navbar />
        <Hero />
      </div>
      <Features />
      <FAQs />
      <Footer />
    </>
  );
};



export default LandingPage;
