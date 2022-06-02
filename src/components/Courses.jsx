import React from 'react';
import './Courses.css';
import Database from '../Database.json';

const Courses = () => {
  return (
    <div className='course'>
      {
        Database && Database.map( database => {
          return(
            <div className='g-course' key={database.id}>
              <p className='d-name'>{database.name}</p>
              
            </div>
          )
        } )
      }
    </div>
  )
}

export default Courses