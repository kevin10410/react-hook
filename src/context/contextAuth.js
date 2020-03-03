import React, { useState } from 'react';

export const ContextAuth = React.createContext({
  isAuth: false,
  login: () => {},
});

export const ContextAuthProvider = props => {
  const [isAuth, setIsAuth] = useState(false);

  const loginHandler = () => { setIsAuth(true) };

  return (
    <ContextAuth.Provider
      value = {{
        isAuth,
        login: loginHandler
      }}
    >
      {
        props.children
      }
    </ContextAuth.Provider>
  );
};
