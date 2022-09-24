import React from 'react'
import { Xicon } from '../icons/Xicon'

export const Win = () => {
  return (
    <div className='score'>
            <p></p>
            <h3 className='scr-titre'>
                {" "} <Xicon />daha o daha </h3>
            <div className='score__btn'>
                <button className='btn btn-sm '>khroj</button>
                <button className='btn btn-sm btn-yellow'>3awd</button>
            </div>

    </div>
  )
}
