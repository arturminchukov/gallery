import React from 'react';
import ReactDOM from 'react-dom';
import { Gallery } from './components/Gallery/Gallery';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function middleware({ dispatch, getState }) {
    return next => (action) => {
        if (typeof action === 'function')
            return action(dispatch, getState);

        return next(action);
    };
}

const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(middleware)),
);

ReactDOM.render(<Provider store={store}><Gallery/></Provider>,document.getElementById('root'));