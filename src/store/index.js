import { applyMiddleware, createStore, compose, combineReducers } from "redux";

import thunk from "redux-thunk";
import favoriteReducer from "../reducers/favoriteReducer";
import reposReducer from "../reducers/reposReducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ repos: reposReducer, favortiesList: favoriteReducer })

export const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));