import React from 'react';
import ReactDOM from 'react-dom';
import AxiosMocker from './mock/AxiosMocker';

import './index.css';
import App from './App';
import { ContextAuthProvider } from './context/contextAuth';

const mockAxios = new AxiosMocker();
mockAxios.start();

ReactDOM.render(
  <ContextAuthProvider>
    <App />
  </ContextAuthProvider>,
  document.getElementById('root'),
);
