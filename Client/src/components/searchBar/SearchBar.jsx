import React, { useState } from "react";
import style from "./SearchBar.module.css";

let SearchBar = (props) => {
   const [id, setId] = useState("");

   const handleChange = (evento) => {
      setId(evento.target.value);
   };

   return (
      <div>
         <input
            className={style.input}
            type="search"
            placeholder="Busca un personaje"
            onChange={handleChange}
            value={id}
         />
         <button
            className={style.button}
            onClick={() => {
               props.onSearch(id);
            }}
         >
            Agregar
         </button>
      </div>
   );
};

export default SearchBar;
