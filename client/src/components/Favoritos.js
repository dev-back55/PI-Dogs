import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardDog } from '../components/cardDog';
import { useHistory } from 'react-router-dom';
import { clearDog } from '../actions/actions';
import './Favoritos.css';
// actions
//import { getFavorites } from '../actions/actions';


export const Favoritos = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const { dogsFavorite } = useSelector(state => state.ui);

    const handlegoback = () => {
      dispatch(clearDog())
      history.goBack()
    }
    

    return (
         <div className='container-fav'>
           
           <div className='container-btn'>
              <button className='btn-home' onClick={handlegoback}>Home</button>
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