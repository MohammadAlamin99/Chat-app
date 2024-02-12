
import './App.css'
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage';
import Login from './components/Login';
function App() {

  return (
    <>
      <BrowserRouter>
                <Routes>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
