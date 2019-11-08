import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './Redux/Reducers/post.reducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
