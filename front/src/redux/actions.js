import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

import axios from "axios";

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
     try {
      const response = await axios.post(endpoint, character);
      const data = response.data;
      return dispatch({
         type: ADD_FAV,
         payload: data,
      });
     } catch (error) {
         throw new Error('Error adding favorite:', error)
     }
   };
 };
 
 export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
     try {
       const response = await axios.delete(endpoint);
       const data = response.data;
       return dispatch({
         type: REMOVE_FAV,
         payload: data,
       });
     } catch (error) {
         throw new Error('Error removing favorite:' , error)
     }
   };
 };

export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return{
        type: ORDER,
        payload: orden
    }
}
