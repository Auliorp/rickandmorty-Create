import React from "react";
import Card from "../card/Card";
import style from "./Cards.module.css";

let Cards = (props) => {
   return (
      <div className={style.div}>
         {props.characters.map((perfil) => {
            return (
               <Card
                  key={perfil.id}
                  name={perfil.name}
                  status={perfil.status}
                  species={perfil.species}
                  gender={perfil.gender}
                  origin={perfil.origin.name}
                  image={perfil.image}
                  id={perfil.id}
                  onClose={props.onClose}
               />
            );
         })}
      </div>
   );
};

export default Cards;
