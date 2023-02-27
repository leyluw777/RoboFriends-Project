import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';
import { Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { searchRobots } from './reducers';
import { createLogger } from 'redux-logger';


const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
