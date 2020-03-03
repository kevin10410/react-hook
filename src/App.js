import React, { useContext } from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';
import { ContextAuth } from '../src/context/contextAuth';

const App = props => {
  const contextAuth = useContext(ContextAuth);

  return (
    contextAuth.isAuth
      ? <Ingredients />
      : <Auth/>
  )
};

export default App;
