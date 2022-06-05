import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { registerRootComponent } from 'expo';
import App from './src/components/App';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

registerRootComponent(RNRedux)
