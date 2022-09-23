import React from 'react'
import { Oicon } from '../icons/Oicon'
import { Xicon } from '../icons/Xicon'

export const Start = () => {
  return (
    <div className='start'>
 
    <div className='start__header'>
    <Xicon />  
    <Oicon />  
    </div>
    <div className='card shadaw-gray'>
     <h1 className='text-lg'> wach a M3alam </h1>
     <div className='start__players'>
      <span className='start__players--active'>
       <Xicon color="dark"/>      </span>
      <span><Oicon  color="light"/></span>
     </div>
     <p className='text-light'>remember: x howa lawal</p>
    </div>
    <div className='start_btns'></div>
        <button className='btn btn-yellow'>new game (vs CPU) </button>
        <button className='btn btn-blue'>new game (vs player) </button>
    </div>
  )
}