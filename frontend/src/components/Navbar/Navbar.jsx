import React from 'react';
import  ThemeToggle  from './theme-toggle';

function Navbar() {
  return (
    <>
        <h2>KNIT-<span className='font-semibold'>KART</span></h2>
        <ThemeToggle />
    </>
  )
}

export default Navbar