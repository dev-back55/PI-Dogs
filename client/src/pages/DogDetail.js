import React, { useEffect } from 'react';
import './DogDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDogDetail } from '../actions/actions';
import { Link } from 'react-router-dom';



export const DogDetail = ({match}) => {
  const dispatch = useDispatch();

  const matchId=match.params.id;
  const { dogsDb } = useSelector(state => state.ui);
  
  useEffect(() => {
    dispatch(getDogDetail(matchId))
    },[dispatch, matchId]);

   const { dog } = useSelector(state => state.ui);
   const { id, name, img, height, weight, lifeSpan, temperament } = dog;

   if(typeof matchId==='string'){
    const dog = dogsDb.filter(e => e.id === matchId)
    const { id, name, img, height, weight, lifeSpan, temperament } = dog;
  }
  
  
  return (
    
      <div className='container-details'>  
        <div className='container-btn'>
        <Link to='/home'><button className='btn-home'>Home</button></Link>
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