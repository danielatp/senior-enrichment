'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Root from './components/Root';
import Home from './components/Home';
import NavBar from './components/NavBar';

render (
  <Provider store={store}>
    <NavBar />
  </Provider>,
  document.getElementById('root')
)
