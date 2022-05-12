import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByName } from '../actions/actions';
import './Ordenar.css';

const Ordenar = () => {

    const dispatch = useDispatch();
    const { dogsapi } = useSelector(state => state.ui);
    

    function handleOrdenarByName(e){
      
        dispatch(orderByName(dogsapi, e.target.value))
    }

    
  return (
    <div className='container-orderby'>
        <label>Ordenar :</label>
        <select onChange={e => handleOrdenarByName(e)}>
            <option value='asc'>A - Z</option>
            <option value='desc'>Z - A</option>
            <option value='pasc'>Peso Menor</option>
            <option value='pdesc'>Peso Mayor</option>
        </select>    
    </div>
  )
}

export default Ordenar