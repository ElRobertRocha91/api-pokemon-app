import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPokemon } from "../../Redux/actions/index";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer from "../../Layout/Footer/Footer";
import Validation from "./Validation";
import styles from "./Form.module.css";

// ==================== Formulario ====================

// # Este formulario permitira crear un nuevo pokemon

// # Indicaciones del Formulario:
// - Las validaciones de errores estan controladas con JavaScript
// - Cuenta con los siguientes campos:
//      <> Nombre
//      <> Imagen
//      <> Vida
//      <> Ataque
//      <> Defensa
//      <> Velocidad
//      <> Altura
//      <> Peso
//      <> Tipos de pokemon con posibilidad de agregar varios en simultaneo
//      <> Botón para su creación

function Form() {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    const [input, setInput] = useState({
        id: Math.random().toString(30).substring(2),
        name: "",
        image: "",
        live: 0,
        attack: 0,
        defense: 0,
        velocity: 0,
        height: 0,
        weight: 0,
        types: []
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getTypes());
    }, []);

    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(Validation({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSelectTypes(e) {
        if (input.types.length >= 2) {
            alert("You are only allowed to select a maximun of two.");
            setInput({
                ...input
            });
        } else if (input.types.includes(e.target.value)) {
            alert("The type of pokemon is already selected.");
            setInput({
                ...input
            });
        } else if (!input.types.includes(e.target.value) && e.target.value !== "all" && input.types.length < 2) {
            setInput({
                ...input,
                types: [...input.types, e.target.value]
            });
            setErrors(Validation({
                ...input,
                types: [...input.types, e.target.value]
            }));
        } else {
            setInput({
                ...input
            });
        }
    }

    function handleDeleteTypes(e) {
        setInput({
            ...input,
            types: input.types.filter(type => type !== e)
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (input.name.length === 0
            && input.image.length === 0
            && input.live <= 0
            && input.attack <= 0
            && input.defense <= 0
            && input.velocity <= 0
            && input.height <= 0
            && input.weight <= 0
            && input.types.length === 0
        ) {
            alert("Error: The form must be complete");
        } else {
            dispatch(createPokemon(input));
            alert("Pokemon created with success");
            setInput([{
                id: "",
                name: "",
                image: "",
                live: 0,
                attack: 0,
                defense: 0,
                velocity: 0,
                height: 0,
                weight: 0,
                types: []
            }]);
            navigate("/home");
        }
    }

    return (
        <>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Create your Pokemon</h1>
                    <form action="" onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.form}>
                            <label htmlFor="name" className={styles.label}>Name: </label>
                            <input
                                type="text"
                                value={input.name}
                                name="name"
                                id="name"
                                placeholder="Enter name..."
                                autoComplete="on"
                                onChange={handleInput}
                                className={styles.input}
                            />
                        </div>
                        {errors.name && <p className={styles.danger}>{errors.name}</p>}
                        <div className={styles.form}>
                            <label htmlFor="live" className={styles.label}>Live: </label>
                            <input
                                type="number"
                                value={input.live}
                                name="live"
                                id="live"
                                autoComplete="on"
                                onChange={handleInput}
                                className={styles.input}
                            />
                        </div>
                        {errors.live && <p className={styles.danger}>{errors.live}</p>}
                        <div className={styles.form}>
                            <label htmlFor="attack" className={styles.label}>Attack: </label>
                            <input
                                type="number"
                                value={input.attack}
                                name="attack"
                                id="attack"
                                autoComplete="on"
                                onChange={handleInput}
                                className={styles.input}
                            />
                        </div>
                        {errors.attack && <p className={styles.danger}>{errors.attack}</p>}
                        <div className={styles.form}>
                            <label htmlFor="defense" className={styles.label}>Defense: </label>
                            <input
                                type="number"
                                value={input.defense}
                                name="defense"
                                id="defense"
                                autoComplete="on"
                                onChange={handleInput}
                                className={styles.input}
                            />
                        </div>
                        {errors.defense && <p className={styles.danger}>{errors.defense}</p>}
                        <div className={styles.form}>
                            <label htmlFor="velocity" className={styles.label}>Velocity: </label>
                            <input
                                type="number"
                                value={input.velocity}
                                name="velocity"
                                id="velocity"
                                autoComplete="on"
                                onChange={handleInput}
                                className={styles.input}
                            />
                        </div>
                        {errors.velocity && <p className={styles.danger}>{errors.velocity}</p>}
                        <div className={styles.form}>
                            <label htmlFor="height" className={styles.label}>Height: </label>
                            <input
                                type="number"
                                value={input.height}
                                name="height"
                                id="height"
                                autoComplete="on"
                                onChange={handleInput}
                                className={styles.input}
                            />
                        </div>
                        {errors.height && <p className={styles.danger}>{errors.height}</p>}
                        <div className={styles.form}>
                            <label htmlFor="weight" className={styles.label}>Weight: </label>
                            <input
                                type="number"
                                value={input.weight}
                                name="weight"
                                id="weight"
                                autoComplete="on"
                                onChange={handleInput}
                                className={styles.input}
                            />
                        </div>
                        {errors.weight && <p className={styles.danger}>{errors.weight}</p>}
                        <div className={styles.form}>
                            <label htmlFor="image" className={styles.label}>Image: </label>
                            <input
                                type="text"
                                value={input.image}
                                name="image"
                                id="image"
                                placeholder="Insert imagen URL"
                                autoComplete="on"
                                onChange={handleInput}
                                className={styles.input}
                            />
                        </div>
                        {errors.image && <p className={styles.danger}>{errors.image}</p>}
                        <div>
                            <label htmlFor="types">Types: </label>
                            <select name="types" id="types" onChange={(e) => handleSelectTypes(e)}>
                                <option value="all">All</option>
                                {types && types.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                            {errors.types && <p className={styles.danger}>{errors.types}</p>}
                            <div className={styles.types}>
                                {/* Visualización de types seleccionados */}
                                {
                                    input.types.map((el) => (
                                        <li key={el} className={styles.list}>
                                            <div className={styles.space}>
                                                {el + " "}
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteTypes(el)}
                                                    className={styles.x}>
                                                    x
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </div>
                        </div>
                        {errors.name || errors.live || errors.attack || errors.defense || errors.height || errors.weight || errors.image || errors.types ? 
                        <h4 className={styles.h4}>Complete the form</h4> :
                            <div className={styles.btn}>
                                <button className={styles.button} type="submit">Create</button>
                            </div>
                        }
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Form;