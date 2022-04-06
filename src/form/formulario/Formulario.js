import './formulario.css';
import { useState } from 'react';

function Formulario(props){

    const [isOpen, setIsOpen] = useState(false);
    const [mensaje, setMensaje]= useState("");


    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        tel: '',
        edad: '',
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const funcionIncorrecta = () => {
        setMensaje("Error Ingresa correctamente los datos");
        setIsOpen(true);
        setTimeout(function() {
            setIsOpen(false);          
        },3000);
    }

    const funcionCorrecta = () => {
        setMensaje("Tu información fue enviada con éxito, estaremos en contacto contigo");
        setIsOpen(true);
        setTimeout(function() {
            setIsOpen(false);          
        },5000);
        setDatos({
            nombre: '',
            email: '',
            tel: '',
            edad: '',
        });
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log('Nombre Completo: ' + datos.nombre);
        console.log('Email: ' + datos.email);
        console.log('Celular: ' + datos.tel);
        console.log('Edad: ' + datos.edad);

        if(!datos.nombre){
            funcionIncorrecta();
            console.log("nombre");
        } else if(!datos.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(datos.email)){
            funcionIncorrecta();
            console.log("email");

        } else if(!Number.isInteger(parseInt(datos.tel))){
            funcionIncorrecta();
            console.log("tel");

        } else if(!parseInt(datos.edad)){
            funcionIncorrecta();
            console.log("edad");

        } else if(parseInt(datos.edad) < 18){
            funcionIncorrecta();
            console.log("edad menor a 18");

        } else if(parseInt(datos.edad) > 100){
            funcionIncorrecta();
            console.log("edad menor a 100");

        } else {
            funcionCorrecta();
            event.target.reset();
        }
        
    }

    return(
        <>
        <div className="formulario">
            <form onSubmit={enviarDatos}>
                <label>Nombre Completo:</label><br/>
                <input 
                    autoComplete='off'
                    type="text" 
                    name="nombre" 
                    onChange={handleInputChange} /><br/><br/>

                <label>Email:</label><br/>
                <input 
                    autoComplete='off'
                    type="email" 
                    name="email" 
                    onChange={handleInputChange} /><br/><br/>

                <label>Celular:</label><br/>
                <input 
                    autoComplete='off'
                    type="tel" 
                    name="tel" 
                    onChange={handleInputChange} /><br/><br/>

                <label>Edad:</label><br/>
                <input 
                    autoComplete='off'
                    type="number" 
                    name="edad" 
                    onChange={handleInputChange} /><br/><br/><br/>

                <input type="submit" value="Aceptar" /><br/><br/><br/><br/><br/>
                
            </form>
        </div>
        { isOpen ?
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                height: '100vh',
                width: '100vw',
                backgroundColor: 'rgba(0,0,0,0.7)',
                cursor: 'pointer',
            }}>
                <h1 className='mensaje'>{mensaje}</h1>
            </div>
            : null }
        </>
    );
}

export default Formulario;