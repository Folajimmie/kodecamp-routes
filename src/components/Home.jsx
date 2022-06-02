import React from 'react'
import './Homestyles.css'
import BgImage from '../assest/BgImage1.png'
import { Link } from 'react-router-dom'
import {FaCrown} from "react-icons/fa";
import {FaBookOpen} from "react-icons/fa";
import {FaDice} from "react-icons/fa";

const Home = () => {
  return (
    <div className='homepage-container'>
        <div className='top-nav'>
            <div className='logo'>
              <Link to='/'><h1>Kodecamp</h1></Link>
            </div>
            <div className='login-btn'>
              <Link to='/Login'><button>LOGIN</button></Link>
            </div>
        </div>
        <section className='content'>
          <div className='welcome-text'>
            <p className='text-head'>Learn At Your Own<br />Pace and comfort</p>
            <p className='text-content'>We are a Technology Workforce Development company that helps people learn premium technology skills virtually and partners with companies to hire the best talents and invest in workforce development. Currently with learners from 19 countries.</p>
          </div>
          <div className='content-img'>
            <img src={BgImage} alt="" />
          </div>
          <div className="icons">
            <div className="icon1">
              <FaCrown className='crown'/>
            </div>
            <div className="icon2">
              <FaBookOpen className='open-book'/>
            </div>
            <div className="icon3">
              <FaDice className='dice'/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home