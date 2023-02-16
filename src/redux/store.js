import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./counter/reducer";

let rootReducers = combineReducers({
    counter: counterReducer,
});

const compooseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, compooseEnhancer(applyMiddleware(thunk)));

export default store;
