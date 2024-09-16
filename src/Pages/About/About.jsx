import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer from "../../Layout/Footer/Footer";
import technologies from "../../Constant/technologies";
import Loading from "../../Components/Loading/Loading";
import styles from "./About.module.css";

function About() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const loadTechnologies = () => {
            setList(technologies);
            let data = list.map(el => Object.values(el));
            setLoading(data);
        };
        loadTechnologies();
    }, []);

    if (!loading) {
        return <Loading />;
    }

    return (
        <>
            <Navbar />
            <div className={styles.page}>
                <article className={styles.container}>
                    <h2 className={styles.title}>POKÉMON GO</h2>
                    <p className={styles.text}>
                        Bienvenidos, este proyecto fue desarrollado usando el entorno de desarrollo de Vite + React,
                        el mismo consume la
                        <a href="https://pokeapi.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.a}>
                            {" "}POKE API{" "}
                        </a>
                        para obtener los datos de los pokemons,
                        las funcionalidades agregadas a esta Single Page Application son el manejo de estados, la búsqueda de pokemones,
                        visualización de información, filtrarlos, ordenarlos y crear nuevos pokemones a través de un formulario controlado.
                        Haz click <Link to="/form" className={styles.link}>Aqui</Link> para crear tu pokemon personalizado.
                        <br />
                        Si te gusto este proyecto y tienes una propuesta laboral para mi,
                        con gusto puedes contactar conmigo.
                        Muchas gracias por visitar mi app Pokémon Go.
                    </p>
                    <br />
                    <h2 className={styles.title}>Tecnologías Aplicadas</h2>
                    <figure className={styles.card}>
                        {list.map((el) => (
                            <div key={el.id} className={styles.cardList}>
                                <img src={el.image} alt={el.name} className={styles.image} />
                                <h3 className={styles.cardText}>{el.name}</h3>
                            </div>
                        ))}
                    </figure>
                </article>
            </div>
            <Footer />
        </>
    )
}

export default About;