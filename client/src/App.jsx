
import './App.css'
import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage';
import Login from './components/Login';
import Home from './components/Home';
import { getToken } from './helper/sessionHelper';
function App() {
  if(getToken()){
    return (
      <>
        <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/registration" element={<RegistrationPage/>}/>
                      <Route path="/login" element={<Login/>}/>
                  </Routes>
          </BrowserRouter>
      </>
    )
  }

  else{
    return (
      <>
        <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Navigate to="/login" replace/>}/>
                      <Route path="/registration" element={<RegistrationPage/>}/>
                      <Route path="/login" element={<Login/>}/>
                  </Routes>
          </BrowserRouter>
      </>
    )
  }

 
}

export default App
