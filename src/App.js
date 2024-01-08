import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter as Main} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';

function App() {
  return (
    <Box width='400px' sx={{ width:{ xl: '1488px'}}}  m="auto">
      <Main>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercise:id' element={<ExerciseDetails/>}/>
        </Routes>
      </Main>
     
    </Box>
  );
}

export default App;
