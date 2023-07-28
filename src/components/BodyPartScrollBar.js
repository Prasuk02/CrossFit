import { Box, Typography } from '@mui/material';
import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPartCards from './BodyPartCards';
import './bodyPartScrollBar.css'
import arrow from '../images/arrow.png'
import { useContext } from 'react';


const BodyPartScrollBar = ({data, bodyPart, setBodyPart}) => {
    const RightArrow = () => {
        const {scrollNext} = useContext(VisibilityContext)
        return(
            <Typography onClick={() => scrollNext()}>
                <img src={arrow} 
                    style={{
                        width: '27px',
                        backgroundColor: '#dddddd',
                        padding: '15px',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '65px',
                        right: '-10px',
                        zIndex: 2,
                        opacity: '0.9'
                    }}
                />
            </Typography>
        );    
    }

    const LeftArrow = () => {
        const {scrollPrev} = useContext(VisibilityContext)
        return(
            <Typography onClick={() => {scrollPrev()}}>
                <img src={arrow} 
                    style={{
                        width: '27px',
                        backgroundColor: '#dddddd',
                        padding: '15px',
                        borderRadius: '50%',
                        transform: 'scale(-1)',
                        position: 'absolute',
                        top: '65px',
                        left: '-10px',
                        zIndex: 2,
                        opacity: '0.9'
                    }}
                />
            </Typography>
        );
    }
    return(
        <>
            <div className='scrollMenu' style={{position: 'relative'}}>
                <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
                    {data.map((item) => {
                        return(
                            <Box width="230px"
                                key={item.id || item}
                                itemID={item.id || item}
                                title={item.id || item}>
                                
                                <BodyPartCards item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                            </Box>
                        );
                    })}
                </ScrollMenu>

            </div>
        </>
    );
}

export default BodyPartScrollBar