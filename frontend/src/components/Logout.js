import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Logout(props) {
    let navigate = useNavigate();
    const redirecthome = async () => {
        await navigate("/", { replace: true });
      };
      useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
          localStorage.removeItem('userInfo');
          redirecthome();
        }
      });
    return (
        <div>
            Logging out
        </div>
    );
}

export default Logout;