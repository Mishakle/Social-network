import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import authReducer from './reducers/authReducer';
import socialDataReducer from './reducers/socialDataReducer';
import userReducer from './reducers/userReducer';
import dialogReducer from './reducers/dialogReducer';
import { rootWatcher } from './sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  router: connectRouter(history),
  socialData: socialDataReducer,
  user: userReducer,
  dialog: dialogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    composeWithDevTools(),
  ),
);

sagaMiddleware.run(rootWatcher);

export default store;
