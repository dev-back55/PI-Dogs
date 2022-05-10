import React from 'react'
import './Acercade.css'
import { Link } from 'react-router-dom';

const AcercaDe = () => {
  return (
    <div className='container-total'>
        <div className='btn-home'>
        <Link to='/home'><button className='btn-home'>Home</button></Link>
        </div>
        <div className='container-acercade'>
    
        </div>
        <div className='box-texto'>
    
            <span>eBook Canino es una enciclopedia online de razas de perros.

                Se caracteriza por proveer al usuario la mayor actualización e información detallada del mundo canino.
                Le permite al usuario explorar, buscar y adicionar razas caninas a la base de datos propia.
                Cuenta con filtros por temperamentos, tanto de las razas existentes o creadas en el eBook canino.
                Además posee ordenamientos según su nombre o peso y búsqueda por nombre de la raza.
                También puede guardar su raza favorita si así lo desea.

                Bienvenidos al eBook Canino,
                                                            por Alberto Horacio Abitú
                                                                                               - Full Stack Developer -


            Fuentes:
            TheDogApi.com // 
            Imagenes: Pixabay.com - Pexels.com // 
            Iconos: Fonts.awesome.com - Icon-icons.com/es/ - Flaticon.es</span> 
      
        </div>
    </div>
  )
}

export default AcercaDe