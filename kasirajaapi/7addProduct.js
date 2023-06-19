const request = require('supertest');
const { expect } = require('chai');

const baseUrl = 'https://kasir-api.belajarqa.com';
const { token } = require('../data/access_Token');
const { CategoryIdMakanan, CategoryIdKendaraan } = require('../data/idToken');

console.log(token);
console.log(CategoryIdKendaraan);
console.log(CategoryIdMakanan);

describe('POST Add Product Kendaraan', () => {
  let response;

  before(async () => {
    response = await request(baseUrl)
      .post('/products')
      .set('Authorization', `Bearer ${token}`)
      .send({
        category_id: CategoryIdKendaraan,
        code: 'Kend101',
        name: 'Mobil Xpander',
        price: '230000000',
        cost: '150000000',
        stock: '20'
      });
  });

  it('should return response status 201', () => {
    console.log(response.status);
    console.log(response.body);
    expect(response.status).to.equal(201);
  });

  it('should include "Mobil Xpander" in the response name', () => {
    expect(response.body.data.name).to.include('Mobil Xpander');
  });

  it('should not include "Becak" in the response name (negative)', () => {
    expect(response.body.data.name).to.not.include('Becak');
  });
});

describe('POST Add Product Makanan', () => {
  let response;

  before(async () => {
    response = await request(baseUrl)
      .post('/products')
      .set('Authorization', `Bearer ${token}`)
      .send({
        category_id: CategoryIdMakanan,
        code: 'Mak101',
        name: 'Martabak Telor',
        price: '30000',
        cost: '25000',
        stock: '30'
      });
  });

  it('should return response status 201', () => {
    console.log(response.status);
    console.log(response.body);
    expect(response.status).to.equal(201);
  });

  it('should include "Martabak Telor" in the response name', () => {
    expect(response.body.data.name).to.include('Martabak Telor');
  });

  it('should not include "Mangga" in the response name (negative)', () => {
    expect(response.body.data.name).to.not.include('Mangga');
  });
});
