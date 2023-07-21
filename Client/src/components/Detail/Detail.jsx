import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

let Detail = (props) => {
   let { id } = useParams();
   let [character, setCharacter] = useState({});
   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert("No hay personajes con ese ID");
            }
         }
      );
      return setCharacter({});
   }, [id]);
   console.log(character);
   return character ? (
      <div>
         <h2>{character.id}</h2>
         <h2>{character.name}</h2>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin?.name}</h2>
         <img src={character.image} alt={`Foto de ${character.name}.`} />
      </div>
   ) : (
      ""
   );
};

export default Detail;
