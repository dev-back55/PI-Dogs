import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogName } from '../actions/actions';
import './SearchBar.css';



const SearchBar = () => {
  const dispatch = useDispatch();
  const[name, setName] = useState('');

function handleInputChange(e){
  
  setName(e.target.value)

}

function handleSubmit(e){
  e.preventDefault()
  dispatch(getDogName(name)) 
  
}

  return (
    
    <div>
      <input
        type= 'text'
        placeholder='Buscar...'
        onChange={(e)=>handleInputChange(e)}
      />
      <button type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>
  )
}

export default SearchBar