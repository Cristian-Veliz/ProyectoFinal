import axios from "axios";
import {
  GET_ALL_FURNITURES,
  GET_FURNITURES_BY_NAME,
  FURNITURES_SORT_BY_NAME,
  FILTER_BY_PRICE,
  SORT_BY_PRICE,
  LOGIN_SUCCESS,
  PREV,
  NEXT,
  GO_TO_FIRST_PAGE,
  GO_TO_LAST_PAGE,
  CREAR_ORDEN,

} from "./ActionsTypes";

//ACTIONS CREATORS
//http://localhost:5000/products


export const getAllFurnitures = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/product");
      
      // Ordenar los datos por id de menor a mayor
      const sortedData = response.data.sort((a, b) => a.id - b.id);
      
      dispatch({ type: GET_ALL_FURNITURES, payload: sortedData });
    } catch (error) {
      console.error("Error al intentar renderizar los muebles", error.message);
    }
  };
}

export function getFurnituresByName(name) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/product?name=${name}`
      );
      dispatch({ type: GET_FURNITURES_BY_NAME, payload: response.data });
    } catch (error) {
      console.error(
        "Error al intentar renderizar los muebles por name",
        error.message
      );
    }
  };
}
export const furnituresSortName = (order) => {
  return {
    type: FURNITURES_SORT_BY_NAME,
    payload: order,
  };
};

export function filterByPrice(minPrice, maxPrice) {
  return {
    type: FILTER_BY_PRICE,
    payload: { minPrice, maxPrice },
  };
}

export const furnituresSortPrice = (order) => {
  return {
    type: SORT_BY_PRICE,
    payload: order,
  };
};

export function prev() {
  return {
    type: PREV,
  };
}
export function next() {
  return {
    type: NEXT,
  };
}

// Actions.jsx
export const goToFirstPage = () => ({
  type: GO_TO_FIRST_PAGE,
});

export const goToLastPage = () => ({
  type: GO_TO_LAST_PAGE,
});


export function crearOrden(orden) {
  return async (dispatch) => {
    try {
      console.log("actions:::", orden);
      const URL = "http://localhost:3001/order/create";
      await axios.post(URL, orden);

      dispatch({ type: CREAR_ORDEN, payload: orden });
    } catch (error) {
      console.error("No se pudo crear el producto", error.message);
    }
  };
}


export const loginSuccess = (form) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", form);
      const { tokenSession } = response.data;
      dispatch({ type: LOGIN_SUCCESS, payload: tokenSession });
    } catch (error) {
      console.error("Error de inicio de sesión:", error)}
  };
};

