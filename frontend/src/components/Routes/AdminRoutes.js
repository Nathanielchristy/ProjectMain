import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Addassociate from '../admin/Addassociate';
import Adminhome from '../admin/Adminhome';
import Associtedetails from '../admin/Associatedetails';
import Navbar from '../admin/Navbar';
import Logout from '../Logout';

function AdminRoutes(props) {
    console.log('Working as Admin')
    return (
        <div>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Adminhome />}></Route>
            <Route path="/associatedetails" element={<Associtedetails/>}></Route>
            <Route path="/addassociate" element={<Addassociate/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
            </Routes>
        </div>
    );
}

export default AdminRoutes;