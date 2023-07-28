import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import icon from '../images/icon.png'
import { excerciseOptions, fetchData } from '../utils/fetchData'
import { useState, useEffect } from 'react'
import TargetExcercise from './TargetExcercise'

const Details = ({id, name, bodyPart, equipment, gif, target, targetExcercise}) => {
  
  // let currentExcerciseStartIndex = Math.floor(Math.random() * (targetExcercises.length - 4))
  // let currentExcercise = targetExcercises.slice(currentExcerciseStartIndex, currentExcerciseStartIndex + 4)
  // console.log(targetExcercise)

  return (
    <>
      <Box width='61%' mt='40px' ml='70px' mb="95px">
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <img src={gif} alt={`${name} gif`} width='43%' 
            style={{
              borderRadius: '20px 3px',
              border: '1px solid #FFA39C'
              }}/>

          <Stack diection='column'>
            <Box width='400px'>
              <Typography 
                style={{
                  textTransform: 'capitalize',
                  fontSize: '38px',
                  fontFamily: 'Barlow Condensed',
                  fontWeight: '500'
                  }}>
                    {name}</Typography>
              
              <Typography mt='20px'
                style={{
                  color: '#555555',
                  fontSize: '14.5px'
                }}>{`Excercises keep you strong. ${name} bup is one of the best excercise to target your ${target}. It will help you to improve your mood and gain energy.`} 
              </Typography>
              
              <Stack direction='row' alignItems='center' mt='30px' spacing={3}>
                <img src={icon} alt="" 
                  style={{
                    padding: '18px 15px',
                    width: "46px",
                    borderRadius: '50%',
                    backgroundColor: '#FFD4CD'
                    }}/>
                <Typography 
                  style={{
                    textTransform: 'capitalize',
                    fontSize: '22px',
                    fontWeight: '500',
                    fontFamily: 'Tilt Neon'
                  }}>{bodyPart}</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' mt='20px' spacing={3}>
                <img src={icon} alt="" 
                  style={{
                    padding: '18px 15px',
                    width: "46px",
                    borderRadius: '50%',
                    backgroundColor: '#FFECC3'
                    }}/>
                <Typography 
                  style={{
                    textTransform: 'capitalize',
                    fontSize: '22px',
                    fontWeight: '500',
                    fontFamily: 'Tilt Neon'
                  }}>{equipment}</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' mt='20px' spacing={3}>
                <img src={icon} alt="" 
                  style={{
                    padding: '18px 15px',
                    width: "46px",
                    borderRadius: '50%',
                    backgroundColor: '#DDFFC3'
                    }}/>
                <Typography 
                  style={{
                    textTransform: 'capitalize',
                    fontSize: '22px',
                    fontWeight: '500',
                    fontFamily: 'Tilt Neon'
                  }}>{target}</Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box 
      style={{
        position: 'absolute', 
        top: '0px',
        right: '0px',
        width: '360px',
        height: '100vmin',
        backgroundColor: 'rgb(255 191 191 / 100%)',
        padding: '0px 25px 0px 25px'
      }}>

        <Typography mt="30px" mb='20px'
          style={{
            textTransform: 'capitalize',
            fontSize: '28px',
            fontWeight: '400',
            fontFamily: 'Tilt Warp',
            wordWrap: 'wrap',
            color: '#3f3f3f',
            wordSpacing: '5px',
            letterSpacing: '1px',
          }}>
            {`Checkout Some Best Workout for ${target}`}</Typography>
           
           {targetExcercise?.slice(0, 4).map((excercise) => {
             return(
              <TargetExcercise excercise={excercise}/>
             )
           })} 
      </Box>
    </>
  )
}

export default Details