/* eslint-disable */

const request = require('supertest');
const app = require('../server/app');


describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('It should respond to restaurant_id', () => {
    return request(app).get('/?id=1').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('It should respond to restaurant_id', () => {
    return request(app).get('/?id=100').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
