import React from 'react'
import { Box, Stack, Typography, Button} from '@mui/material'

const TargetExcercise = ({excercise}) => {
  const {bodyPart, equipment, gifUrl, id, name, target} = excercise
  return (
    <>
        <Box 
            m='auto' 
            mt="8px" 
            style={{
                width: '100%', 
                height: '118px', 
                backgroundColor: '#f9f9f9', 
                borderRadius: '8px 2px',
                overflow: 'hidden'
                }}>
                  <Stack direction='row' alignItems='center' gap="30px">
                    <img src={gifUrl} alt="" height="118px"/>
                    <Stack direction='column'>
                      <Typography 
                        style={{
                          textTransform: 'capitalize', fontWeight: '600', fontFamily: 'Barlow Condensed', fontSize: '19px'
                          }}>{name}</Typography>
                      <Stack direction='row'>
                        <Button 
                              style={{
                                  padding: '8px', 
                                  borderRadius: '50px', 
                                  backgroundColor: '#FFAEA1', 
                                  opacity: '0.8',
                                  fontSize: '10px',
                                  fontWeight: '600',
                                  color: 'black',
                                  margin: '10px 5px 10px 0px'
                              }}>
                                  {bodyPart}</Button>
                        <Button 
                          style={{
                            padding: '8px', 
                            borderRadius: '50px', 
                            backgroundColor: '#FFB879', 
                            opacity: '0.8',
                            fontSize: '10px',
                            fontWeight: '600',
                            color: 'black',
                            margin: '10px 5px 10px 0px'
                          }}>
                              {equipment}</Button>
                      </Stack>
                    </Stack>
                  </Stack>
        </Box>
    </>
  )
}

export default TargetExcercise