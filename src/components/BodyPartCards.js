import { Stack, Typography } from '@mui/material';
import React from 'react'
import icon from '../images/icon.png'
import './bodyPartScrollBar.css'

const BodyPartCards = ({item, bodyPart, setBodyPart}) => {
    // setBodyPart('back')
    const selectBodyPart = () => {
        setBodyPart(item)
    }
    return(
        <>
        <Stack type='button'  alignItems='center' justifyContent="center" >
            <Typography className='gym-icon' onClick={selectBodyPart}
                sx={{border: bodyPart !== item ? '1px solid #dddddd' : '1px solid #dddddd',
                    borderTop: bodyPart === item ? '3px solid #909090' : '',
                    backgroundColor: "white", 
                    width: "170px", 
                    height: "170px", 
                    margin: '0px 10px',
                    marginBottom: "10px", 
                    borderRadius: '7%'
                }}>
                        <img src={icon} alt="icon" draggable='false' onClick={selectBodyPart}
                            style={{
                                width: "80px", 
                                marginTop: '35px',
                                marginLeft: '45px'
                            }} />
                        <Typography className='name' onClick={selectBodyPart}
                            style={{
                                textAlign: 'center',
                                fontSize: '20px',
                                textTransform: 'capitalize',
                                marginTop: '7px',
                                fontWeight: '500',
                                fontFamily: 'Barlow Condensed'
                            }}>{item}</Typography>
            </Typography>

        </Stack>
        </>
    );
}

export default BodyPartCards