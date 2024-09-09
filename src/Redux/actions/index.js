import axios from "axios";
import { GET_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_DETAILS, GET_TYPES, 
    ORDER_BY_NAME, 
    ORDER_BY_ATTACK, 
    ORDER_BY_TYPES, 
    CREATE_POKEMON } from "./action-types";

{/* ========================== getPokemons ===========================
    Función para obtener la info de los pokemones de la APIs cuando se ingrese al "/Home"
    donde dispatch dispara la acción y devolvera un objeto con dos propiedades
    el tipo de acción y la data de los pokemones
*/}

// ======= APIs URL =======
const apiUrl = process.env.URL_API;
const apiUrlData = process.env.URL_TYPES;

export function getPokemons() {
    return async function (dispatch) {
        try {
            const res = await axios.get(apiUrl);
            const resNext = res.data.next;
            const res2 = await axios.get(resNext);
            const infoApi = res.data.results.concat(res2.data.results);
            // Data => [{name: "", url: ""}, {}, {}];
            
            const data = [];
            for(let i = 0; i < infoApi.length; i++){
                let obj = await axios(infoApi[i].url);
                data.push({
                    id: obj.data.id,
                    name: obj.data.name,
                    image: obj.data.sprites.other["official-artwork"].front_default,
                    attack: obj.data.stats[1].base_stat,
                    types: obj.data.types.map((el) => el.type.name).join(" - "),
                });
            }

            return dispatch({
                type: GET_POKEMONS,
                payload: data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTypes() {
    return async function (dispatch) {
        try {
            const res = await axios.get(apiUrlData);
            // console.log(res);
            const data = res.data.results.map((el) => el.name);
            return dispatch({
                type: GET_TYPES,
                payload: data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getPokemonByName(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(apiUrl + name.toLowerCase());
            const infoApi = res.data;
            const data = [{
                id: infoApi.id,
                name: infoApi.name,
                image: infoApi.sprites.other["official-artwork"].front_default,
                types: infoApi.types.map((el) => el.type.name).join(" - "),
                live: infoApi.stats[0].base_stat,
                attack: infoApi.stats[1].base_stat,
                defense: infoApi.stats[2].base_stat,
                velocity: infoApi.stats[5].base_stat,
                height: infoApi.height,
                weight: infoApi.weight,
            }];
            // console.log(data);
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(apiUrl + id);
            const infoApi = res.data;
            const data = [{
                id: infoApi.id,
                name: infoApi.name,
                image: infoApi.sprites.other["official-artwork"].front_default,
                types: infoApi.types.map((el) => el.type.name).join(" - "),
                live: infoApi.stats[0].base_stat,
                attack: infoApi.stats[1].base_stat,
                defense: infoApi.stats[2].base_stat,
                velocity: infoApi.stats[5].base_stat,
                height: infoApi.height,
                weight: infoApi.weight,
            }];
            return dispatch({
                type: GET_DETAILS,
                payload: data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload,
    }
}

export function orderByAttack(payload) {
    return {
        type: ORDER_BY_ATTACK,
        payload,
    }
}

export function orderByTypes(payload) {
    return {
        type: ORDER_BY_TYPES,
        payload,
    }
}

export function createPokemon(payload) {
    return {
        type: CREATE_POKEMON,
        payload,
    }
}