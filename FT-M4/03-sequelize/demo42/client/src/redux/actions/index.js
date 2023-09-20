import axios from "axios";
export const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => {
  return (dispatch) => {
    axios.get("https://hp-api.onrender.com/api/characters").then(({data}) => {
      return dispatch({
        type: GET_CHARACTERS,
        payload: data,
      });
    });
  };
};
