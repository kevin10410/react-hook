import { useReducer, useCallback } from 'react';

const reducerIngredients = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET':
      return [...payload];
    case 'ADD':
      return [...state, payload];
    default:
      return state;
  };
};

const useIngredients = () => {
  const [
    ingredients,
    dispatchIngredients
  ] = useReducer(reducerIngredients, []);

  const addIngredient = useCallback(ingredient => {
    dispatchIngredients({
      type: 'ADD',
      payload: ingredient,
    })
  }, []);

  const setIngredients = useCallback(ingredients => {
    dispatchIngredients({
      type: 'SET',
      payload: ingredients,
    })
  }, []);

  return {
    ingredients,
    addIngredient,
    setIngredients,
  };
};

export default useIngredients;
