import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './Reducers/root';

const container = document.getElementById("root");
const root = createRoot(container);
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

