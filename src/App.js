import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter as Main} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';

function App() {
  return (
    <div >
      <Main>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercise:id' element={<ExerciseDetails/>}/>
        </Routes>
      </Main>
     
    </div>
  );
}

export default App;
