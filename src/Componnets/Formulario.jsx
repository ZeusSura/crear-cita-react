import React, { Fragment } from "react";

let Formulario = () => {
  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
        <label name="mascota">Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de tu mascota"
        />
        <label name="mascota">Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño de la mascota"
        />
        <label for="fecha">Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />
        <label for="hora">Hora</label>
        <input type="time" name="hora" className="u-full-width" />
        <label name="sintomas">Sintomas</label>
        <textarea className="u-full-width" name="sintomas"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
