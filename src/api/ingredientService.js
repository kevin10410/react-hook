import axios from 'axios';

export const fetchIngredients = () => axios
  .get('/ingredients');

export const postIngredient = ingredient => axios
  .post('/ingredient', ingredient);

export const deleteIngredient = id => axios
  .delete(`/ingredient/${id}`);

export const fetchFilteredIngredients = filter => axios
  .get(`/ingredients/${filter}`);
  