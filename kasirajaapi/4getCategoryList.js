const request = require('supertest');
const { expect } = require('chai');
const baseUrl = 'https://kasir-api.belajarqa.com';
const { token } = require('../data/access_Token.js');

describe('GET Category list', () => {
    it('should return status 200 and success in the response body', async () => {
        const response = await request(baseUrl)
            .get('/categories')
            .set('Authorization', `Bearer ${token}`);

        const responseBody = response.body;

        console.log(JSON.stringify(responseBody, null, 2));

        expect(response.status).to.equal(200);
        expect(responseBody.status).to.include('success');
        expect(responseBody.status).to.not.include('fail');
    });
});
