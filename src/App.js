import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Admin from "./components/Admin";
// import Admin from './Admin';
import Profile from './components/Profile';
import Courses from './components/Courses';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>       
        <Route path='/Dashboard' element={<Dashboard />}>
          <Route path='Admin' element={<Admin />} />
          <Route path='Profile' element={<Profile />} />
          <Route path='Courses' element={<Courses />} />
        </Route>       
      </Routes>
    </>
  );
}

export default App;
