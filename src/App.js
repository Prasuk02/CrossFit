import React from "react"
import "./App.css"
import {Routes, Route} from 'react-router-dom'
import {Box} from '@material-ui/core'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExcerciseDetails from "./pages/ExcerciseDetails";

function App() {
  return (
    <>
      <Box width='830px' sx={{}}>
        <Navbar/>
      </Box>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* passing dynamic path to component */}
          <Route path='/excercise/:id' element={<ExcerciseDetails />}/>
        </Routes>
      
    </>
  );
}

export default App;
