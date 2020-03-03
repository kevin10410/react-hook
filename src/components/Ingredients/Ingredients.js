import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import {
  fetchIngredients,
  postIngredient,
} from '../../api/ingredientService';

const Ingredients = () => {
  const [ ingredients, setIngredients ] = useState([]);

  const addIngredientHandler = ingredient => {
    postIngredient(ingredient)
      .then(res => res.data)
      .then(data => {
        setIngredients(prev => [...prev, data]);
      })
      .catch(err => console.log(err));
  };

  const filterIngredientsHandler = useCallback(filterIngredients => {
    setIngredients(filterIngredients);
  }, [setIngredients]);

  const removeIngredientHandler = id => {
    console.log(id);
  };

  useEffect(() => {
    fetchIngredients()
      .then(res => res.data)
      .then(data => { setIngredients(data) })
      .catch(err => { console.log(err) });
  }, []);

  return (
    <div className="App">
      <IngredientForm
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
