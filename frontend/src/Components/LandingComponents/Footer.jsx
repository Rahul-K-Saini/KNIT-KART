import React from 'react'
import styles from './Footer.module.css'
import { Input } from "../ui/input"
import { Button } from '../ui/button'

const Footer = () => {
    return (
        <>
            <footer className={styles["footer"]}>
                <div className={styles["footer-content"]}>
                    <div className={styles['footer-top']}>
                        <div className={styles["contact-us"]}>
                            <h3>Contact Us</h3>
                            <p>Email: contact@knitkart.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                        <div className={styles["quick-links"]}>
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className={styles["latest-news"]}>
                            <h3>Latest News</h3>
                            <ul>
                                <li><a href="#">New Product Launch</a></li>
                                <li><a href="#">Company Updates</a></li>
                                <li><a href="#">Industry Trends</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["newsletter"]}>
                        <div>
                            <h3>Newsletter Subscription</h3>
                            <p>Subscribe to our newsletter for the latest updates and promotions.</p>
                        </div>
                        <form>
                            <Input type="email" placeholder="Enter your email" />
                            <Button>Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div  className={styles["follow-copyright"]}>
                    <div className={styles["social-media"]}>
                        <h3>Follow Us</h3>
                        <div className={styles["social-icons"]}>
                            <a href="https://github.com/Rahul-K-Saini/KNIT-KART" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt="github" />
                            </a>
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="x" />
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png" alt="facebook" />
                            </a>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/1419/1419647.png" alt="instagram" />
                            </a>
                        </div>
                    </div>
                    <div className={styles["copyright"]}>
                        <p>&copy; 2024 KNIT KART, All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer