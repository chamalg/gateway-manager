const request = require('supertest')
const app = require('../index')


describe('Create new gateway', () => {
    it('should create a new gateway entry', async () => {
        const res = await request(app)
            .post('/api/gateway')
            .send({
                "serialNumber": "ABC1234778",
                "name": "Test Gateway",
                "ipv4Address": "127.0.0.1",
                "masterDeviceList": [
                    {
                        "uid": 123456789,
                        "vendor": "ZTE",
                        "createdDate": "2023-02-13T18:10:58.940Z",
                        "status": "Active"
                    }
                ]
            });
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('data')
    })
});


describe('List gateways', () => {
    it('should list available gateways', async () => {
        const res = await request(app)
            .get('/api/gateway')
            .send();
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('data')
    })
});