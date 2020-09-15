import React, { Fragment, useState,useEffect} from "react";
import Formulario from "./Componnets/Formulario";
import Cita from "./Componnets/Cita";
import "./Index.css";

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){citasIniciales=[]}
  const [citas, setCitas] = useState(citasIniciales);

  //Funcion agregar citas
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  useEffect(()=>{
    localStorage.setItem('citas',JSON.stringify(citas))
  },[citas])
  //funcion eliminar cita
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  //Mensaje condicional
  let titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
