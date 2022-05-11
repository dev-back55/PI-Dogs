import React, { useEffect, useState } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getTemps } from '../actions/actions';
import { CardDog } from '../components/cardDog';
import { Link } from 'react-router-dom';
import Pagina from '../components/pagina';
import SearchBar from '../components/SearchBar';
import Filtrar from '../components/Filtrar';
import FiltrarTemps from '../components/FiltrarTemps';
import Ordenar from '../components/Ordenar';
import Spinner from '../components/Spinner';

export const Home = () => {
    const dispatch = useDispatch()

    const { dogsapi } = useSelector(state => state.ui);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        
         dispatch(getDogs());
         
     },[dispatch])
     
    useEffect(() => {
        dispatch(getTemps())
    },[dispatch])

    //? paginado de flechas
     const maxpage = Math.ceil(dogsapi?.length / 8)

     const dogToShow = () => {
         const dogShow = dogsapi?.slice(
             (currentPage - 1 ) * 8,
             (currentPage - 1 ) * 8 + 8
         )
         return dogShow
     }

   
  return (
    <>
        <nav className="main-navbar">
            <ul className="navbar-container">
                <li className="logo">
                    <a href="/home" className="navbar-link">
                        <svg aria-hidden="true" focusable="false" className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 208C288 216.8 280.8 224 272 224C263.2 224 255.1 216.8 255.1 208C255.1 199.2 263.2 192 272 192C280.8 192 288 199.2 288 208zM256.3-.0068C261.9-.0507 267.3 1.386 272.1 4.066L476.5 90.53C487.7 95.27 495.2 105.1 495.9 118.1C501.6 213.6 466.7 421.9 272.5 507.7C267.6 510.5 261.1 512.1 256.3 512C250.5 512.1 244.9 510.5 239.1 507.7C45.8 421.9 10.95 213.6 16.57 118.1C17.28 105.1 24.83 95.27 36.04 90.53L240.4 4.066C245.2 1.386 250.7-.0507 256.3-.0068H256.3zM160.9 286.2L143.1 320L272 384V320H320C364.2 320 400 284.2 400 240V208C400 199.2 392.8 192 384 192H320L312.8 177.7C307.4 166.8 296.3 160 284.2 160H239.1V224C239.1 259.3 211.3 288 175.1 288C170.8 288 165.7 287.4 160.9 286.2H160.9zM143.1 176V224C143.1 241.7 158.3 256 175.1 256C193.7 256 207.1 241.7 207.1 224V160H159.1C151.2 160 143.1 167.2 143.1 176z"/>
                        </svg>
                        <span className="link-text">eBook Canino</span>
                    </a>
                </li>
                <li className="navbar-item">
                    <Link to="/dog/crear" className="navbar-link">
                        <svg className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V198.6C310.1 219.5 256 287.4 256 368C256 427.1 285.1 479.3 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM448 303.1C448 295.2 440.8 287.1 432 287.1C423.2 287.1 416 295.2 416 303.1V351.1H368C359.2 351.1 352 359.2 352 367.1C352 376.8 359.2 383.1 368 383.1H416V431.1C416 440.8 423.2 447.1 432 447.1C440.8 447.1 448 440.8 448 431.1V383.1H496C504.8 383.1 512 376.8 512 367.1C512 359.2 504.8 351.1 496 351.1H448V303.1z"/>
                        </svg>
                        <span className="link-text">Crear Raza</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/dog/favoritos" className="navbar-link">
                        <svg className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M256 368C256 403.7 266.6 436.9 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C103.6 15.73 186.5 24.72 236.5 75.67L256.4 96.64L275.4 75.67C325.4 24.72 407.3 15.73 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C484.3 198 458.8 192 432 192C334.8 192 256 270.8 256 368zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM476.7 324.7L416 385.4L387.3 356.7C381.1 350.4 370.9 350.4 364.7 356.7C358.4 362.9 358.4 373.1 364.7 379.3L404.7 419.3C410.9 425.6 421.1 425.6 427.3 419.3L499.3 347.3C505.6 341.1 505.6 330.9 499.3 324.7C493.1 318.4 482.9 318.4 476.7 324.7H476.7z"/>
                        </svg>
                        <span className="link-text">Favoritos</span>
                    </Link>
                </li> 
                <li className="navbar-item">
                    <Link to="/dog/acercade" className="navbar-link">
                        <svg className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/>
                        </svg>
                        <span className="link-text">Acerca de</span>
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">
                        <svg className="fa-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256V32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V256zM80 256C80 353.2 158.8 432 256 432C353.2 432 432 353.2 432 256C432 201.6 407.3 152.9 368.5 120.6C354.9 109.3 353 89.13 364.3 75.54C375.6 61.95 395.8 60.1 409.4 71.4C462.2 115.4 496 181.8 496 255.1C496 388.5 388.5 496 256 496C123.5 496 16 388.5 16 255.1C16 181.8 49.75 115.4 102.6 71.4C116.2 60.1 136.4 61.95 147.7 75.54C158.1 89.13 157.1 109.3 143.5 120.6C104.7 152.9 80 201.6 80 256z"/>
                        </svg>
                        <span className="link-text">Salir</span>
                    </Link>
                </li>    
            </ul>
        </nav>
        
        <main>
          <div className='container-navbar'>
                <Filtrar />
                <FiltrarTemps />
                <Ordenar />
                <SearchBar />
                <Pagina currentPage={currentPage} setCurrentPage={setCurrentPage} maxpage={maxpage}></Pagina>

          </div>
               {               
                 !dogToShow()?.length
                 ? <Spinner />
                 : dogToShow()?.map(dog =>(
                    <CardDog key={dog.id} {...dog} />
                 ))
               }
            
        </main>
    </>
  )
}

/* { !dogToShow()?.length */