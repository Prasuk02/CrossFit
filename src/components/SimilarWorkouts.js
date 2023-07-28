import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import ExcerciseCard from './ExcerciseCard'

const SimilarWorkouts = ({fetchedExcercise, fetchedParameter, mt}) => {
  return (
    <>
      <Box width='90%' m='auto' px="5%" pb='0px' pt={`${mt}px`} style={{backgroundColor: '#FFDFC3'}}>
        <Typography 
          style={{
            fontWeight: '500', 
            fontFamily: 'Tilt Warp', 
            wordSpacing: '1px',
            letterSpacing: '1px'
            }} variant='h5'>Checkout Similar <span style={{textTransform: 'capitalize', color: '#E34033'}}>{fetchedParameter}</span> Excercises</Typography>
        
        <Stack direction='row'gap="10px" mt="30px">
          {fetchedExcercise?.slice(0, 5).map((excercise) => {
            return(
              <ExcerciseCard 
                id={excercise.id}
                name={excercise.name}
                bodyPart={excercise.bodyPart}
                equipment={excercise.equipment}
                gifUrl={excercise.gifUrl}
                target={excercise.target}
              />
            )
          })}
        </Stack>        
      </Box>
    </>
  )
}

export default SimilarWorkouts
