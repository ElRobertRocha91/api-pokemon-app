
// Declaramos una función que recibe las propiedades del formulario
// Definimos un objeto al cual le vamos a pasar todos los errores que detectemos
// Validamos los inputs y la cantidad de Types, seleccionado, va a tener un maximo de 2 y un minimo de 1.

export default function Validation(input) {
    
    let errors = {};

    if(!/^[ a-zA-Z]+$/.test(input.name) || input.name.length < 4 || input.name.length > 25){
        errors.name = "Name must be between only letters and an max 25 characters";
    }
    if(input.live < 1 || input.live > 275){
        errors.live = "Live must be between 1 and 275";
    }
    if(input.attack < 1 || input.attack > 275){
        errors.attack = "Attack must be between 1 and 275";
    }
    if(input.defense < 1 || input.defense > 275){
        errors.defense = "Defense must be between 1 and 275";
    }
    if(input.velocity < 1 || input.velocity > 275){
        errors.velocity = "Velocity must be between 1 and 275";
    }
    if(input.height < 1 || input.height > 275){
        errors.height = "Height must be between 1 and 275";
    }
    if(input.weight < 1 || input.weight > 275){
        errors.weight = "Weight must be between 1 and 275";
    }
    if(input.image && !/^http.+.\.(jpg|jpeg|gif|png|webp)$/.test(input.image)){
        errors.types = "Image invalid";
    }
    if(input.types){
        if(!input.types.length || input.types.length > 2){
            errors.types = "Need at least one type"
        }else{
            errors.types = false;
        }
    }

    return errors;
}