import { Link } from "react-router-dom";
import styles from "./Favorites.module.css";

function Favorites() {
    return (
        <div className={styles.pages}>
            <div className={styles.container}>
                <h2 className={styles.text}>Page in development</h2>
                <Link to="/" className={styles.link}>Return to Home</Link>
            </div>
        </div>
    )
}

export default Favorites;