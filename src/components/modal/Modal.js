import React from 'react'
import Replay from './Replay'
import { Win } from './Win'
export const Modal = () => {
  return (
    <div className='modal'>
        <div className='modal__content'>
            <div className='container'>
            {/* <Win /> */}
            <Replay />

            </div>
        </div>
    </div>
  )
}
