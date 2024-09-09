import { useDispatch } from "react-redux";
import { useState } from "react";
import { getPokemonByName } from "../../Redux/actions";
import Paginate from "../Paginate/Paginate";
import styles from "./SearchBar.module.css";

function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInput(e) {
        e.preventDefault();
        setName(e.target.value);
        Paginate(1);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Valido el input
        if(!name){
            alert("Please input a name to start the search");
        }else if(name && !/^[A-Z]+$/i.test(name)){
            alert("Invalid characters, please enter only letters");
            setName("");
        }else{
            dispatch(getPokemonByName(name));
            setName("");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    value={name}
                    placeholder="Search pokemon..."
                    onChange={(e) => handleInput(e)} 
                    className={styles.input}
                />
                <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)} 
                    className={styles.button}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;