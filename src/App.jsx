import React from 'react';
import './App.css'

//Components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


const App = () => {
  return ( 
    <div>
        <Navbar/>
        <Hero/>
    </div>
  );
};

export default App;
