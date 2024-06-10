import { GET_POKEMONS } from "../actions/action-types";

const initialState = {
    pokemons: []
}

function rootReducer(state = initialState, action) {
    switch (action.payload) {// Aqui indagamos el tipo de acción que nos llega, para ejecutar la acción correspondiente
    case GET_POKEMONS:
        return {
            ...state,
            pokemons: action.payload
        }
    default:
        return  {
            ...state
        };
    }
}

export default rootReducer;