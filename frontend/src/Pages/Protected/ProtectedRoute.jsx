import React, { useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    getUser();
  }, []);
  console.log("get user ke bahar", user);
  const getUser = async () => {
    try {
      const res = await axios.post(
        "https://knit-kart.onrender.com/user/get-user",
        {
          token: JSON.parse(localStorage.getItem("token")),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      if (res.data.success) {
        console.log(user);
        setUser(res.data.data);
        console.log("protected route m", user);
      } else {
        <Navigate to="/entrance" />;
        localStorage.clear();
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/entrance" />;
  }
}
