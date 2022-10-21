import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Bollywood from './components/Bollywood';
import Technology from './components/Technology';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';


import './App.css';
import DescImg from './components/DescImg';

function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage />} ></Route>
          <Route path='/Bollywood' element = {<Bollywood />} ></Route>
          <Route path='/Technology' element = {<Technology />} ></Route>
          <Route path='/Hollywood' element = {<Hollywood />} ></Route>
          <Route path='/Fitness' element = {<Fitness />} ></Route>
          <Route path='/Food' element = {<Food />} ></Route>      
          <Route path='/pages/about/:id' element = {(<DescImg/>)} ></Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
