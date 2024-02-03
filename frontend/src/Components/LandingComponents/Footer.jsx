import React from 'react'
import styles from './Footer.module.css'
import { Input } from "@/components/ui/input"
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
                <div className={styles["social-media"]}>
                    <h3>Follow Us</h3>
                    <div className={styles["social-icons"]}>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className={styles["fab fa-facebook"]}></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className={styles["fab fa-twitter"]}></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className={styles["fab fa-instagram"]}></i>
                        </a>
                    </div>
                </div>
                <div className={styles["copyright"]}>
                    <p>&copy; 2024 KNIT KART, All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer