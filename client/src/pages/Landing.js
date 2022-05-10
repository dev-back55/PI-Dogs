import React from 'react';
import '../pages/Landing.css';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className="landing">
      <div id='titulo'>
            <h1>Bienvenidos al eBook Canino</h1>
      </div>
      <div className='btn-ingresar'>      
            <Link to="/home" className="myButton">INGRESAR</Link>
      </div>      
    </div>
  )
}
