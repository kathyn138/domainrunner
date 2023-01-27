import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import rootReducer from './Reducers/root';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
