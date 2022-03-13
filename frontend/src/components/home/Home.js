import React from "react";
import { useNavigate } from "react-router-dom";
import Selectable from "./Calender";


function Home(props) {
  let navigate = useNavigate();

  return (
    <>
 
      <div>
          <Selectable></Selectable>
      </div>
    </>
  );
}

export default Home;
