import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Avatar from "../atoms/Avatar";
import "./NavBar.css"

export default function NavBar() {
  const [value, setValue] = useState("home");

  return (
    <div className="nav-spacing">
      <div className="circle"></div>
      <span className="line-start"></span>
      <span className="diagonal"></span>
      <nav className="navigation">
        <Link to="/" className={`${value === "home" ? 'active-link' : null}`} onClick={() => {setValue("home")}}>Home</Link>
        <Link to="/chart" className={`${value === "chart" ? 'active-link' : null}`} onClick={() => {setValue("chart")}}>Chart</Link>
        <Link to="/tasks" className={` ${value === "tasks" ? 'active-link' : null}`} onClick={() => {setValue("tasks")}}>Tasks</Link>
        <Link to="/addTrick" className={` ${value === "addTrick" ? 'active-link' : null}`} onClick={() => {setValue("addTrick")}}>Add Trick</Link>
        <Avatar />
      </nav>
    </div>
  );
}
