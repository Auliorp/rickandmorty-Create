import React from "react";
import style from "./About.module.css";
let About = () => {
  return (
    <div>
      <h1>Aulio Rovero</h1>
      <h2>prueba de About</h2>
      <img
        className={style.div}
        src="src\assets\imagenes\fotoPerfil.jpg"
        alt="Foto de mi carache"
      />
    </div>
  );
};

export default About;
