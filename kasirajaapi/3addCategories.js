const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/access_Token.js')

console.log(token)

describe ('POST Add Category Kendaraan', async () => {
    let response = request(baseUrl)
    .post('/categories')
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "name": "Kendaraan",
        "description": "Kendaraan"
     })
    //assert
    it('Response status is equal to 201', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(201)
    })
    it('Response name is to include: Kendaraaan', async() => {
        expect((await response).body.data.name).to.include("Kendaraan")
    })
    it('Response name is to not include: Pertanian (Negatif)', async() => {
        expect((await response).body.data.name).to.not.include("Pertanian")
    })
})

describe ('POST Add Category Makanan', async () => {
    let response = request(baseUrl)
    .post('/categories')
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "name": "Makanan",
        "description": "Jenis - Jenis Makanan"
     })
    //assert
    it('Response status is equal to 201', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(201)
    })
    it('Response name is to include: Makanan', async() => {
        expect((await response).body.data.name).to.include("Makanan")
    })
    it('Response name is to not include: Bahan Material (negatif)', async() => {
        expect((await response).body.data.name).to.not.include("Semen")
    })
})