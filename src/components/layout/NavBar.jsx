import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';
import avatarIcon from "../../assets/img/icons/icon-4b-juggler-color.png";
import staffIcon from "../../assets/img/icons/icon-fire-staff-bw.png";
import "./NavBar.css";

export default function NavBar() {
  const [value, setValue] = useState("home");

  let location = useLocation();

  useEffect(() => {
      const path = location.pathname.slice(1);

      setValue(path)
  }, [location.pathname]);

  return (
    <div className="nav-spacing">
      <div className="circle">
        <img className="nav-icon" src={staffIcon} alt="Fire Staff Icon" />
      </div>
      <span className="line-start"></span>
      <span className="diagonal"></span>
      <nav className="navigation">
        <Link
          to="/"
          className={`${value === "home" ? "active-link" : null}`}
          onClick={() => {
            setValue("home");
          }}
        >
          Home
        </Link>
        <Link
          to="/allTricks"
          className={`${value === "allTricks" ? "active-link" : null}`}
          onClick={() => {
            setValue("allTricks");
          }}
        >
          Tricks
        </Link>
        <Link
          to="/addTrick"
          className={`${value === "addTrick" ? "active-link" : null}`}
          onClick={() => {
            setValue("addTrick");
          }}
        >
          Add Trick
        </Link>
        <Link
          to="/learnToJuggle"
          className={`${value === "learnToJuggle" ? "active-link" : null}`}
          onClick={() => {
            setValue("learnToJuggle");
          }}
        >
          Learn To Juggle
        </Link>
        <Link
          to="/tasks"
          className={` ${value === "tasks" ? "active-link" : null}`}
          onClick={() => {
            setValue("tasks");
          }}
        >
          Tasks
        </Link>
        <Avatar className="avatar-icon" alt="Avatar Icon" src={avatarIcon} />
      </nav>
    </div>
  );
}
