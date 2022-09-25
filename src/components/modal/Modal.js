import React from 'react'
import { useContext } from 'react'
import Replay from './Replay'
import { Win } from './Win'
import {ModalContext} from "../../context/ModalContext"
export const Modal = () => {
  const {show , modalMode} = useContext(ModalContext)
  return (
    <>
    {show && (
    <div className='modal'>
        <div className='modal__content'>
            <div className='container'>
              {modalMode === "winer" &&  <Win /> }
              {modalMode === "start" &&   <Replay /> }
           
          

            </div>
        </div>
    </div>
    )}
   
    </>
  )
}
