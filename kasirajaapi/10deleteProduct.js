const request = require('supertest');
const { expect } = require('chai');
const baseUrl = 'https://kasir-api.belajarqa.com';
const { token } = require('../data/access_Token');
const { ProductIdMartabak, ProductIdXpander } = require('../data/idToken.js');

console.log(token);
console.log(ProductIdMartabak);
console.log(ProductIdXpander);

describe('DELETE Product Mobil Xpander', () => {
  let response;

  beforeEach(async () => {
    response = await request(baseUrl)
      .delete(`/products/${ProductIdXpander}`)
      .set({ Authorization: `Bearer ${token}` });
  });

  it('should have response status equal to 200', async () => {
    console.log(response.status);
    console.log(response.body);
    expect(response.status).to.equal(200);
  });

  it('should have response include message "Product berhasil dihapus"', async () => {
    expect(response.body.message).to.include('Product berhasil dihapus');
  });

  it('should have response not include message "Product gagal dihapus" (negatif)', async () => {
    expect(response.body.message).to.not.include('Product gagal dihapus');
  });
});

describe('DELETE Product Martabak', () => {
  let response;

  beforeEach(async () => {
    response = await request(baseUrl)
      .delete(`/products/${ProductIdMartabak}`)
      .set({ Authorization: `Bearer ${token}` });
  });

  it('should have response status equal to 200', async () => {
    console.log(response.status);
    console.log(response.body);
    expect(response.status).to.equal(200);
  });

  it('should have response include message "Product berhasil dihapus"', async () => {
    expect(response.body.message).to.include('Product berhasil dihapus');
  });

  it('should have response not include message "Product gagal dihapus" (negatif)', async () => {
    expect(response.body.message).to.not.include('Product gagal dihapus');
  });
});
