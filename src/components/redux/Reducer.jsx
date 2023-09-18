import {
  GET_ALL_FURNITURES,
  GET_FURNITURES_BY_NAME,
  PREV,
  NEXT,
} from "./actions/ActionsTypes";

const initialState = {
  allFurnitures: [],
  allCategory: [],
  furnituresByName: [],
  temporal: [],
  selectFurnitures: null,
  selectDbFurnitures: null,
  numPage: 1,
};

export default function reducer(state = initialState, { type, payload }) {
  console.log("Reducer type:", type); // Agregado para depuración
  console.log("Reducer payload:", payload); // Agregado para depuración

  switch (type) {
    case GET_ALL_FURNITURES:
      return {
        ...state,
        allFurnitures: payload,
        temporal: payload,
      };
    case GET_FURNITURES_BY_NAME:
      return {
        ...state,
        furnituresByName: payload,
      };

    case PREV:
      return {
        ...state,
        numPage: state.numPage - 1,
      };
    case NEXT:
      return {
        ...state,
        numPage: state.numPage + 1,
      };

    default:
      return { ...state };
  }
}
