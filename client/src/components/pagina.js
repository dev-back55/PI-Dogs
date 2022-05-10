import React from 'react';
import './pagina.css';
import previo from "../img/flecha-izquierda.png";
import siguiente from "../img/flecha-derecha.png";

const Pagina = ({currentPage, setCurrentPage, maxpage}) => {
  const prev = () => {
      if(currentPage > 1) setCurrentPage(currentPage - 1)
  }  
  const next = () => {
      if(currentPage<maxpage) setCurrentPage(currentPage + 1)
  }

  return (
    <div className='container-btn'>
        
            <button onClick={prev} type="button">
                <img src={previo} alt='' />
            
            </button>

            <button className='btn-page'>{currentPage}</button>
            
            <button onClick={next} type='button'>
                <img src={siguiente} alt='' />
            
            </button>
        
    </div>
    )
}

export default Pagina