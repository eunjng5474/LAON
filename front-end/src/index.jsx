import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './App.jsx';
import NavBar from './templates/NavBar.jsx';
import TabBar from './templates/TabBar.jsx';
import "./fonts/Font.css"

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <Router>
      <App />
      <TabBar/>
    </Router>
  </Provider>
);