import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk"; // ->middleware es una funcion intermediaria

export const store = createStore(rootReducer, applyMiddleware(thunk));
