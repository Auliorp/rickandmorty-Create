import React, { useState, useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";

let Card = (props) => {
   let [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   };
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={style.div}>
         <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
         <div>
            <button
               className={style.button}
               onClick={() => {
                  props.onClose(props.id);
               }}
            >
               X
            </button>
         </div>
         <h2>{props.id}</h2>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img
            className={style.img}
            src={props.image}
            alt={`Foto de ${props.name}.`}
         />
      </div>
   );
};

let mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

let mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
