import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Discover from "./pages/Discover";
import Browse from "./pages/Browse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sing-up" element={<SignUp />} />
      <Route path="/decouvrir" element={<Discover />} />
      <Route path="/parcourir" element={<Browse />} />
    </Routes>
  );
}

export default App;
