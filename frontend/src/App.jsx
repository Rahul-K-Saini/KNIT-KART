import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { ThemeProvider } from './context/ThemeProvider'

const App = () => {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Navbar />
            <Outlet />
            <Footer />
        </ThemeProvider>
    )
}

export default App