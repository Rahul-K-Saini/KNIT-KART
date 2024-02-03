import React from 'react'
import Styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'><h1>KNIT KART</h1></Link>
        </nav>
    )
}

export default Navbar;