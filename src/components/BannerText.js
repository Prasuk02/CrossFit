import React from 'react'
import {Box, Stack, Typography, Button} from "@mui/material"
import banner from '../images/banner.png'
import bannerImg from "../images/ban.png"
import "./bannerText.css"
import { Link } from 'react-router-dom'

function BannerText(){
    return(
        <>
            <img className='bannerImg' src={bannerImg} alt=""/>
            <Box width="600px" marginTop="70px" marginLeft="100px">
                <Stack>
                    <Typography 
                        style={{
                            fontSize: "25px", 
                            fontFamily: 'Barlow Condensed', 
                            fontWeight: '500', 
                            color: '#e34033',
                            marginBottom: "0px"}}>
                                The Fitness Club</Typography>
                    <Typography 
                        style={{
                            color: '#222222',
                            fontSize: "53px", 
                            fontFamily: 'calibri', 
                            fontWeight: '900',
                            letterSpacing: "0px"
                            }}>
                                Perfect Workout<br/>Coach For <span style={{color: '#ff5649'}}>Body Shape</span> </Typography>
                    <Typography 
                        style={{
                            color: '#333333',
                            fontSize: "18px", 
                            fontFamily: 'Barlow Condensed', 
                            fontWeight: '400',
                            marginTop: "5px",
                            wordSpacing: '3px'
                            }}>
                                Checkout the most effective excercises for free</Typography>
                    <a href='#Awesome_Excercises_You_Should Know' style={{textDecoration: 'none'}}> 
                    <Button variant="contained" 
                        style={{
                            width: '200px', 
                            padding: "12px", 
                            backgroundColor: '#e34033',
                            marginTop: "30px",
                            textDecoration: 'none'
                            }}>
                                Explore Excercises</Button>
                    </a>
                    <Typography
                        style={{
                            fontWeight: "500",
                            fontFamily: "Tilt Warp",
                            fontSize: "110px",
                            color: '#e34033',
                            opacity: "0.3",
                            marginTop: '-30px',
                            marginLeft: "-10px",
                            userSelect: "none",
                            marginTop: "50px",
                        }}>EXCERISES</Typography>

                    <Box className='banner'>
                        <img className='banner-img1' src={banner} alt="" draggable='false'/>
                    </Box>
                    
                </Stack>
            </Box>
        </>
    );
}

export default BannerText