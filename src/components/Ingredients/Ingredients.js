import React, { useState, useCallback, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import {
  postIngredient,
  deleteIngredient,
} from '../../api/ingredientService';

const reducerIngredients = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET':
      return [...payload];
    case 'ADD':
      return [...state, payload];
    case 'DELETE':
      return state
        .filter(item => item.id !== action.payload);
    default:
      return state;
  };
};

const Ingredients = () => {
  const [ingredients, dispatchIngredients] = useReducer(reducerIngredients, []);
  const [isLoading, setIsLoading] = useState(false);

  const addIngredientHandler = async (ingredient) => {
     setIsLoading(true);
    await postIngredient(ingredient)
      .then(res => res.data)
      .then(data => {
        dispatchIngredients({
          type: 'ADD',
          payload: data,
        });
      })
      .catch(err => console.log(err));
    setIsLoading(false);
  };

  const filterIngredientsHandler = useCallback(filterIngredients => {
    dispatchIngredients({
      type: 'SET',
      payload: filterIngredients,
    });
  }, [dispatchIngredients]);

  const removeIngredientHandler = id => {
    deleteIngredient(id)
      .then(res => res.data)
      .then(data => {
        dispatchIngredients({
          type: 'SET',
          payload: data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <IngredientForm
        isLoading = { isLoading }
        addIngredient = { addIngredientHandler }
      />
      <section>
        <Search
          onLoadIngredients = { filterIngredientsHandler }
        />
        <IngredientList
          ingredients = { ingredients }
          removeIngredient = { removeIngredientHandler }
        />
      </section>
    </div>
  );
}

export default Ingredients;
