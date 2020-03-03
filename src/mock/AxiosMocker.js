import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import mockIngredients from './mockData';

class AxiosMocker {
  constructor() {
    this.mock = new MockAdapter(axios, { delayResponse: 200 });
  };

  start() {
    this.mockGetRequest();
    this.mockPostRequest();
    this.mockPutRequest();
    this.mockDeleteRequest();
  }

  mockGetRequest() {
    this.mockGetIngredients();
    this.mockGetFilteredIngredients();
  };

  mockPostRequest() {
    this.mockPostIngredient();
  };

  mockPutRequest() {

  };

  mockDeleteRequest() {
    this.mockDeleteIngredient();
  };

  mockGetIngredients() {
    this.mock
      .onGet('/ingredients')
      .reply(200, mockIngredients.getIngredients());
  };

  mockGetFilteredIngredients() {
    this.mock
      .onGet(/\/ingredients\/\w?/)
      .reply(config => {
        const filter = config.url
          .split('/')
          .pop();
        
          return [
            200,
            mockIngredients.getIngredients()
              .filter(ingredient => ingredient.name.includes(filter))
          ]
      });
  };

  mockPostIngredient() {
    this.mock
      .onPost('/ingredient')
      .reply(config => {
        mockIngredients
          .addIngredient(JSON.parse(config.data));
        return [200, mockIngredients.getLastIngredient()];
      });
  };

  mockDeleteIngredient() {
    this.mock
      .onDelete(/\/ingredient\/\d+/)
      .reply(config => {
        const deleteId = config.url
          .split('/')
          .pop();

        mockIngredients
          .deleteIngredient(deleteId);

        return [200, mockIngredients.getIngredients()];
      });
  };
};

export default AxiosMocker;
