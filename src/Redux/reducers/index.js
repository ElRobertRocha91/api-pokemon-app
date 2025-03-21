import { GET_DETAILS, 
    GET_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_TYPES, 
    ORDER_BY_ATTACK, 
    ORDER_BY_NAME, 
    ORDER_BY_TYPES, 
    CREATE_POKEMON } from "../actions/action-types";

const initialState = {
    pokemons: [],
    copyPokemons: [],
    newPokemon: [],
    details: [], 
    types: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {// Aqui indagamos el tipo de acción que nos llega, para ejecutar la acción correspondiente
    case GET_POKEMONS:
        const data = action.payload
        const newData = state.newPokemon
        return {
            ...state,
            pokemons: data.concat(newData),
            copyPokemons: data.concat(newData),
        }
    case GET_POKEMON_BY_NAME:
        return {
            ...state,
            pokemons: action.payload
        }
    case GET_DETAILS:
        return {
            ...state,
            details: action.payload
        }
    case GET_TYPES:
        return {
            ...state,
            types: action.payload
        }
    case ORDER_BY_NAME:
        const copyState = state.copyPokemons;
        if(action.payload === "Order-Letter"){
            return {
                ...state,
                pokemons: copyState.sort((a, b) => a.id - b.id),
            }
        }
        // Ordenamiento de la A a la Z, si es false la condición ordenara de la Z a la A.
        const pokeOrder = action.payload === "A-Z" ? 
        copyState.sort((a, b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()){
                return 1;
            }
            if(b.name.toLowerCase() > a.name.toLowerCase()){
                return -1;
            }
            return 0;
        }) : 
        copyState.sort((a, b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()){
                return -1;
            }
            if(b.name.toLowerCase() > a.name.toLowerCase()){
                return 1;
            }
            return 0;
        });
        // Retornamos el Obj con el tipo de acción recibida y el estado ordenado.
        return {
            ...state,
            pokemons: pokeOrder,
        }
    case ORDER_BY_ATTACK:
        const copyAttack = state.copyPokemons;
        if(action.payload === "Order-Attack"){
            return {
                ...state,
                pokemons: copyAttack.sort((a, b) => a.id - b.id),
            }
        }
        // Ordenamiento de Men a May, si es false la condición ordenara de May a Men
        const pokeAttack = action.payload === "Men-May" ? 
        copyAttack.sort((a, b) => {
            // Sí "a" es mayor a "b", entonces pone "a" detras de "b"
            if(a.attack > b.attack){
                return 1;
            }
            if(a.attack < b.attack){
                return -1;
            }
            return 0;
        }) : 
        copyAttack.sort((a, b) => {
            if(a.attack < b.attack){
                return 1;
            }
            if(a.attack > b.attack){
                return -1;
            }
            return 0;
        });
        return {
            ...state,
            pokemons: pokeAttack,
        }
    case ORDER_BY_TYPES:
        const copyTypes = state.copyPokemons;
        const pokeTypes = action.payload === "All" ? 
        copyTypes : 
        copyTypes.filter(el => el.types.includes(action.payload));
        return {
            ...state,
            pokemons: pokeTypes,
        }
    case CREATE_POKEMON:
        return {
            ...state,
            newPokemon: [...state.newPokemon, action.payload],
        }
    default:
        return  {
            ...state
        };
    }
}

export default rootReducer;