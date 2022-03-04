import React, { useEffect } from 'react';
import axios from 'axios';
import ButtonAppBar from '../header/Header.js';
import "./Halls.css";
import { Awesome } from './content.js';


const fetch= async() =>{
    const data=await axios.get('/');
    console.log(data)
}



function Halls(props) {
    useEffect(() =>{
        fetch();
    },[])
    return (
        <>
        <div>
          <ButtonAppBar/>
        </div>
        <div className='Halls'>
            <Awesome></Awesome>
        </div>
        </>
    );
}

export default Halls;