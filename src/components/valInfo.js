const valInfo = (values) => {

    let errors={};
    
    if(!values.email){
        errors.email="Correo requerido."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="El correo es invalido."
    }
    // Si la contraseña esta vacia
    if(!values.password){
        errors.password = "Contraseña requerida."
    // Si es corta
    }else if(values.password.length < 6){
        errors.password="La contraseña debe tener al menos 6 o más caracteres."
    }
    // Si la contraseña esta vacia
    if(!values.password2){
        errors.password2 = "Contraseña requerida."
    }else if(values.password2.length !== values.password || values.password !== values.password2){
        errors.password2="No coinciden las contraseñas."
    }
    
    return errors;
    };
    
    export default valInfo;