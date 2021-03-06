import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

import configureStore from './store/configureStore';
import initialState from './store/initialState';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

const store2 = configureStore(initialState);

ReactDOM.render(
  <Provider store={store2} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

