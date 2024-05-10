
import './App.css'
import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage';
import Login from './components/Login';
import Home from './components/Home';
import { getToken } from './helper/sessionHelper';
import NewsfeedPage from './pages/NewsfeedPage';
import ProfilePage from './pages/ProfilePage';
import FriendsProfile from './components/FriendsProfile';
function App() {
  if(getToken()){
    return (
      <>
        <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<NewsfeedPage/>}/>
                      <Route path="/message" element={<Home/>}/>
                      <Route path="/registration" element={<RegistrationPage/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/profile" element={<ProfilePage/>}/>
                      <Route path="/friendsProfile/:id" element={<FriendsProfile/>}/>
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
                      <Route path="/" element={<Navigate to="/login" replace></Navigate>}/> 
                      <Route path="/registration" element={<RegistrationPage/>}/>
                      <Route path="/login" element={<Login/>}/>
                  </Routes>
          </BrowserRouter>
      </>
    )
  }

 
}

export default App
