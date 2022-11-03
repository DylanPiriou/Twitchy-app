import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-nav">
        <NavLink to="/">logo</NavLink>
        <NavLink to="/decouvrir">découvrir</NavLink>
        <NavLink to="/parcourir">parcourir</NavLink>
      </div>
      <SearchBar />
      <div className="right-nav">
        <NavLink to="/sign-in">
          <SignIn />
        </NavLink>
        <NavLink to="/sing-up">
          <SignUp />
        </NavLink>
        <NavLink to="/profile">
          <i className="fa-solid fa-user"></i>
        </NavLink>
      </div>
    </div>
  );
}
