import React from 'react';
import ReactDOM from 'react-dom';
import AxiosMocker from './mock/AxiosMocker';

import './index.css';
import App from './App';

const mockAxios = new AxiosMocker();
mockAxios.start();

ReactDOM.render(<App />, document.getElementById('root'));
