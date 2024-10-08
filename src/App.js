import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import FormText from './component/FormText';
import About from './component/About';
// import Alert from './component/Alert';

import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';


import React, { useState } from "react";



function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState('null');

  // const showAlert = (message, type) => {
    // setAlert({
      // msg: message,
      // type: type
    // })
  // }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = '#042743';
      document.title = 'Textutils - DarkMode'
      // showAlert("Dark mode is Enable", "success");
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
      document.title = 'Textutils - LightMode'
      // showAlert("Light mode is Enable", "success");

    }
  }
 
  const buttonMode = ()=>{
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = 'silver';
      
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
  <>
 <Router>
  <Navbar title="Textutils" Abouttitle="Abouttextutils" mode={mode} toggleMode={()=>toggleMode()} buttonMode={()=>buttonMode()}/>
  {/* <Alert alert={alert}/> */}
  {/* <div className="container">
    <About/>
  </div> */}
  <div className="container my-2">

  
 <Routes>
            <Route path="/About" element={<About/>} />
</Routes>
< Routes>
            <Route path="/" element={<FormText form="Enter text to analyze" Buttontitle="Convert into uppercase" Buttontitle1="Convert into Lowercase" mode={mode}/>} />
</Routes>
         
      
  
  </div>
  </Router>
  
 </>

  )
}

export default App;
