const request = require('supertest')
const baseUrl = 'https://kasir-api.belajarqa.com'

describe ('POST Authorization - registration', async () => {
    let response = request(baseUrl)
    .post('/registration')
    .send({
        "name" : "Toko Abdul Alim",
        "email": "alami4238@gmail.com",
        "password": "1234567890"  
    })
    console.log((await response).status)
    console.log((await response).body)

})