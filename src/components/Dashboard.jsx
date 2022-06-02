import React from 'react';
import './Dashboardstyle.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import Admin from './Admin';
// import Profile from './Profile';
// import Courses from './Courses';

const Dashboard = () => {
  return (
    <div className='admin-container'>
      <div className='logo'>
        <Link to='/'><h1>Kodecamp</h1></Link>
      </div>
      <div className='admin-header'>
        <p>Welcome to Your Dashboard</p>
      </div>

      <div className='admin-content'>
        <Sidebar className='sidebar-container'/>
        <Outlet className='outlet'/>
      </div>
    </div>
  )
}

export default Dashboard