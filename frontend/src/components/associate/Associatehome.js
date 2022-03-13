import React from 'react';

import { useNavigate } from "react-router-dom";
import Home from "../home/Home";

function Associatehome(props) {
    console.log('Is associate')

    return (
      <>
        <div className="home">
        <div style={{marginLeft:"250px"}}><h1>Associate Home</h1>
              </div>
        </div>
      </>

    );
}

export default Associatehome;