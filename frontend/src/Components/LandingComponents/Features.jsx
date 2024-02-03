import React from 'react'
import styles from './Features.module.css'
const Features = () => {
    return (
        <>
            <div className={styles['feature-section']}>
                <section>
                    <div className={styles['heading']}>
                        <p>FEATURES</p>
                        <h1>Discover the Features</h1>
                    </div>
                    <div className={styles['features']}>
                        <div className={styles['feature']}>
                            <h4>Easy Belonging Exchange</h4>
                            Swap your belongings with others hassle-free

                        </div>
                        <div className={styles['feature']}>
                            <h4>Modern and Professional Design</h4>
                            Enjoy a visually appealing and user-friendly platform

                        </div>
                    </div>
                    <div className={styles['features']}>
                        <div className={styles['feature']}>
                            <h4>Animated Interface</h4>
                            Engage with interactive animations while using the platform

                        </div>
                        <div className={styles['feature']}>
                            <h4>Find the Stuff You Need</h4>
                            Discover and acquire items you require from fellow hostelers
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Features