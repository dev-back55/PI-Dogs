import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterId } from '../actions/actions';
import './Filtrar.css';

const Filtrar = () => {

    const dispatch = useDispatch();
    const { allDogs } = useSelector(state => state.ui);
    

    function handleFilterId(e){
      
        dispatch(filterId(allDogs, e.target.value))
    }


  return (
    <div className='container-api-db'>
        <label>Razas :</label>
        <select onChange={e => handleFilterId(e)}>
            <option value='All'>Todas</option>
            <option value='Api'>Razas de Api</option>
            <option value='DB'>Creadas</option>
        </select>
    </div>
  )
}

export default Filtrar