import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Page404 from "./Pages/NotFound/NotFound";
import Entrance from "./Pages/Entrance/Entrance";
import AdPage from "./Pages/AdPage/AdPage";
import PostAd from "./Pages/PostAd/PostAd";
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import ProtectedRoute from "./Pages/Protected/ProtectedRoute";
import Landing from "./Pages/Landing/Landing";

const App = () => {
  const location = useLocation();

  // Check if the current location is the landing page
  const isLandingPage = location.pathname === '/';

  return (
    <>
      {/* Conditionally render the navbar based on the current route */}
      {!isLandingPage && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <Landing />
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route path="/entrance" element={<Entrance />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/ad/:id"
          element={
            <ProtectedRoute>
              <AdPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/postad"
          element={
            <ProtectedRoute>
              <PostAd />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Page404 />} />  
      </Routes>
      <Footer />
    </>
  );
};

export default App;
