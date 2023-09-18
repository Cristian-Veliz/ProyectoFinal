import axios from "axios";
import { 
GET_ALL_FURNITURES,
GET_FURNITURES_BY_NAME,
PREV,
NEXT,
} from "./ActionsTypes";



//ACTIONS CREATORS

export const getAllFurnitures = () => {
    return async (dispatch) => {
      try {
       const response = await axios.get('http://localhost:3001/product')   
       dispatch({type: GET_ALL_FURNITURES, payload: response.data})
      } catch (error) {
        console.error("Error al intentar renderizar los muebles", error.message);
      }
    };
  };
  
  export function getFurnituresByName(name) {
      return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/product?name=${name}`)
        dispatch({ type: GET_FURNITURES_BY_NAME, payload: response.data });
      } catch (error) {
        console.error("Error al intentar renderizar los muebles por name", error.message);
      }
    }
  }

  export function prev() {
    return {
      type: PREV
    }
  };
  export function next() {
    return {
      type: NEXT
    }  
  };
  