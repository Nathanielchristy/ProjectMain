import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import './Header.css'
import { styled } from "@mui/system";
import { Paper } from "@mui/material";


export default function ButtonAppBar() {
  let navigate = useNavigate();
  const redirecthome = () => {
    navigate("/");
  };
  const redirecthalls = () => {
    navigate("/halls");
  };
  const StyledePapper=styled(Paper,{
    name:"Style"
  })({
    textAlign:"center",
    fontFamily:"Cursive",
    backgroundColor: 'aliceblue',
    fontSize:"50",
  });
  return (
    <>
    <StyledePapper>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ICT ACADEMY BOOKING PORTAL
          </Typography>
          <Button color="inherit" onClick={redirecthome}>
            Login
          </Button>
          <Button color="inherit" onClick={redirecthalls}>
            Halls
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </StyledePapper>
    
    </>
  );
}
