const request = require('supertest');
const { expect } = require('chai');

const baseUrl = 'https://kasir-api.belajarqa.com';
const { token } = require('../data/access_Token.js');
const { ProductIdMartabak, ProductIdXpander, CategoryIdKendaraan, CategoryIdMakanan } = require('../data/idToken.js');

console.log(token);
console.log(ProductIdMartabak);
console.log(ProductIdXpander);
console.log(CategoryIdKendaraan);
console.log(CategoryIdMakanan);

describe('PUT Update Product Mobil Xpander', () => {
  let response;

  beforeEach(async () => {
    response = await request(baseUrl)
      .put(`/products/${ProductIdXpander}`)
      .set({ Authorization: `Bearer ${token}` })
      .send({
        category_id: CategoryIdKendaraan,
        code: 'Kend101',
        name: 'Honda Mobilio',
        price: '300000000',
        cost: '250000000',
        stock: '40',
      });
  });

  it('should have response status equal to 200', () => {
    console.log(response.status);
    console.log(response.body);
    expect(response.status).to.equal(200);
  });

  it('should have response status not equal to 404', () => {
    expect(response.status).to.not.equal(404);
  });

  it('should have response name including "Honda Mobilio"', () => {
    expect(response.body.data.name).to.include('Honda Mobilio');
  });

  it('should have response name not including "Kijang"', () => {
    expect(response.body.data.name).to.not.include('Kijang');
  });
});

describe('PUT Update Product Martabak', () => {
  let response;

  beforeEach(async () => {
    response = await request(baseUrl)
      .put(`/products/${ProductIdMartabak}`)
      .set({ Authorization: `Bearer ${token}` })
      .send({
        category_id: CategoryIdMakanan,
        code: 'Mak101Up',
        name: 'Martabak Telor Istimewa',
        price: '35000',
        cost: '2500',
        stock: '60',
      });
  });

  it('should have response status equal to 200', () => {
    console.log(response.status);
    console.log(response.body);
    expect(response.status).to.equal(200);
  });

  it('should have response status not equal to 404', () => {
    expect(response.status).to.not.equal(404);
  });

  it('should have response name including "Martabak Telor Istimewa"', () => {
    expect(response.body.data.name).to.include('Martabak Telor Istimewa');
  });

  it('should have response name not including "Nasi Goreng"', () => {
    expect(response.body.data.name).to.not.include('Nasi Goreng');
  });
});
