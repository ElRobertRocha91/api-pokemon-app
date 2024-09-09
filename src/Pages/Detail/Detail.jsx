import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "../../Redux/actions/index";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import Loading from "../../Components/Loading/Loading";
import Footer from "../../Layout/Footer/Footer";
import styles from "./Detail.module.css";

function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const pokemon = useSelector((state) => state.details);
    // console.log(pokemon);
    useEffect(() => {
        dispatch(getDetails(id));
    }, [dispatch, id]);

    return (
        <>
            {
                Object.keys(pokemon).length > 0 && pokemon[0].image ?
                    <>
                        <Navbar />
                        <>
                            <div className={styles.container}>
                                {
                                    pokemon && pokemon.map(el => (
                                        <div className={styles.card} key={el.id}>
                                            <div className={styles.image}>
                                                <img
                                                    src={el.image ? el.image : el.name}
                                                    alt={el.name}
                                                    className={styles.img}
                                                />
                                            </div>
                                            <div className={styles.detail}>
                                                <h1>{el.name}</h1>
                                                <div className={styles.list}>
                                                    <div className={styles.data}>
                                                        <div className={styles.divData}>
                                                            <span>Live: </span>
                                                        </div>
                                                        <div className={styles.divData}>
                                                            <p>{el.live}</p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.data}>
                                                        <div className={styles.divData}>
                                                            <span className={styles.spanData}>Attack: </span>
                                                        </div>
                                                        <div className={styles.divData}>
                                                            <p>{el.attack}</p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.data}>
                                                        <span>Defense: </span>
                                                        <p>{el.defense}</p>
                                                    </div>
                                                    <div className={styles.data}>
                                                        <span>Velocity: </span>
                                                        <p>{el.velocity}</p>
                                                    </div>
                                                    <div className={styles.data}>
                                                        <span>Height: </span>
                                                        <p>{el.height}</p>
                                                    </div>
                                                    <div className={styles.data}>
                                                        <span>Weight: </span>
                                                        <p>{el.weight}</p>
                                                    </div>
                                                    <p>
                                                        <span>Types: </span> {el.types}
                                                    </p>
                                                </div>
                                                <div className={styles.btn}>
                                                    <Link to="/home" className={styles.link}>
                                                        Back Home
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                        <Footer />
                    </>
                : <Loading />
            }
        </>
    )
}

export default Detail;