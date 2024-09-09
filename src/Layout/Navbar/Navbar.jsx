import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
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
                </nav>
            </div>
        </header>
    )
}

export default Navbar;