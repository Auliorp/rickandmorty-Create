import Card from "../card/Card";
import { connect, useDispatch } from "react-redux";
import { filtercards, orderCards } from "../../redux/actions/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
   const dispatch = useDispatch();
   const [aux, setAux] = useState(false);

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      setAux(true);
   };

   const handleFilter = (event) => {
      dispatch(filtercards(event.target.value));
   };
   return (
      <div>
         <select onChange={handleOrder}>
            <option value="A">Acendente</option>
            <option value="D">Descendente</option>
         </select>

         <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">All Characters</option>
         </select>

         {myFavorites?.map((personajesFav) => {
            return (
               <Card
                  key={personajesFav.id}
                  id={personajesFav.id}
                  name={personajesFav.name}
                  status={personajesFav.status}
                  species={personajesFav.species}
                  gender={personajesFav.gender}
                  origin={personajesFav.origin}
                  image={personajesFav.image}
                  onClose={personajesFav.onClose}
               />
            );
         })}
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, null)(Favorites);
