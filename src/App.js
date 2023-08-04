import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import logo from "./imagenes/logo.png";
import { useState } from "react";
function App() {
  const [numClicks, setNumClicks] = useState(0);

  const sumar = () => {
    setNumClicks(numClicks + 1);
  };
  const reset = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={logo} alt="Logo" />
      </div>

      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton texto="Click" esBotonClick={true} manejarClick={sumar} />
        <Boton texto="Reset" esBotonClick={false} manejarClick={reset} />
      </div>
    </div>
  );
}

export default App;
