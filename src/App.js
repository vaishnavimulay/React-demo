import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfile from './components/Textfile';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert('Dark mode has been enabeled.','success')
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode has been enabeled.','success')
      }
  }
  const showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type: type
      });
      setTimeout(() =>{
        setAlert(null);
      },2000);
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" homeText="Home" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className='container my-3'>
        <Routes>
            <Route exact path="/" element={<Textfile showAlert={showAlert} title="Enter the text" mode={mode} />} />
            <Route exact path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
