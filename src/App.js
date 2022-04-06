import './App.css';
import Menu from './menu/Menu';
import Form from './form/Form';
import { useState } from 'react';

function App() {

  const [ nombre, setNombre ] = useState('Vivair')

  const cambiarNombre = (name) =>{
    setNombre(name);
  }

  return (
    <>
    <Menu cambiarNombre={cambiarNombre}/>
    <div className="App">
      <header className="App-header">
        <Form name={nombre} />
      </header>
    </div>
    </>
  );
}

export default App;
