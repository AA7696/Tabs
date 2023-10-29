import React, { useState } from 'react'
// import Duties from './Duties';

const MainContent = ({jobs, value}) => {
    const { company, dates, duties, title } = jobs[value];
  return (
    
    <div className='main-container'>
        <h2>{title}</h2>
        <button>{company}</button>
        <h4>{dates}</h4>

        <ul>
        {duties.map((duty)=>{
        return(
            <li key={duty._id}>
                <p>{duty}</p>
            </li>
        )
    })}

        </ul>
      
    </div>
  )
}

export default MainContent
