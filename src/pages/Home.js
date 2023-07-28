import React from 'react'
import {Box} from "@mui/material"
import BannerText from '../components/BannerText';
import SearchBar from '../components/SearchBar';
import Excercises from '../components/Excercises';
import { useState } from 'react';

function Home(){
    const [bodyPart, setBodyPart] = useState('all')
    const [excercises, setExcercises] = useState([])
    return(
        <>
         <Box>
            <BannerText />
            <SearchBar 
                setExcercises={setExcercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}/>
            <Excercises 
                setExcercises={setExcercises}
                bodyPart={bodyPart}
                excercises={excercises}/>
         </Box>
        </>
    );
}

export default Home