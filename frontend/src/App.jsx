import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx'
import Entrance from './Components/Entrance/Entrance.jsx'



const router = createBrowserRouter([
    {
        path: '/', children: [
            { index: true, element: <LandingPage /> },
            { path: 'entrance', element: <Entrance /> }
        ]
    }
])


const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
