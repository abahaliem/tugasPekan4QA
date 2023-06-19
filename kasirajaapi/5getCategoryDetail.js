const request = require('supertest');
const { expect } = require('chai');

const baseUrl = 'https://kasir-api.belajarqa.com';
const { token } = require('../data/access_Token');
const { CategoryIdKendaraan, CategoryIdMakanan } = require('../data/idToken.js');

console.log(token);
console.log(CategoryIdKendaraan);
console.log(CategoryIdMakanan);

describe('GET Category list', () => {
  it('should return response status 200 and include "success" in the response body', async () => {
    const response = await request(baseUrl)
      .get('/categories')
      .set({ Authorization: `Bearer ${token}` });

    console.log(JSON.stringify(response.body, null, 2));
    expect(response.status).to.equal(200);
    expect(response.body.status).to.include('success');
  });
});

describe('GET Category Detail Kendaraan', () => {
  it('should return response status 200 and include "Kendaraan" in the response body', async () => {
    const response = await request(baseUrl)
      .get(`/categories/${CategoryIdKendaraan}`)
      .set({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });

    console.log(JSON.stringify(response.body, null, 2));
    expect(response.status).to.equal(200);
    expect(response.body.data.category.name).to.include('Kendaraan');
    expect(response.body.data.category.name).to.not.include('Pohon');
  });
});

describe('GET Category Detail Makanan', () => {
  it('should return response status 200 and include "Makanan" in the response body', async () => {
    const response = await request(baseUrl)
      .get(`/categories/${CategoryIdMakanan}`)
      .set({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });

    console.log(JSON.stringify(response.body, null, 2));
    expect(response.status).to.equal(200);
    expect(response.body.data.category.name).to.include('Makanan');
    expect(response.body.data.category.name).to.not.include('Perabotan');
  });
});
