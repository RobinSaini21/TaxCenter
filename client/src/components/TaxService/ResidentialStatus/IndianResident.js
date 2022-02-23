import React from 'react';
import { userisindian } from '../../../Store/actions/ResidentActions';
import { useDispatch } from 'react-redux';


function IndianResident() {
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(userisindian())
    }
  return (
    <div>
  
        <button onClick={handleClick} >Indian Resident</button>

    </div>
  )
}

export default IndianResident