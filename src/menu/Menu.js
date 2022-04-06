import { listadoMenu } from '../Listado';
import './menu.css';
import { useState } from 'react';

function Menu(props){

    const [ active, setActive ] = useState(0)
    const { cambiarNombre } = props

    return(
        <div className="menu">
            <ul>
            {
                listadoMenu.map((data, key) => {
                    return (
                        <div onClick={() => cambiarNombre(data.name)} key={key} className={`item ${active === key ? 'active' : ''}`}>
                            <li>{data.name}</li>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default Menu;