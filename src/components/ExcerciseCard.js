import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function ExcerciseCard({id, name, bodyPart, equipment, gifUrl, target}){
    return(
        <>
            <Box onClick={window.scrollTo({top: 0, behavior: 'smooth'})} width="20.5%" style={{backgroundColor: 'white', margin: '0px 0px 20px 0px', borderRadius: '10px', padding: '15px', border: '1px solid #cccccc'}}>
                <Link to={`/excercise/${id}`} style={{textDecoration: 'none'}}>
                    <img src={gifUrl} width="100%" loading='lazy' alt='excercise-gif'/>
                    <Stack direction='row' alignItems='center'>
                        <Button 
                            style={{
                                padding: '8px', 
                                borderRadius: '50px', 
                                backgroundColor: '#FF8479', 
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
                        {/* <Button 
                            style={{
                                padding: '8px', 
                                borderRadius: '50px', 
                                backgroundColor: '#79FFAE', 
                                opacity: '0.8',
                                fontSize: '10px',
                                fontWeight: '600',
                                color: 'black',
                                margin: '10px 5px 10px 0px'
                            }}>
                                {target}</Button> */}
                    </Stack>

                    <Typography 
                        style={{
                            textTransform: 'capitalize',
                            fontWeight: '500',
                            fontSize: '23px',
                            margin: '10px 0px 10px',
                            fontFamily: 'Barlow Condensed',
                            color: '#222222'
                        }}>
                            {name}</Typography>
                </Link>
            </Box>
        </>
    );
}

export default ExcerciseCard