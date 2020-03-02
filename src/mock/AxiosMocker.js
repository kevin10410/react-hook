import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import mockIngredients from './mockData';

class AxiosMocker {
  constructor() {
    this.mock = new MockAdapter(axios);
  };

  start() {
    this.mockGetRequest();
    this.mockPostRequest();
    this.mockPutRequest();
    this.mockDeleteRequest();
  }

  mockGetRequest() {
    this.mockGetIngredients();
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

        return [200];
      });
  };
};

export default AxiosMocker;
