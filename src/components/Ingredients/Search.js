import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';
import {
  fetchFilteredIngredients,
} from '../../api/ingredientService';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchFilteredIngredients(filter)
      .then(res => res.data)
      .then(data => {
        onLoadIngredients(data);
      })
      .catch(err => { console.log(err) });
  }, [filter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={ filter }
            onChange={ event => { setFilter(event.target.value) }} 
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
