import React from 'react'
import { Ancla } from '../../UI/Ancla/Ancla'


export const Nav = () => {
  return (
    <nav className='navBar'>
        <Ancla Style='ancla' url="/apiRick" texto="apiRick"></Ancla>
        <Ancla Style='ancla' url="/lista" texto="Lista"></Ancla>
        <Ancla Style='ancla' url="/reloj" texto="Reloj"></Ancla>
    </nav>
  )
}
