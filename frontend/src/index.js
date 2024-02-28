import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/root';
import './index.css';
import * as themes from './Theme/schema.json';
import { setToLS } from './Utils/storage';


const container = document.getElementById("root");
const root = createRoot(container);
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const Index = () => setToLS('all-themes', themes.default);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

