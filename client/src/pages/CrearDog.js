import React, { useEffect, useState } from 'react';
import './CrearDog.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTemps, postCreaDog } from '../actions/actions';
import { Link, useHistory } from 'react-router-dom';

// validacion
export function validate(dog){

  let errors = {};

  if (!/^[a-z ,.'-]+$/i.test(dog.username)) {
    errors.username = 'Nombre invalido, no se adminten numeros';
  } else if(!dog.name) {
    errors.name = 'Se requiere un Nombre de Raza'
  }

  if(!dog.heightmin){
    errors.heightmin = 'Debe ingresar un valor'
  }

  if(!dog.heightmax){
     errors.heightmax = 'Debe ingresar un valor'
  }else if(dog.heightmax < dog.heightmin) {
    
    errors.heightmax = 'Altura maxina no puede ser menor a Altura minima'
  }

  if(!dog.weightmin){
    errors.weightmin = 'Debe ingresar un valor'
  }
  
  if(!dog.weightmax){
     errors.weightmax = 'Debe ingresar un valor'
  }else if(dog.weightmax < dog.weightmin) {
    
    errors.weightmax = 'Peso maximo no puede ser menor a Peso minimo'
  }

       
  return errors;
}

export const CrearDog = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTemps())
  },[dispatch])

  const { temps } = useSelector(state => state.ui);
  const [errors, setErrors] = useState({});
  const [pesomin, setPesomin] = useState('');
  const [pesomax, setPesomax] = useState('');
  const [alturamin, setAlturamin] = useState('');
  const [alturamax, setAlturamax] = useState('');
  const [edadmin, setEdadmin] = useState('');
  

  const [dog, setDog] = useState({
    name:'',
    height: '',
    weight: '',
    lifeSpan: '',
    img:'',
    selectedTemps:[],
    heightmin: 0,
    heightmax: 0,
    weightmax: 0,
    weightmin: 0,
    lifeSpanmin: 0
  })

  
  

  function handleChange(e) {
		setDog({
			...dog,
			[e.target.name]: e.target.value
		});

    setErrors(validate({
      ...dog, 
      [e.target.name]: e.target.value
    }))
	}

  function handlePesomin(e) {
    let pemin = '';
    pemin = pemin + (e.target.value).toString()
		 setPesomin(pemin)
     setDog({
      ...dog,
			[e.target.name]: e.target.value
     })
     setErrors(validate({
      ...dog,
      [e.target.name]: e.target.value
    }))
   }
  
   function handlePesomax(e) {
      let pemax = '';
      pemax = pemax + (e.target.value).toString() 
		 setPesomax(pemax)
     setDog({
      ...dog,
			[e.target.name]: e.target.value
     })
     setErrors(validate({
       ...dog,
       [e.target.name]: e.target.value
     }))  
      
   }

  function handleAlturamin(e) {
    let altmin = '';
    altmin = altmin + (e.target.value).toString()
		 setAlturamin(altmin )
     setDog({
      ...dog,
			[e.target.name]: e.target.value
     })
     setErrors(validate({
      ...dog,
      [e.target.name]: e.target.value
    }))
  }
  function handleAlturamax(e) {
    let altmax = '';
    altmax = altmax + (e.target.value).toString()
    setAlturamax(altmax)
    setDog({
      ...dog,
			[e.target.name]: e.target.value
     })
    setErrors(validate({
      ...dog,
      [e.target.name]: e.target.value
    }))
  }

  function handleEdad(e) {
    let edmin = '';
    edmin = edmin + (e.target.value).toString()
		 setEdadmin(edmin)
     setDog({
      ...dog,
			[e.target.name]: e.target.value
     })
     
  }
  
  
  function handleSelect(e){
    let haytemp = dog.selectedTemps.find(temp => temp === e.target.value)
    if (!haytemp){
      setDog({
        ...dog,
        selectedTemps: [...dog.selectedTemps, e.target.value],
        height: `${alturamin} - ${alturamax}`,
        weight: `${pesomin} - ${pesomax}`,
        lifeSpan: `${edadmin} años`
      })
    }else alert("Temperamento ya seleccionado...!");
  }

  function handleSubmit(e){
    e.preventDefault();
    if(dog.name !== '' || dog.height !== '' || dog.weight !== ''){
        dispatch(postCreaDog(dog))
        alert("Raza Creada con Exito!!")
        setDog({
          name:'',
          height: '',
          weight: '',
          lifeSpan: '',
          img:'',
          selectedTemps:[],
          heightmin: 0,
          heightmax: 0,
          weightmax: 0,
          weightmin: 0,
          lifeSpanmin: 0
        })
    }else alert('Faltan datos no se puede Crear Perrito!') 
  history.push('/home')
  }

  return (
    <div className='container-form'>
        
        <h1>Crear Raza</h1>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label className='form-label'>Nombre:</label>
                <input className='form-input'
                   type="text"
                   placeholder='nombre'
                   value={dog.name}
                   name="name"
                   
                   onChange={(e) => handleChange(e)}
                 />
                 { errors.name && 
                   <p className='error'>{errors.name}</p>
                 }
            </div>
            <div>
                <label className='form-label'>Altura en cm.:</label>
                <input className='form-input'
                   type="number"
                   placeholder="altura minima"
                   //value={dog.heightmin}
                   name="heightmin"
                   //required
                   onChange={(e) => handleAlturamin(e)}
                   />
                   {errors.heightmin && (
                   <p className='error'>{errors.heightmin}</p>
                    )}
                <input className='form-input'
                   type="number"
                   placeholder="altura maxima"
                   //value={dog.heightmax}
                   name="heightmax"
                   //required
                   onChange={(e) => handleAlturamax(e)}
                   />   
                    {errors.heightmax && (
                   <p className='error'>{errors.heightmax}</p>
                    )}
            </div>
            <div>
                <label className='form-label'>Peso en kg.:</label>
                <input className='form-input'
                   type="number"
                   placeholder="peso minimo"
                   //value={dog.weightmin} 
                   name="weightmin"
                   //required
                   onChange={(e) => handlePesomin(e)}
                   />
                   {errors.weightmin && (
                   <p className='error'>{errors.weightmin}</p>
                    )}
                   <input className='form-input'
                   type="number"
                   placeholder="peso maximo" 
                   //value={dog.weightmax} 
                   name="weightmax"
                   //required
                   onChange={(e) => handlePesomax(e)}
                   />
                   {errors.weightmax && (
                   <p className='error'>{errors.weightmax}</p>
                    )}
            </div>
            <div>
                <label className='form-label'>Esperanza de vida -años-:</label>
                <input className='form-input'
                   type="number"
                   placeholder="años de vida" 
                   //value={dog.lifeSpanmin} 
                   name="lifeSpanmin"
                   onChange={(e) => handleEdad(e)}
                   />
                   
            </div>
            <div>
                <label className='form-label'>Imagen:</label>
                <input className='form-input'
                   type="text"
                   placeholder='imagen'
                   value={dog.img}
                   name="img"
                   //required
                   onChange={(e) => handleChange(e)}
                 />
            </div>
            <div>
                <label className='form-label'>Temperamento</label>
                <select className='form-select'
                    
                   name="selectedTemps"
                   required
                   onChange={e => handleSelect(e)}
                   >
                     <option>Elija Temperamento</option>
                     {
                        temps?.map(temp =>(
                          <option value={temp.temperament} key={temp.id}>{temp.temperament}</option>
                          ))

                     }

                </select>     
            </div>
            <div className='form-lista-temp'>
            <ul><li>{dog.selectedTemps.map(e => e + ' - ')}</li></ul>
            </div>
            <div className='container-btn'>
            <Link to='/home'><button className='btn-volver'>Cancelar</button></Link>
            <button className='btn-submit' type='submit'>Agregar Raza</button>
            </div>
        </form>


    </div>
  )
}
