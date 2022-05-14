import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByTemps } from '../actions/actions';
import './FiltrarTemps.css';

const FiltrarTemps = () => {

    const dispatch = useDispatch();
    //const { allDogs, temps } = useSelector(state => state.ui);
    const { dogsapi, temps } = useSelector(state => state.ui);
    

    function handleFilterTemps(e){
        
        dispatch(filterByTemps(dogsapi, e.target.value))
        
    }

    
  return (
    <div className='container-temps'>
        <label>Temperamentos :</label>
        <select onChange={e => handleFilterTemps(e)}>
            {
                temps.sort()?.map(temp =>(
                    <option value={temp.temperament} key={temp.id}>{temp.temperament}</option>
                    ))

            }
        </select>
    </div>
  )
}

export default FiltrarTemps