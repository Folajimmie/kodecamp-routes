import React from 'react';
import './Admin.css';
import DashBoardImg from '../assest/DashImg.png';

const Admin = () => {
  return (
    <div className='admin-content'>
        <div className='welcome-content'>
          <div className='welcome-address'>
          <p className='address-header'>WELCOME BACK,<br />USERNAME</p>
          <p className='address-p'>Check out the course page to see your<br /> course and helpful resources</p>
          </div>
          <div className='welcome-image'>
            <img src={DashBoardImg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Admin