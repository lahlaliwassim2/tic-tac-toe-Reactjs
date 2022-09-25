import {createContext, useState} from "react";

const ModalContext = createContext()

const ModalState = (props)=>{

        const [show , setShow] = useState(false)

        const showModal = ()=> setShow(true)
        const hideModal = () => setShow(false)
        

    return (
        <ModalContext.Provider value={
            show,
            showModal,
            hideModal
        }>
            {props.children}
        </ModalContext.Provider>
    )
   
}
export {ModalContext, ModalState};