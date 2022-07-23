import React, { useState } from 'react'
import { Header } from '../../Layouts/Header/Header'

export const Reloj = () => {

    const [tiempo, setTiempo] = useState('');

    setInterval(function () {
        let tiempo = new Date();
        setTiempo(tiempo.toLocaleTimeString());
    }, 1000);

  return (
    <div className='container'>
        <Header></Header>
        <div className='container'>
            <h2>Reloj</h2>
            <hr className='tamano'/>
            <div className='reloj'>
                <h4>{tiempo}</h4>
            </div>

            <div className='cards'>
                <div></div>
            </div>
        </div>
    </div>
  )
}
