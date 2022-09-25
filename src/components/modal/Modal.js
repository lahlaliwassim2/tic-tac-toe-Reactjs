import React from 'react'
import { useContext } from 'react'
import Replay from './Replay'
import { Win } from './Win'
import {ModalContext} from "../../context/ModalContext"
export const Modal = () => {
  const {show , showModal} = useContext(ModalContext)
  return (
    <>
    {show && (
    <div className='modal'>
        <div className='modal__content'>
            <div className='container'>
            {/* <Win /> */}
            <Replay />

            </div>
        </div>
    </div>
    )}
    <button onClick={showModal}>testModal</button>
    </>
  )
}
