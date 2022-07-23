import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { useState } from 'react'

export const Escribir = () => {
    
    const [nuevoTexto, setNuevo] = useState('');

    const ingresarLetras=() => {
        setNuevo(document.getElementById('texto').value)
    }

  return (
    <div className='container'>
        <Header></Header>
        <div className='container'>
            <h2>Escribir y mostrar</h2>
            <hr className='tamano'/>
            <label className='textoArriba' for="search">Escriba su nuevo Texto</label>
            <input className='texto' id="texto" type="text" onKeyUp={ingresarLetras}/>
            <p className='textoArriba'>Su nuevo texto es: {nuevoTexto}</p>
            <div className='cards'>
                <div></div>
            </div>
        </div>
    </div>
  )
}
