import './App.css';

import logoHSI from "./imagenes/logoHSI.png";
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='App'>
      <div className="logoHSI-logo-contenedor">
        <img
          src={logoHSI}
          className="logoHSI-logo-contenedor" 
            
          />
      </div>
      <div className='tareas-lista-principal'>
        <h1>HOGAR SANTA INES</h1>
        <ListaDeTareas />
      </div>
      <h2><end>By LARRYSALSA </end></h2>
      <h2><end>AND </end></h2>
      <h2><end>L&L SERIE.COM</end></h2>
    </div>
  );
}

export default App;

