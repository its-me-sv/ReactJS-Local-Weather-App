import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './root-reducer';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));