import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Entrance from "./Pages/Entrance/Entrance";
import AdPage from "./Pages/AdPage/AdPage";
import PostAd from "./Pages/PostAd/PostAd";
<<<<<<< HEAD
import Profile from "./Pages/Profile/Profile";
=======
import Dashboard from "./Components/Dashboard/Dashboard";
>>>>>>> 8e2ffb00fb0092170b6449a29cf48132d4112607

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "entrance",
        element: <Entrance />,
      },
      {
        path: "ad",
        element: <AdPage />,
      },
      {
        path: "postad",
        element: <PostAd />,
      },
      {
<<<<<<< HEAD
        path: "profile",
        element: <Profile />,
      },
=======
        path: "dashboard",
        element: <Dashboard />
      }
>>>>>>> 8e2ffb00fb0092170b6449a29cf48132d4112607
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
