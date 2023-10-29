import React from 'react'

const Side = ({job, setValue, index}) => {
  return (
    <div className='side-container'>
        <div className= 'title' onClick={()=>{
            setValue(index);
            console.log(index);
        }}>
            <h3>{job.company}</h3>
        </div>
      
    </div>
  )
}

export default Side
