import React from 'react'
import { Xicon } from '../icons/Xicon'
import { Oicon } from '../icons/Oicon'
export const  CardBoard = ({user = "nouser" , active , index }) => {
  return (
    <div className={`card  ${active && user ==="x" && 'shadaw-blue'} 
    ${active && user ==="o" && 'shadaw-yellow'} ${!active ?  'shadaw-gray' : 'active'} `}>
{user === "x" && <Xicon color={active && 'dark' } size = "lg"/> }
{user === "o" && <Oicon color={active && 'dark' } size = "lg"/> }
    </div>
  )
}
