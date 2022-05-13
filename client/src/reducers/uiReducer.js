import { GET_DOGS, GET_DOGID, SEARCH_DOG, CREATE_DOG, GET_TEMPS, GET_DOGS_DETAIL, GET_DOGNAME, FILTERID, FILTEREDBYTEMPS, ORDERBYNAME, ORDERBYPESO, POSTCREADOG, ADD_DOG_FAVORITE, SHOWFAVORITES, CLEARDOG } from '../actions/actions'

const initialState = {
    dogsapi:[],
    dogsDb:[],
    allDogs:[],
    dog:{},
    dogsFavorite:[],
    temps:[],
    name:'', height:['',''], weight:['',''], lifeSpan:['',''],
    img:'', selectedTemps:[],
}

export function uiReducer(state = initialState, { type, payload }) {
    switch (type) {

        case GET_DOGS:
            return { ...state, dogsapi: payload, allDogs: payload };

        case GET_DOGS_DETAIL:
            return { ...state, dog: payload };

        case SEARCH_DOG:
            return { ...state, search: payload };

        case GET_DOGID:
            return { ...state, dog: payload };

        case GET_TEMPS:
            return { ...state, temps: payload };

        case CREATE_DOG:
            return {
                ...state,
                dogsapi: [...state.dogsapi, payload]
            };
        
        case POSTCREADOG:
            return {
                ...state,
                dogsapi: [...state.dogsapi, payload],
                allDogs: [...state.allDogs, payload],
                dogsDb: [...state.dogsDb, payload]
            }    

        case GET_DOGNAME:
            return { ...state, dogsapi: payload }    

        case FILTERID:
            return { ...state, dogsapi: payload}
        
        case FILTEREDBYTEMPS:     
            return { ...state, dogsapi: payload}
            
        case ORDERBYNAME:
            return { ...state, dogsapi: payload}    
        
        case ORDERBYPESO:
            return { ...state, dogsapi: payload}
        
        case SHOWFAVORITES:
            return { ...state, dogsapi: payload}    
            
        case ADD_DOG_FAVORITE:
            return { ...state,
                dogsFavorite: [...state.dogsFavorite, payload]}    
        
        case CLEARDOG:
            return {...state,
                 dog: {},
                 dogsapi: []
                }

        default:
           return state;

        }
}

module.export={
    uiReducer
}