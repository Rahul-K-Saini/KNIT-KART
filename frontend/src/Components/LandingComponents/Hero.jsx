import React from 'react'
import { Button } from '../ui/button'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className={styles['header']}>
                <div className={styles["content"]}>
                    <div className={styles['ctr']}>
                        <div>
                            <h1>KNIT Kart</h1>
                        </div>
                        <div>
                            <h2>Welcome to KNIT KART!</h2>
                        </div>
                    </div>
                    <div className={styles['primary-btn']}>
                        <Link to='/entrance'><Button>Get Started</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;