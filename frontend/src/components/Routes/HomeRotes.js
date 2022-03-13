import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import Associateroutes from "./Associateroutes";

function HomeRoutes(props) {
  var userInfo = localStorage.getItem("userInfo");
  userInfo=JSON.parse(userInfo)
  console.log(userInfo.isAdmin)
  return (
    <Routes>
      <Route
        path="*"
        element={
          userInfo.isAdmin === true ? <AdminRoutes /> : <Associateroutes />
        }
      />
    </Routes>
  );
}

export default HomeRoutes;
