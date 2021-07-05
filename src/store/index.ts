
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/* Store reducers */
import carReducer from "./car/reducer";

const reducers = combineReducers({
    car: carReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools({ trace: true })(applyMiddleware(thunk))
);

export default store;

/* Exports actions */
export { default as carActions } from "./car/actions";