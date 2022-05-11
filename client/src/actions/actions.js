import axios from 'axios';


//TIPOS DE ACCIONES

export const GET_DOGS = 'GET_DOGS';
export const GET_DOGID = 'GET_DOGID';
export const GET_DOGNAME = 'GET_DOGNAME';
export const GET_DOGS_DETAIL = 'GET_DOGS_DETAIL'; 
export const GET_TEMPS = 'GET_TEMPS';
export const ADD_DOG_FAVORITE = 'ADD_DOG_FAVORITE';
export const REMOVE_DOG_FAVORITE = 'REMOVE_DOG_FAVORITE';
export const SEARCH_DOG = 'SEARCH_DOG';
export const CREATE_DOG = 'CREATE_DOG';
export const FILTERID = 'FILTERID';
export const FILTEREDBYTEMPS = 'FILTEREDBYTEMPS';
export const ORDERBYNAME = 'ORDERBYNAME';
export const ORDERBYPESO = 'ORDERBYPESO';
export const POSTCREADOG = 'POSTCREADOG';
export const SHOWFAVORITES = 'SHOWFAVORITES';
export const CLEARDOG = 'CLEARDOG';


// Funciones creadoras de acciones
const apiDogs = 'http://localhost:3001/dogs'
const apiTemp = 'http://localhost:3001/temperaments'
const apiDogName = 'http://localhost:3001/dogs?name='

export function searchDogs(payload){
    return {
        type: SEARCH_DOG,
        payload: payload
    }
}

export function getFavorites(dogsFavorite){
  return function (dispatch){
    dispatch({type: SHOWFAVORITES, payload: dogsFavorite});
  }
}

export function getDogs() {
    return async function(dispatch) {
      return await fetch(apiDogs)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_DOGS", payload: json });
      });
    };
  }
  
  export function getTemps() {
    return async function(dispatch) {
      return await fetch(apiTemp)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_TEMPS", payload: json });
      });
    };
  }

  export function getDogDetail(id) {
  return async function(dispatch) {
    return await fetch(`${apiDogs}/${id}`)
    .then(response => response.json())
    .then(json => {
    dispatch({ type: "GET_DOGS_DETAIL", payload: json });
    });
  };
}

export function getDogName(name) {
  return async function(dispatch) {
    return await fetch(`${apiDogName}${name}`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "GET_DOGNAME", payload: json});
    })
    .catch(err => alert('No encontrado...'));
  }
}

export function clearDog(){
  
  return function (dispatch) {
    dispatch({type: CLEARDOG}) 
  }
}

export function postCreaDog (dog){
  return async function (dispatch){
    const response = await axios.post('http://localhost:3001/dogs', dog);
    console.log(response);
    dispatch({ type: "POSTCREADOG", payload: dog });
  }
}

export function filterId(dogs, value){
  let dogsFilterById = []
  dogsFilterById = [...dogs]
  
    if(value === 'All'){
        dogsFilterById = [...dogs]
    }

    if(value === 'DB'){
      dogsFilterById = dogs?.filter(elem=>typeof elem.id==='string')
    }

    if(value === 'Api'){
      dogsFilterById = dogs?.filter(elem=>typeof elem.id==='number')
    }
    
   

    if(!dogsFilterById.length){
			alert('No hay perritos en la Base de Datos');
      dogsFilterById = [...dogs]
    }
    
    return function (dispatch) {
      dispatch({type: FILTERID, payload: dogsFilterById}) 
    }
}

export function filterByTemps(dogs, value){
  const temperamentFilter = [...dogs];
	const filtrados = temperamentFilter?.filter(t => {
		if (t.temperament) {
			const dogTemperament = t.temperament.split(', ');
      return dogTemperament.includes(value);
		} else {
			return false;
		}
	});
  
	return function (dispatch) {
		dispatch({type: FILTEREDBYTEMPS, payload: filtrados});
	};
}

export function orderByName(dogs, indice){
  let sorted = []
  let weightmin=0;
  let weightmax=0;
  dogs.map(dog=>{
    if (dog.name === 'Smooth Fox Terrier') {
        dog.weight = [6, 8];
        weightmin=6;
        weightmax=8;
        dog.weightmin = weightmin
        dog.weightmax = weightmax
        return dog;
    }
    if (dog.name === 'Olde English Bulldogge') {
        dog.weight = [20, 30];
        weightmin=20;
        weightmax=30;
        dog.weightmin = weightmin
        dog.weightmax = weightmax
        return dog;
    }
    //console.log(dog.weight.metric)
    const dogsWeight = dog.weight.split(' - ');
    
    dog.weight=`${parseInt(dogsWeight[0])} - ${parseInt(dogsWeight[1])}`;
    weightmin=parseInt(dogsWeight[0]);
    weightmax=parseInt(dogsWeight[1]);
    
    if(isNaN(weightmin)) weightmin = 10
    if(isNaN(weightmax)) weightmax = 500
    
    dog.weight=`${weightmin.toString()} - ${weightmax.toString()}`;
    
    if(!dog.img) dog.img = 'https://cdn.discordapp.com/attachments/890950417737998397/895887865567920129/Dognut.png';
    dog.weightmin = weightmin
    dog.weightmax = weightmax
    
    return dog
});

    if(indice === 'asc'){
      sorted = dogs.sort(function (a, b) {
        if(a.name > b.name) {
          return 1;
        }
        if(b.name > a.name) {
          return -1;
        }
        return 0;
      })
    }
    if(indice === 'desc'){
      sorted = dogs.sort(function (a, b) {
        if(a.name > b.name) {
          return -1;
        }
        if(b.name > a.name) {
          return 1;
        }
        return 0;
      })
    }  
    if(indice === 'pasc'){
      sorted = dogs.sort(function (a, b) {
        if(a.weightmin > b.weightmin) {
          return 1;
        }
        if(b.weightmin > a.weightmin) {
          return -1;
        }
        return 0;
      })
    }
    if(indice === 'pdesc'){  
      sorted = dogs.sort(function (a, b) {
        if(a.weightmax > b.weightmax) {
          return -1;
        }
        if(b.weightmax > a.weightmax) {
          return 1;
        }
        return 0;
      })    
    }  
  return function (dispatch) {
    dispatch({type: ORDERBYNAME, payload: sorted});
  };
}

export function orderByPeso(dogs, indice){
  let sorted = indice === 'pasc' ?
      dogs.sort(function (a, b) {
        if(a.weight > b.weight) {
          return 1;
        }
        if(b.weight > a.weight) {
          return -1;
        }
        return 0;
      }) :
      dogs.sort(function (a, b) {
        if(a.weight > b.weight) {
          return -1;
        }
        if(b.weight > a.weight) {
          return 1;
        }
        return 0;
      })

  return function (dispatch) {
    dispatch({type: ORDERBYPESO, payload: sorted});
  };
}

export function createDog(dog) {
	return {type: CREATE_DOG, payload: dog};
}

export function addDogFavorite(dog){
// aca la logica
  return  function (dispatch){
     dispatch({type: ADD_DOG_FAVORITE, payload: dog});
  }
}

export function removeDogFavorite(id){

  // aca logica

  return function (dispatch){
    dispatch({type: "REMOVE_DOG_FAVORITE", id});
  }
}