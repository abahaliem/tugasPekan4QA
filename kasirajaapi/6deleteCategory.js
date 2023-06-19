const request = require('supertest');
const { expect } = require('chai');

const baseUrl = 'https://kasir-api.belajarqa.com';
const { token } = require('../data/access_Token');
const { CategoryIdMakanan, CategoryIdKendaraan } = require('../data/idToken');

console.log(token);
console.log(CategoryIdMakanan);

describe('DELETE Category Makanan', () => {
  let response;

  beforeEach(async () => {
    response = await request(baseUrl)
      .delete(`/categories/${CategoryIdMakanan}`)
      .set({ Authorization: `Bearer ${token}` });
  });

  it('should return response status 200', () => {
    console.log(response.status);
    console.log(response.body);
    expect(response.status).to.equal(200);
  });

  it('should include "success" message in the response body', () => {
    console.log(response.body);
    expect(response.body).to.include({ status: 'success' });
  });

  it('should not include "fail" message in the response body', () => {
    console.log(response.body);
    expect(response.body).to.not.include({ status: 'fail' });
  });
});

describe('DELETE Category Kendaraan', () => {
  let response;

  beforeEach(async () => {
    response = await request(baseUrl)
      .delete(`/categories/${CategoryIdKendaraan}`)
      .set({ Authorization: `Bearer ${token}` });
  });

  it('should return response status 200', () => {
    console.log(response.status);
    console.log(response.body);
    expect(response.status).to.equal(200);
  });

  it('should include "success" message in the response body', () => {
    console.log(response.body);
    expect(response.body).to.include({ status: 'success' });
  });

  it('should not include "fail" message in the response body', () => {
    console.log(response.body);
    expect(response.body).to.not.include({ status: 'fail' });
  });
});