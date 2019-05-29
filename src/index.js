import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary'
import App from './App';

import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchMoviesAsync } from './actions/index';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

store.dispatch(fetchMoviesAsync());
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);