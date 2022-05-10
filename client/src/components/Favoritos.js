import React from 'react';
import { useSelector } from 'react-redux';
import { CardDog } from '../components/cardDog';
import { Link } from 'react-router-dom';
import './Favoritos.css';
// actions
//import { getFavorites } from '../actions/actions';


export const Favoritos = () => {
    const { dogsFavorite } = useSelector(state => state.ui);

    
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getFavorites(favoritos))
    // },[dispatch])

    return (
         <div className='container-fav'>
           
           <div className='container-btn'>
              <Link to='/home'><button className='btn-home'>Home</button></Link>
           </div>

           <div className='container-titulo' >
            <h1>Mis Favoritos</h1>
           </div> 
           
           <div className='container-card'>
                { 
                  dogsFavorite?.map(dog =>(
                      <CardDog key={dog.id} {...dog} />
                  ))
                }
           </div>      
        </div>
      ) 
}