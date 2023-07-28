import React from 'react'
import {Box, Stack, Typography, TextField, Button} from '@mui/material'
import {useState, useEffect} from 'react'
import { excerciseOptions, fetchData } from '../utils/fetchData'
import BodyPartScrollBar from './BodyPartScrollBar'

const SearchBar = ({setExcercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])
  
  // useEffect function called as soon as page loads
  useEffect(() => {
    const fetchBodyPartsData = async() => {
        const fetchBodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions)
        setBodyParts(['all', ...fetchBodyParts])            //Spread operator
    }

    fetchBodyPartsData();
  }, [])
  
  const searchInput = e => {
    setSearch(e.target.value.toLowerCase())
  }

  // Fetching data from API
  // This function is going to take sometime, generally used while fetching data
  const handleSearch = async() => {
    if(search != ''){
      const excerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', excerciseOptions);
      const searchedExcercise = excerciseData.filter((excercise) => excercise.name.toLowerCase().includes(search)
                                                                 || excercise.bodyPart.toLowerCase().includes(search)
                                                                 || excercise.equipment.toLowerCase().includes(search)
                                                                 || excercise.target.toLowerCase().includes(search)
                                                                 )
      setSearch('')
      setExcercises(searchedExcercise) 
    }
  }
  return (
    <>
      <Stack alignItems='center' justifyContent='center' mt="55px" >
        <Typography id='Awesome_Excercises_You_Should Know'
          style={{
            fontSize: "40px",
            textAlign: 'center',
            fontWeight: "400",
            fontFamily: 'Tilt Warp'
          }}>
          Awesome Excercises You <br/>Should Know
        </Typography>
        <Box position='relative' mt="50px">
        <TextField onChange={searchInput} placeholder='Search Excercise' value={search}
          sx={{
            input: {
              fontSize: "18px",
              height: "20px",
              fontWeight: "500",
              border: '1px solid #e34033'
            }
          }}
          style={{
            width: "1100px",
            position: 'relative'
          }}/>
          
          <Button onClick={handleSearch} variant="contained" 
            style={{
              padding: "14.5px 30px", 
              fontSize: "15px", 
              backgroundColor: '#e34033',
              position: 'absolute',
              top: "0px",
              right: '0px'
              }}>Search</Button>
        </Box>
        
        {/* BodyPart lists component */}
        <Box className='scrollMenu' sx={{width: '68%', mt: '80px'}} style={{}}>
              <BodyPartScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      </Stack>
      
    </>
  )
}

export default SearchBar
