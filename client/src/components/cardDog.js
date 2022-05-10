import React from "react";
import { useDispatch } from 'react-redux';
import { addDogFavorite } from '../actions/actions';
import "../components/cardDog.css";
import { Link } from "react-router-dom";
//import Loading from './loading';
import favico from "../img/favorito2.ico";

export const CardDog = (props) => {
  const dispatch = useDispatch();
  
  const { id, name, img, weight, temperament } = props;

function handleClick(){
  dispatch(addDogFavorite(props))
  alert("Agregado a Favoritos con Exito!!")
}

  return (
    <>
      <div className="container">
        <div className="card-home">
          <div className="imgBx">
            <Link to={`/dog/${id}`}>
              <img src={img} alt={name} />
            </Link>
          </div>

          <div className="contenido-card">
            <div className="titulo-fav">
              <h4>{name}</h4>
              <input
                type="image"
                src={favico}
                name="myButton"
                alt=''
                height="38"
                width="38"
                onClick={()=>handleClick()}
              />
            </div>
            <div className="peso">
              <h5>Peso: </h5>
              <div className="weight">
                <span>{weight}</span>
              </div>
            </div>
            <div className="temps">
              <h5>Temperamento:</h5>
              <p>{temperament}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
