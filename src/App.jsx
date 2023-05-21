import React from 'react';
import './App.css'

//Components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Analise from './Components/Analise/Analise';


const App = () => {
  return ( 
    <div>
        <Navbar/>
        <Hero/>
        <Analise/>
    </div>
  );
};

export default App;
