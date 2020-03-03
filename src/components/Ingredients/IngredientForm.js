import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [name, setName] = useState('OTree') ;
  const [amount, setAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.addIngredient({ name, amount });
    clearInputItems();
  };

  const clearInputItems = () => {
    setName('');
    setAmount('');
  };

  const updateNameHandler = event => {
    setName(event.target.value);
  };

  const updateAmountHandler = event => {
    setAmount(event.target.value);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input 
              type="text"
              id="title"
              value={name}
              onChange={ event => { updateNameHandler(event) }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={ event => { updateAmountHandler(event) }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {
              props.isLoading && <LoadingIndicator/>
            }
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
