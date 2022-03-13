import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../associate/Navbar";
import Associatehome from "../associate/Associatehome";
import Logout from "../Logout";

function Associateroutes(props) {
  console.log("Workingas associate");
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/*" element={<Associatehome />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default Associateroutes;
