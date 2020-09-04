import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

// @ts-ignore
middleWares.push(createLogger({level:'info'}))

export function configureStore() {
   //const composeEnhancers = composeWithDevTools({serealize: true, trace: true, traceLimit: 25});
    const store = createStore(rootReducer, {}, applyMiddleware(...middleWares));
    sagaMiddleware.run(rootSaga);
    return store;
}