import './form.css';
import Formulario from './formulario/Formulario';

function Form(props){

    return(
        <div className="form">
            <h1>HoIa, bienvenido, sabemos que quieres viajar en un {props.name}, por favor
            diIigencia eI siguiente formuIario:</h1>
            <Formulario/>
        </div>
    );
}

export default Form;