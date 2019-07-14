import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSaggaMiddleware from 'redux-saga';
import reducer from './reducer/rootreducer';
import rootsaga from './sagas/rootsaga';
const sagaMiddleWare  =createSaggaMiddleware();
const middleWare = applyMiddleware(sagaMiddleWare,createLogger());
const store = createStore(reducer,middleWare)
sagaMiddleWare.run(rootsaga);

export default store;

