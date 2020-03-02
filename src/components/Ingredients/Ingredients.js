import React, { useState, useEffect } from 'react';
import axios from 'axios';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ ingredients, setIngredients ] = useState([]);
  const [ filter, setFilter ] = useState('');
  const [ displayIngredients, setDisplayIngredients] = useState([]);

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

  const updateFilterHandler = value => {
    setFilter(value);
  };

  const removeIngredientHandler = id => {
    console.log(id);
  };

  useEffect(() => {
    fetchIngredient();
  }, []);

  useEffect(() => {
    setDisplayIngredients(() => {
      return ingredients
        .filter(({ name }) => name.includes(filter));
    });
  }, [ingredients, filter]);

  return (
    <div className="App">
      <IngredientForm
        addIngredient = { addIngredientHandler }
      />
      <section>
        <Search
          filter = { filter }
          updateFilter = { updateFilterHandler }
        />
        <IngredientList
          ingredients = { displayIngredients }
          removeIngredient = { removeIngredientHandler }
        />
      </section>
    </div>
  );
}

export default Ingredients;
