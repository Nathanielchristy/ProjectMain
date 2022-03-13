import React from "react";
import Drawer from "@mui/material/Drawer";
import { useStyles } from "../styles";

import List from "@mui/material/List";
import { MenuItem } from "@mui/material";

import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Calendar } from "react-big-calendar";
import Home from "../home/Home";


//assets
// import DashboadIcon from "../assets/DashboadIcon.svg";
// import DashboadIconActive from "../assets/DashboadIconActive.svg";

function Adminhome(props) {
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <>
      <div className="home">
      <div style={{marginLeft:"250px"}}><h1>Current Events</h1>
            <Home></Home>
            </div>
      </div>
    </>
  );
}

export default Adminhome;
