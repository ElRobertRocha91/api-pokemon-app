import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
    return (
        <div className={styles.containerPage}>
            <div className={styles.text}>
                <h1>HELLO! WELCOME TO MY POKEMON APP</h1>
                <div className={styles.start}>
                    <p>Click on start</p>
                    <Link className={styles.link} to="/home">START</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;