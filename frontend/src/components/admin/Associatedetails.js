import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import BasicTable from "./Table";

function Associatedetails(props) {
  const [error, setError] = useState("");
  const [userdata, setUserdata] = useState("");
  const [tabledata, setTabledata] = useState([]);



  useEffect(() => {
    fetchdata();
    // const userData = localStorage.getItem("userdata");
    // const tabledata = JSON.parse(userData);
    // console.log(tabledata)
  },[]);
  const fetchdata = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/userdata",

        config
      );
      // localStorage.setItem("userdata", JSON.stringify(data.users));
      if (data) {
        console.log("passed");
        data.users.shift();
        setTabledata(data.users)
      }
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="aassociatedetails">
      <div style={{ marginLeft: "250px" }}>
        <h1 style={{ fontFamily: "cursive",textAlign:"center" }}>Associate Information</h1>
        <div style={{paddingRight:"250px"}}>
          <BasicTable data={tabledata}/>
        </div>
      </div>
    </div>
  );
}

export default Associatedetails;
