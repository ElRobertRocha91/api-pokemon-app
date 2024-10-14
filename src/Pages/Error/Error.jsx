import { Link } from "react-router-dom";
import styles from "./Error.module.css";

function Error() {
    return (
        <div className={styles.pages}>
            <div className={styles.container}>
                <h3 className={styles.title}>Error: 404</h3>
                <p className={styles.message}>Page not found</p>
                <div className={styles.btn}>
                    <Link to="/" className={styles.link}>Return to page</Link>
                </div>
            </div>
        </div>
    )
}

export default Error;