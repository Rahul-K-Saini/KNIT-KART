import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { themeActions } from './store'

const App = () => {
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(themeActions.initialVisit());
        
    }, [])


    
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer />
        </>
    )
}

export default App