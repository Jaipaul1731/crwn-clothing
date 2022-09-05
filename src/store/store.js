import { compose,applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';
import logger from "redux-logger";
// import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from "./rootReducer";

const middleWare=[logger]
const composedEnhancer = compose(applyMiddleware(...middleWare))
// undefined is add to use addtion state in store.it optional second parameter.
export const store=createStore(rootReducer,undefined,composedEnhancer)