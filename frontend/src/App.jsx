import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx'
import Entrance from './Components/Register/Entrance.jsx'



const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/entrance', element: <Entrance /> }
])


const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
