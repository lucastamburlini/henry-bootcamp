import {GET_CHARACTERS} from "../actions";

let initialState = {characters: [], coleguillas: []}; //--- personajes de HARy

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
