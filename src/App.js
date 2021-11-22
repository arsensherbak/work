
import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './image/logo_shiroke.png';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';




function App() {

  
  return (
    <div className="app">
    <div className='wrapper'>
     <Header/>
     <Main/>
     <Footer/>
     </div>
    </div>
  );
}

export default App;
