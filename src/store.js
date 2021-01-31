import {createStore,applyMiddleware  } from "redux";
import imagereducer  from "./Reducer";
import ThunkMiddleware from "redux-thunk";
import LoggerMiddleware from "redux-logger";
const store= createStore(imagereducer,applyMiddleware(LoggerMiddleware,ThunkMiddleware))
export default store;