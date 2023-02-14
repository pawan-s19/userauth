import React, { useEffect, useState } from "react";
import "./app.css";
import Welcome from "./Components/Welcome";
import { Routes, Route } from "react-router-dom";
import axios from "./axiosConfig/axios";
import Profile from "./Components/Profile";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  let getUser = async () => {
    try {
      let { data } = await axios.get("/getuser");
      setUser(data.user);
    } catch (err) {
      setUser(null);
      console.log(err.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="wrapper d-flex align-items-center justify-content-center">
      <Routes>
        <Route path="/" element={<Welcome user={user} setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
