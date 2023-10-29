import React from 'react'

const Duties = ({duties}) => {

    {duties.map((duty,index)=>{
        return(
            <li key={duty._id}>
                <p>{duty}</p>
            </li>
        )
    })}
    
}

export default Duties
