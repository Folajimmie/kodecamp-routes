import React from 'react';
import './SidebarStyles.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='dashboard-links'>
        <li>
            <Link to='/Dashboard/Admin'>ADMIN</Link>
          </li>
          <li>
            <Link to='/Dashboard/Courses'>COURSE</Link>
          </li>
          <li>
            <Link to='/Dashboard/Profile'>PROFILE</Link>
          </li>

          <div className='logout'>
            <button>Sign Out</button>
          </div>
       </ul>
    </div>
  )
}

export default Sidebar