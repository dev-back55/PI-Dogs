import React, { useEffect } from 'react';
import './DogDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearDog, getDogDetail } from '../actions/actions';
import { useHistory } from 'react-router-dom';
import Spinner from '../components/Spinner';

export const DogDetail = ({match}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const matchId=match.params.id;

  useEffect(() => {
    dispatch(getDogDetail(matchId))
  },[dispatch, matchId]);
  
  const {dog} = useSelector(state => state.ui);
  const { id, name, img, height, weight, lifeSpan, temperament } = dog;

  const handlegoback = () => {
    dispatch(clearDog())
    history.goBack()
  }

if(!dog) { return <Spinner />}

  return (
        
       <div className='container-details'>  
        <div className='container-btn'>
        <button className='btn-home' onClick={handlegoback}>Volver</button>
        </div>
        <div className="container-card" key={id}>
            <div className="card-detail">
              <div className="imgBx">
                <img src={img} alt={name}/>
              </div>

              <div className="contenido-card">
                  <h2>{name}</h2>
                  <div className="peso">
                    <h3>Peso:</h3>
                    <span>{weight}</span>
                    <h3>Altura:</h3>
                    <span>{height}</span>
                    <h3>Esperanza de vida:</h3>
                    <span>{lifeSpan}</span>
                  </div>
                  <div className="temps">
                    <h3>Temperamento:</h3>
                    <p>{temperament}</p>
                  </div>
              </div>
            </div>
        </div>
      </div>    
  )    
      
}