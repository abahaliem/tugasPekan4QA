const request = require('supertest');
const { expect } = require('chai');

const baseUrl = 'https://kasir-api.belajarqa.com';
const { token } = require('../data/access_Token.js');
const { ProductIdMartabak, ProductIdXpander } = require('../data/idToken.js');

console.log(token)
console.log(ProductIdMartabak)
console.log(ProductIdXpander)

// describe('GET Product list', () => {
//   let response;

//   before(async () => {
//     response = await request(baseUrl)
//       .get('/products')
//       .set('Authorization', `Bearer ${token}`);
//       console.log(JSON.stringify(response.body, null, 2));
//   });

//   it('should return response status 200', () => {
//     console.log(response.body);
//     expect(response.status).to.equal(200);
//   });

//   it('should include "success" in the response body status', () => {
//     expect(response.body).to.have.property('status').that.includes('success');
//   });
// });

describe('GET Category list', () => {
    it('should return response status 200 and include "success" in the response body', async () => {
      const response = await request(baseUrl)
        .get('/products')
        .set({ Authorization: `Bearer ${token}` });
  
      console.log(JSON.stringify(response.body, null, 2));
      expect(response.status).to.equal(200);
      expect(response.body.status).to.include('success');
    });
  });




describe('GET Product Detail Mobil Xpander', () => {
  let response;

  before(async () => {
    response = await request(baseUrl)
      .get(`/products/${ProductIdXpander}`)
      .set('Authorization', `Bearer ${token}`);
  });

  it('should return response status 200', () => {
    console.log(response.body);
    expect(response.status).to.equal(200);
  });

  it('should include "Honda Mobilio" in the response name', () => {
    expect(response.body.data.product.name).to.include('Honda Mobilio');
  });

  it('should not include "Bajaj" in the response name (negative)', () => {
    expect(response.body.data.product.name).to.not.include('Bajaj');
  });
});

describe('GET Product Detail Makanan Martabak', () => {
  let response;

  before(async () => {
    response = await request(baseUrl)
      .get(`/products/${ProductIdMartabak}`)
      .set('Authorization', `Bearer ${token}`);
  });

  it('should return response status 200', () => {
    console.log(response.body);
    expect(response.status).to.equal(200);
  });

  it('should include "Martabak Telor" in the response name', () => {
    expect(response.body.data.product.name).to.include('Martabak Telor');
  });

  it('should not include "Ketoprak" in the response name (negative)', () => {
    expect(response.body.data.product.name).to.not.include('Ketoprak');
  });
});
