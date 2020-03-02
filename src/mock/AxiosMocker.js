import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { mockIngredients } from './mockData';

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

  };

  mockGetIngredients() {
    this.mock
      .onGet('/ingredients')
      .reply(200, mockIngredients);
  };

  mockPostIngredient() {
    this.mock
      .onPost('/ingredient')
      .reply(config => {
        const newIngredient = {
          ...JSON.parse(config.data),
          id: mockIngredients.length,
        };
        mockIngredients.push(newIngredient);
        return [200, newIngredient];
      });
  };
};

export default AxiosMocker;
