import React, { useState, useEffect } from 'react';
import axios from 'axios';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ ingredients, setIngredients ] = useState([]);

  const fetchIngredient = () => {
    axios.get('/ingredients')
      .then(res => res.data)
      .then(data => { setIngredients(data) })
      .catch(err => { console.log(err) });
  };

  const addIngredientHandler = ingredient => {
    axios.post('/ingredient', ingredient)
      .then(res => res.data)
      .then(data => {
        setIngredients(prev => [...prev, data]);
      })
      .catch(err => console.log(err));
  };

  const removeIngredientHandler = id => {
    console.log(id);
  };

  useEffect(() => {
    fetchIngredient();
  }, []);

  return (
    <div className="App">
      <IngredientForm
        addIngredient = { addIngredientHandler }
      />
      <section>
        <Search />
        <IngredientList
          ingredients = { ingredients }
          removeIngredient = { removeIngredientHandler }
        />
      </section>
    </div>
  );
}

export default Ingredients;
