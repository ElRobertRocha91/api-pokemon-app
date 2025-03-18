import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>Pokémon Go</h1>
                <nav>
                    <ul className={styles.ul}>
                        <li>
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    {/* BOTON HAMBURGER */}
                    <button onClick={toggleMenu} aria-label="button" className={styles.button}>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className={styles.menu} fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className={styles.menu} fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg> 
                        )}
                    </button>
                </nav>
            </div>
            {/* LIST MENU NAV */}
            {isOpen && (
                <div>
                    <div className={styles.navList}>
                      <Link to="/home" onClick={toggleMenu} className={styles.list}>Home</Link>
                      <Link to="/about" onClick={toggleMenu} className={styles.list}>About</Link>  
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar;