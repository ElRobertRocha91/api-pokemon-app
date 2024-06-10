import axios from "axios";
import { GET_POKEMONS } from "./action-types";

{/* ========================== getPokemons ===========================
    Función para obtener la info de los ppokemones de la APIs cuando se ingrese al "/Home"
    donde dispatch dispara la acción y devolcemos un objeto con dos propiedades
    el tipo de acción y la data de los pokemones
*/}

export function getPokemons() {
    return async function (dispatch) {
        const data = await axios.get("");
        return dispatch({
            type: GET_POKEMONS,
            payload: data,
        })
    }
}