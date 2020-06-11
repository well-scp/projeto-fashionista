import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import Routes from '../../routes';  // index

import { store, persistor } from '../../store';

import {Topbar, Cart} from '../containers';
import Routes from '../../routes';

//import './App.scss';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <div className="app" data-testid="app">
        <Router>
          <Topbar />
        
          <Routes />

          <Cart />
        </Router>
      </div>
    </PersistGate>
  </Provider>
);

export default App;