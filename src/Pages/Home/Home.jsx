import { Link } from "react-router-dom";
import style from "./Home.module.css";

function Home() {
    return (
        <div className={style.h}>
            <h1>Soy el componete home</h1>
            {/* Botones */}
            <div>
                <button>clean Page</button>
                <Link to="/">Create Pokemon</Link>
            </div>
        </div>
    )
}

export default Home;