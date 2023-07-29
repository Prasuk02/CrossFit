import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import SimilarWorkouts from '../components/SimilarWorkouts';
import YoutubeVideos from '../components/YoutubeVideos';
import { excerciseOptions, fetchData } from '../utils/fetchData';

function ExcerciseDetails(){
    
    const [excerciseDetails, setExcerciseDetails] = useState({})
    const [targetExcercises, setTargetExcercises] = useState([])
    let {id} = useParams()          //Changes when url id changes (dynamic variable)
    
    useEffect(() => {
        const fetchExcerciseById = async() => {
            let fetchURL = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
            const fetchExcerciseDetail = await fetchData(fetchURL, excerciseOptions)
            setExcerciseDetails(fetchExcerciseDetail)

            if(excerciseDetails !== {}){
                let targetURL = `https://exercisedb.p.rapidapi.com/exercises/target/${excerciseDetails.target}`
                const fetchExcercise = await fetchData(targetURL, excerciseOptions)
                setTargetExcercises(fetchExcercise)
            }
        }
        
        fetchExcerciseById()
    }, [id])
    console.log(targetExcercises)
    
    return(
        <>
            <Details 
                id={excerciseDetails.id} 
                name={excerciseDetails.name} 
                bodyPart={excerciseDetails.bodyPart} 
                equipment={excerciseDetails.equipment}
                gif={excerciseDetails.gifUrl}
                target={excerciseDetails.target}
                targetExcercises={targetExcercises}
            />
            <SimilarWorkouts/>
            <YoutubeVideos/>
        </>
    );
}

export default ExcerciseDetails