import React from 'react'

export const Start = () => {
  return (
    <div className='start'>

    <div className='start_header'></div>
    <div className='card shadaw-gray'>
     <h1 className='text-lg'> Pick players 1'S mark</h1>
     <div className='start__players'>
      <span className='start__players--active'>
        x
      </span>
      <span>o</span>
     </div>
     <p className='text-light'>remember: x goes first</p>
    </div>
    <div className='start_btns'></div>
        <button className='btn btn-yellow'>new game (vs CPU) </button>
        <button className='btn btn-blue'>new game (vs player) </button>
    </div>
  )
}