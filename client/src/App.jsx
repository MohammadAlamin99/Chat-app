
import './App.css'
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage';
import Login from './components/Login';
import Home from './components/Home';
function App() {

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

export default App
