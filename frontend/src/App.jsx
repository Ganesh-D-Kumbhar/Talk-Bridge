import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SettingsPage from './pages/SettingsPage/SettingsPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import { useAuthStore } from './store/userAuthStore.js';
function App() {
  const {authUser, checkAuth} = useAuthStore();
  useEffect(()=>{
    checkAuth()
  }, [checkAuth])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
