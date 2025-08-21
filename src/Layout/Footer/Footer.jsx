import { useState, useEffect } from "react";
import icons from "../../Constant/icons";
import styles from "./Footer.module.css";

function Footer() {
    const [date, setDate] = useState(null);

    useEffect(() => {
        setDate(new Date().getFullYear());
    }, []);

    return (
        <footer className={styles.container}>
            <h1 className={styles.title}>Pokémon Go</h1>
            <div className={styles.content}>
                <div className={styles.column1}>
                    <h2 className={styles.subtitle}>Acerca de Mí</h2>
                    <p className={styles.text}>
                        ¡Hola, me llamo Roberto Rocha! Soy un Desarrollador Web altamente motivado y con muchas ganas de crecer profesionalmente,
                        actualmente curso la Tecnicatura Universitaria en Programación, en la prestigiosa Universidad Tecnológica Nacional UTN.
                        Aparte he realizado el curso de Experto Universitario en Programación Web Full Stack en el Centro de e-Learning UTN FRBA, lo que me permitio adquirir nuevas herramientas
                        en el desarrollo de Aplicaciones Web.
                        <br />
                        Actualmente me encuentro en activa búsqueda laboral. Si usted esta buscando una persona, para su empresa con amplias
                        ganas de crecer, construir, y fomentar un grupo eficiente de trabajo, esta viendo el perfil correcto.
                        Contacteme por privado y le comento mis conocimientos en una entrevista.
                    </p>
                </div>
                <div className={styles.column2}>
                    <div className={styles.colunm2A}>
                        <h2 className={styles.subtitle}>Contactos</h2>
                        <div className={styles.contact}>
                            {icons.map((el) => (
                                <div key={el.id} className={styles.link}>
                                    <p>{el.link}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.column2B}>
                        <h2 className={styles.subtitle}>Redes sociales</h2>
                        <div className={styles.icons}>
                            {icons.map((el) => (
                                <div key={el.id} className={styles.flexbox}>
                                    <a href={el.link} target="_black" rel="noopener noreferrer">
                                        <span>
                                            <ion-icon name={el.icon}></ion-icon>
                                        </span>
                                    </a>
                                    <p>{el.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>@copyright, All Rights Reserverd Lic. Roberto Rocha {date}</p>
            </div>
        </footer>
    )
}

export default Footer;