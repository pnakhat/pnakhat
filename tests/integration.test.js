const request = require('supertest');
const app = require('../src/app');
describe('Integration Tests', () => {
  it('should serve login page', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
  it('should login successfully', async () => {
    const res = await request(app).post('/login').send({ username: 'admin', password: 'password123' });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Login successful');
  });
});
