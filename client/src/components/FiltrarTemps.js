import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByTemps } from '../actions/actions';
import './FiltrarTemps.css';

const FiltrarTemps = () => {

    const dispatch = useDispatch();
    const { allDogs, temps } = useSelector(state => state.ui);
    

    function handleFilterTemps(e){
        
        dispatch(filterByTemps(allDogs, e.target.value))
        
    }

    // function cargarTemps() {
    //     var newTempsName = []
    //     for(let i=0; i < temps.length; i++){
    //         newTempsName.push(temps[i].temperament)
    //     }
        
    //     newTempsName.sort();
    //     console.log(newTempsName)
           
    //    var select = document.getElementsByName('temperamentos')[0];
       
    //     newTempsName.forEach(e => {
    //      var option = document.createElement("option");
    //      option.text = e;
    //      select.add(option);
    //     })
    // }
    
//cargarTemps();

  return (
    <div className='container-temps'>
        <label>Temperamentos :</label>
        <select onChange={e => handleFilterTemps(e)}>
            {
                temps.sort()?.map(temp =>(
                    <option value={temp.temperament} key={temp.temperament}>{temp.temperament}</option>
                    ))

            }
        </select>
    </div>
  )
}

export default FiltrarTemps