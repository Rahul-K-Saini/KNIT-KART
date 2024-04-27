import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/index";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(true);
  console.log(user);
  const getUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/user/get-user",
        {
          token: JSON.parse(localStorage.getItem("token")),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        console.log(res.data.data.user);
        dispatch(userActions.setUser(res.data.data.user));
      } else {
        <Navigate to="/entrance" />;
        localStorage.clear();
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/entrance" />;
  }
}
