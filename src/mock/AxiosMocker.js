import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

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

  };

  mockPutRequest() {

  };

  mockDeleteRequest() {

  };
};

export default AxiosMocker;
