import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx'
import About from './Components/About.jsx'



// const router = createBrowserRouter([
//     { path: '/', element: <LandingPage /> },
//     { path: '/about', element: <About /> }
// ])


const App = () => {
    return (
        <>
{/*             <RouterProvider router={router} /> */}
        <LandingPage/>
        </>
    )
}

export default App
