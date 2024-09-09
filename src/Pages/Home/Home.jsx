import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, orderByName, orderByAttack, orderByTypes } from "../../Redux/actions/index.js";
import { Link } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import Loading from "../../Components/Loading/Loading.jsx";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Paginate from "../../Components/Paginate/Paginate";
import Card from "../../Components/Card/Card";
import Footer from "../../Layout/Footer/Footer";
import style from "./Home.module.css";

function Home() {
    const dispatch = useDispatch();
    const listPokemons = useSelector((state) => state.pokemons);
    const listTypes = useSelector((state) => state.types);
    const [order, setOrder] = useState(""); // ==>> Estado para trabajar los ordenamientos
    
    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    }, [dispatch]);

    // ===== Paginado ======
    const [pageCurrent, setPageCurrent] = useState(1);
    const pokemonByPage = 12;

    const indexOfLastPokemon = pageCurrent * pokemonByPage; // 1 * 12 = 12
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonByPage; // 12 - 12 = 0
    const pokemonCurrent = listPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon); // (0, 12) => Devolvemos un array con los 12 primeros pokemones
    // console.log(pokemonCurrent);
    const paginado = (numberPage) => {
        setPageCurrent(numberPage);
    }

    // ===== Click para limpiar página =====
    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
    }

    // Filtro para ordenar de la A-Z y Z-A
    // == Despacho la acción que nos llegue para ordenar ==
    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setPageCurrent(1);
        setOrder(`Ordenado ${e.target.value}`);
    }

    // Filtro para ordenar por nivel de ataque May-Men y Men-May
    function handleAttack(e) {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setPageCurrent(1);
        setOrder(`Ordenado${e.target.value}`);
    }

    // Filtro para filtrar por tipo de pokemon
    function handleFilterByTypes(e) {
        console.log(e.target.value);
        dispatch(orderByTypes(e.target.value));
        setOrder(`${e.target.value}`);
    }

    // Filtro para buscar por origen API o Creados por el cliente
    function handleFilterByOrigin() { }

    return (
        <>
            {
                Object.keys(pokemonCurrent).length > 0 && pokemonCurrent[0].image ?
                    <>
                        <Navbar />
                        <div className={style.home}>
                            {/* Botones */}
                            <div>
                                <button
                                    className={style.button}
                                    onClick={e => { handleClick(e) }}>
                                    Clean
                                </button>
                                <Link to="/form"
                                    className={style.button}>
                                    Create
                                </Link>
                            </div>
                            {/* Selectores de filtros y ordenamientos */}
                            <div>
                                <select
                                    className={style.select}
                                    onChange={e => handleSort(e)}
                                >
                                    <option value="Order-Letter">Order by letter</option>
                                    <option value="A-Z">A-Z</option>
                                    <option value="Z-A">Z-A</option>
                                </select>
                                <select
                                    className={style.select}
                                    onChange={e => handleAttack(e)}
                                >
                                    <option value="Order-Attack">Order by attack</option>
                                    <option value="Men-May">Men-May</option>
                                    <option value="May-Men">May-Men</option>
                                </select>
                                <select
                                    className={style.select}
                                    onChange={e => handleFilterByTypes(e)}
                                >
                                    <option key="All" value="All">Type of Pokemon</option>
                                    {
                                        listTypes && listTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))
                                    }
                                </select>
                                <select
                                    className={style.select}
                                    onChange={e => handleFilterByOrigin(e)}
                                >
                                    <option value="All">All</option>
                                    <option value="Created">DB</option>
                                    <option value="API">API</option>
                                </select>
                                {/* Barra de búsqueda por nombre */}
                                <div>
                                    <SearchBar />
                                </div>
                                {/* Paginado superior */}
                                <Paginate
                                    pokemonByPage={pokemonByPage}
                                    listPokemons={listPokemons.length}
                                    paginado={paginado}
                                />
                                {/* Lista de Pokemones */}
                                <div className={style.container}>
                                    <div className={style.cards}>
                                        {
                                            pokemonCurrent.map(pokemon => {
                                                return (
                                                    <li key={pokemon.id} className={style.li}>
                                                        <Card pokemon={pokemon} />
                                                    </li>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {/* Paginado inferior */}
                                <Paginate
                                    pokemonByPage={pokemonByPage}
                                    listPokemons={listPokemons.length}
                                    paginado={paginado}
                                />
                            </div>
                        </div>
                        <Footer />
                    </>
                    : <Loading />
            }
        </>
    )
}

export default Home;