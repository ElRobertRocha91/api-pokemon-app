import style from "./Paginate.module.css";

function Paginate({ pokemonByPage, listPokemons, paginado }) {
    const numberPage = [];

    for(let i = 0; i < Math.ceil(listPokemons/pokemonByPage); i++){
        numberPage.push(i + 1);
    }

    return (
        <nav className={style.paginado}>
            <ul>
                {
                    numberPage && numberPage.map(number => {
                        return (
                            <li key={number}>
                                <button onClick={() => paginado(number)}>{number}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Paginate;