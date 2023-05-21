import React from 'react';
import './App.css'

//Components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Analise from './Components/Analise/Analise';
import Search from './Components/Search/Search';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';


const App = () => {
  return ( 
    <div>
        <Navbar/>
        <Hero/>
        <Analise/>
        <Search/>
        <Cards/>
        <Footer/>
    </div>
  );
};

export default App;
