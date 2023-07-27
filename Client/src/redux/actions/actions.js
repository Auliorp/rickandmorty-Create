import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";
import axios from "axios";

export let addFav = (character) => {
   const endpoint = "http://localhost:3001/rickandmorty/fav";
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);

         if (!data.length) {
            throw Error("No hay favoritos");
         }
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      }
   };
};

export let removeFav = (id) => {
   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      }
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
