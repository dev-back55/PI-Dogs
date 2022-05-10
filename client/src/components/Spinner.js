import React from 'react'
import spinning from '../img/spinning.gif';

const Spinner = () => {
  return (
    <img src={spinning} style={{width: '200px', margin: 'auto', display: 'block'}} alt='Cargando' />
  )
}

export default Spinner