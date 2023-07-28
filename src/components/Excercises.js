import React from 'react'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import ExcerciseCard from './ExcerciseCard'
import { useState, useEffect } from 'react'
import {fetchData, excerciseOptions} from '../utils/fetchData.js'

const Excercises = ({setExcercises, bodyPart, excercises}) => {

  useEffect(() => {
    const fetchExcerciseData = async() => {
      let fetchExcercise = []
      
      if(bodyPart == 'all'){
        fetchExcercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, excerciseOptions)
      }
      else{
        fetchExcercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions)
        window.scrollTo({top: 1250, behavior: 'smooth'})
      }
      setExcercises(fetchExcercise)
    }

    fetchExcerciseData()
  }, [bodyPart])

  const [currentPage, setCurrentPage] = useState('1')
  const excercisesPerPage = 12;
  const indexOfLastExcercise = currentPage * excercisesPerPage
  const indexOfFirstExcercise = indexOfLastExcercise - excercisesPerPage

  // Using slice to get limited excercises, slice does not includes first element
  const currentPageExcercises = excercises.slice(indexOfFirstExcercise, indexOfLastExcercise)

  // by-default event, value is passed by pagination component
  const paginate = (event, value) => {
    setCurrentPage(value)
    window.scrollTo({top: 1250, behavior: 'smooth'})
  }
  
  console.log(excercises)
  return (
    <>
      <Box type="button" onClick={() => {}} width='90%' m='auto' p='20px' id='excercises'>
        <Typography mb="25px" mt='25px'
          style={{
            fontSize: '27px',
            fontFamily: 'Barlow Condensed',
            fontWeight: '400'
          }}>
          Showing Results : 
        </Typography>

        <Stack direction='row' flexWrap='wrap' justifyContent="space-evenly">
          {currentPageExcercises.map((excercise, key) => {
            return(
              <ExcerciseCard 
                key={key}
                id={excercise.id}
                name={excercise.name} 
                bodyPart={excercise.bodyPart} 
                equipment={excercise.equipment} 
                gifUrl={excercise.gifUrl} 
                target={excercise.target}/>
              );
          })}
        </Stack>
        <Stack direction='row' justifyContent='center'>
          <Pagination 
            color='error' 
            shape='rounded'
            count={Math.ceil(excercises.length / excercisesPerPage)}
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
          />
        </Stack>
      </Box>
    </>
  )
}

export default Excercises
