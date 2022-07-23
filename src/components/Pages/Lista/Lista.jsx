import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { useState } from 'react'
import { useEffect } from 'react';

export const Lista = () => {
    
    const [lista, setLista] = useState([]);

    const mostrarLista=() => {
        let lista = ['salir','pasear','correr','programar'];
        setLista(lista);
    }

    const vaciarLista=() => {
        let lista = [];
        setLista(lista);
    }

    useEffect(()=>{
        const ul = document.querySelector('.ul')
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        lista.map(valor => {
            const punto = document.createElement('li');
            punto.textContent = valor;
            ul.appendChild(punto);
        }

        )
    },[lista])

  return (
    <div className='container'>
        <Header></Header>
        <div className='container'>
            <h2>Mostrar Lista</h2>
            <hr className='tamano'/>
            <ul className='ul'>
            </ul>
            <div className='botones'>
                <button className='botonVerde' onClick={mostrarLista}>Mostrar</button>
                <button className='botonRojo' onClick={vaciarLista}>Ocultar</button>
            </div>

            <div className='cards'>
                <div></div>
            </div>
        </div>
    </div>
  )
}
