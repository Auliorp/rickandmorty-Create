import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";
import axios from "axios";

export let addFav = (character) => {
   /*    return {
      type: ADD_FAV,
      payload: character,
   }; */
   const endpoint = "http://localhost:3001/rickandmorty/fav";
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

export let removeFav = (id) => {
   /*  return {
      type: REMOVE_FAV,
      payload: id,
   }; */
   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      });
   };
};

export let filtercards = (gender) => {
   return {
      type: FILTER,
      payload: gender,
   };
};

export let orderCards = (orden) => {
   return {
      type: ORDER,
      payload: orden,
   };
};