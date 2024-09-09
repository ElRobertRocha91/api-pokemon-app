import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card({ pokemon }) {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <Link to={`/pokemon/${pokemon.id}`} className={style.link}>
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className={style.img}
                    />
                    <div className={style.div}>
                        <h3 className={style.h3}>{pokemon.name}</h3>
                        <h6 className={style.h6}>Type:</h6>
                        <p className={style.p}>{pokemon.types}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card;