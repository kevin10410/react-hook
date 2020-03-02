import React from 'react';

import './IngredientList.css';

const IngredientList = props => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {
          props.ingredients
            .map(({id, name, amount}) => (
              <li key={id}
                onClick={ () => { props.removeIngredient(id)} }>
                <span>{name}</span>
                <span>{amount}x</span>
              </li>
            ))
        }
      </ul>
    </section>
  );
};

export default IngredientList;
