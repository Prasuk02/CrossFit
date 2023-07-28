import React from 'react'
import {Link} from 'react-router-dom'
import { Stack } from "@mui/material"
import logo from '../images/logo.png'
import "./navbar.css"

function Navbar(){
    return(
        <>
            <Stack direction="row" marginLeft="20px" marginTop="0px" sx={{}} alignItems="center" justifyContent="space-between">
                <Stack direction= "row" alignItems="center"  gap="5px">
                    <img src={logo} alt="" style={{width: '73px'}}/>
                    <h1 className='head'>CROSSFIT</h1>
                </Stack>

                <Stack direction="row" spacing={3} fontSize="19px" fontFamily='Tilt Neon'>
                    <Link to="/" style={{textDecoration: "none", color: "#e34033", borderBottom: "2px solid #e34033"}}>
                        Home
                    </Link>
                    <a href='#excercises' style={{textDecoration: "none", color: "#e34033", borderBottom: "2px solid #e34033"}}>Excercises</a>
                </Stack>
            </Stack>
        </>
    );
}

export default Navbar;