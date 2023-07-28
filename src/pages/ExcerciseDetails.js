import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import SimilarWorkouts from '../components/SimilarWorkouts';
import YoutubeVideos from '../components/YoutubeVideos';
import { excerciseOptions, fetchData, YTexcerciseOptions } from '../utils/fetchData';

function ExcerciseDetails(){
    
    const [excerciseDetails, setExcerciseDetails] = useState({})
    const [youtubeVideos, setYoutubeVideos] = useState([])
    const [targetExcercise, setTargetExcercise] = useState([])
    const [bodyPartExcercise, setBodyPartExcercise] = useState([])
    const [equipmentExcercise, setEquipmentExcercise] = useState([])
    let {id} = useParams()          //Changes when url id changes (dynamic variable)
    
    useEffect(() => {
        const fetchExcercises = async() => {
            console.log("CALLED")
            const fetchExcerciseDetail = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, excerciseOptions)
            setExcerciseDetails(fetchExcerciseDetail)
            console.log(fetchExcerciseDetail)
        }
        
        fetchExcercises()
    }, [id])
        
    useEffect(() => {
        const fetchExcercises = async() => {
            console.log("CALLED 2")
            // const fetchYTvideos = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${excerciseDetails.name}`, YTexcerciseOptions)
            // setYoutubeVideos(fetchYTvideos)

            if(excerciseDetails.target){
                const fetchTarget = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${excerciseDetails.target}`, excerciseOptions)
                setTargetExcercise(fetchTarget)
            }
            
            if(excerciseDetails.bodyPart){
                const fetchBodyPart = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${excerciseDetails.bodyPart}`, excerciseOptions)
                setBodyPartExcercise(fetchBodyPart)
            }
            
            if(excerciseDetails.equipment){
                const fetchEquipment = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${excerciseDetails.equipment}`, excerciseOptions)
                setEquipmentExcercise(fetchEquipment)
            }
        }
        
        fetchExcercises()
    }, [excerciseDetails])
    
    console.log(`Name: ${excerciseDetails.name}`)
    console.log(`Name: ${excerciseDetails.target}`)
    console.log(`Name: ${excerciseDetails.bodyPart}`)
    console.log(`Name: ${excerciseDetails.equipment}`)
    return(
        <>
            <Details 
                id={excerciseDetails.id} 
                name={excerciseDetails.name} 
                bodyPart={excerciseDetails.bodyPart} 
                equipment={excerciseDetails.equipment}
                gif={excerciseDetails.gifUrl}
                target={excerciseDetails.target}
                targetExcercise={targetExcercise}
            />
            {/* <YoutubeVideos youtubeVideos={youtubeVideos} name={excerciseDetails.name}/> */}
            <SimilarWorkouts fetchedExcercise={bodyPartExcercise} fetchedParameter={excerciseDetails.bodyPart} mt={83}/>
            <SimilarWorkouts fetchedExcercise={equipmentExcercise} fetchedParameter={excerciseDetails.equipment} mt={30}/>
        </>
    );
}

export default ExcerciseDetails