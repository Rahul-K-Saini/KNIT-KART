import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className={styles['navbar']}>
                <Link to='/'><h1>KNIT KART</h1></Link>
            </nav>
        </div>
    )
}

export default Navbar;