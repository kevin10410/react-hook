import React, {
  useState,
  useCallback,
  useMemo,
} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import {
  postIngredient,
  deleteIngredient,
} from '../../api/ingredientService';
import useIngredients from '../../hooks/ingredientsHooks';

const Ingredients = () => {
  const {
    ingredients,
    addIngredient,
    setIngredients,
  } = useIngredients();
  const [isLoading, setIsLoading] = useState(false);

  const addIngredientHandler = async (ingredient) => {
     setIsLoading(true);
    await postIngredient(ingredient)
      .then(res => res.data)
      .then(data => {
        addIngredient(data);
      })
      .catch(err => console.log(err));
    setIsLoading(false);
  };

  const filterIngredientsHandler = useCallback(
    filterIngredients => {
      setIngredients(filterIngredients);
    },
    [setIngredients],
  );

  const removeIngredientHandler = useCallback(id => {
    deleteIngredient(id)
      .then(res => res.data)
      .then(data => {
        setIngredients(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setIngredients]);

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
        {
          useMemo(() => (
            <IngredientList
              ingredients = { ingredients }
              removeIngredient = { removeIngredientHandler }
            />
          ), [ingredients, removeIngredientHandler])
        }
      </section>
    </div>
  );
}

export default Ingredients;
