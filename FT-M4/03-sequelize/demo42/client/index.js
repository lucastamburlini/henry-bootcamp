const {createStore} = require("redux");

// 3 Solo lectura -> ACTION

// ACTION TYPE:

const AUMENTAR_CONTADOR = "AUMENTAR_CONTADOR";
const DISMINUIR_CONTADOR = "DISMINUIR_CONTADOR";
const AGREGAR = "AGREGAR";

// ACTION CREATOR:

const aumentar = () => {
  return {
    type: AUMENTAR_CONTADOR,
  };
};

const disminuir = () => {
  return {
    type: DISMINUIR_CONTADOR,
  };
};

const agregarColeguilla = (coleguilla) => {
  return {
    type: AGREGAR,
    payload: coleguilla,
  };
};

// 2 Solo cambios con una funcion pura -> REDUCER

const initialState = {contador: 0, nombre: "Gamaliel", coleguillas: []};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUMENTAR_CONTADOR:
      return {
        ...state,
        contador: state.contador + 1,
      };

    case DISMINUIR_CONTADOR:
      return {
        ...state,
        contador: state.contador - 1,
      };

    case AGREGAR:
      return {
        ...state,
        coleguillas: [...state.coleguillas, action.payload],
      };

    default:
      return state;
  }
};

// 1 Unica fuente de verdad -> STORE

const store = createStore(rootReducer);

console.log(store.getState());

// Aumentar
store.dispatch(aumentar());
store.dispatch(aumentar());
store.dispatch(aumentar());

console.log(store.getState());

store.dispatch(disminuir());

console.log(store.getState());

store.dispatch(agregarColeguilla("Agustin"));
store.dispatch(agregarColeguilla("Elian"));
store.dispatch(agregarColeguilla("Franco"));
store.dispatch(agregarColeguilla("Daniel"));
store.dispatch(agregarColeguilla("Mariano"));

console.log(store.getState());

// store.subscribe(state)--->>> como hacer esto con React
