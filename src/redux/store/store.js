import { createStore, combineReducers } from "redux";
import { loginReducer } from "../reducers/reducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ loginReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
