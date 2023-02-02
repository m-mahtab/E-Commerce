import React from 'react';

import './App.css';
import Deals from './Components/Deals';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Vendors from './Components/Vendors';
import Newsletter from './Components/NewsLetter';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Vendors/>
      <Deals/>
      <Newsletter/>
      <Footer/>
     
    </div>
  );
}

export default App;
