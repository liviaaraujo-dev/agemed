import request from 'supertest';
import { app, server } from '../src/server';

describe('Teste da rota /sign-in', () => {
  it('Login deve ser realizado', async () => {    
    const userData = {
      email: 'clinicatest1@gmail.com',
      password: '12345678'
    };

    const response = await request(app).post('/sign-in').send(userData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: expect.any(String),
      email: expect.any(String),
      token: expect.any(String),
    });

    server.close()
  });
});
