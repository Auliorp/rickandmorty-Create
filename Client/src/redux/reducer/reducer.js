import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/types";

const inicialState = {
   myFavorites: [],
   allcharacterFav: [],
};

let reducer = (state = inicialState, action) => {
   switch (action.type) {
      case ADD_FAV:
         return {
            /* ...state,
            myFavorites: [...state.allcharacterFav, action.payload],
            allcharacterFav: [...state.allcharacterFav, action.payload], */
            ...state,
            myFavorites: action.payload,
            allcharacterFav: action.payload,
         };
      case REMOVE_FAV:
         return {
            /* ...state,
            myFavorites: state.myFavorites.filter(
               (persona) => persona.id !== action.payload
            ), */
            ...state,
            myFavorites: action.payload,
         };
      case FILTER:
         const allcharacterFavFiltered = state.allcharacterFav.filter(
            (personajes) => personajes.gender === action.payload
         );
         return {
            ...state,
            myFavorites:
               action.payload === "allCharacters"
                  ? [...state.allcharacterFav]
                  : allcharacterFavFiltered,
         };

      case ORDER:
         const allcharacterFavCopy = [...state.allcharacterFav];
         return {
            ...state,
            myFavorites:
               action.payload === "A"
                  ? allcharacterFavCopy.sort((a, b) => a.id - b.id)
                  : allcharacterFavCopy.sort((a, b) => b.id - a.id),
         };

      default:
         return { ...state };
   }
};

export default reducer;
