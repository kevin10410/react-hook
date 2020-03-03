import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';
import {
  fetchFilteredIngredients,
} from '../../api/ingredientService';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [filter, setFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      // filter is the oldone before 0.5s
      if (filter !== inputRef.current.value) return;
      fetchFilteredIngredients(filter)
        .then(res => res.data)
        .then(data => {
          onLoadIngredients(data);
        })
        .catch(err => { console.log(err) });
      }, 500);
    return () => { clearTimeout(timer); };
  }, [filter, onLoadIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={ inputRef }
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
