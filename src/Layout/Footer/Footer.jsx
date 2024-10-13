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
                        Hola! Me llamo Roberto Rocha; Cuento con una Licenciatura en Administración y actualmente
                        soy estudiante en la Universidad Tecnológica Nacional, cursando la Tecnicatura Superior en Programación.
                        Aparte he realizado un bootcamp de formación profesional como Full Stack Developer, que me permitio adquirir nuevas herramientas
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