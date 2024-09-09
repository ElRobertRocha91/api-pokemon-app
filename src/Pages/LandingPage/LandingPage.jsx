import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
    return (
        <div className={styles.containerPage}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>WELCOME TO MY POKEMON APP</h1>
                </div>
                <div className={styles.text}>
                    <div>
                    <p className={styles.p}>Click on start</p>
                    <Link className={styles.link} to="/home">START</Link>
                    </div>
                </div>
                {/*<div className={styles.start}>
                 </div> */}
            </div>
        </div>
    )
}

export default LandingPage;