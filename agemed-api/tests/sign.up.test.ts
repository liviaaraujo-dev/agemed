import request from 'supertest';
import { app, server } from '../src/server';

describe('Teste da rota /sign-up', () => {
  it('Cadastro deve ser realizado', async () => {    
    const userData = {
      email: 'clinicatest1@gmail.com',
      password: '12345678',
      name: "clinica",
      phoneNumber: "(99)99393939",
      street: "rua",
      neighborhood: "bairro",
      city: "juaziero",
      uf: "ce",
      postalCode: "6490-000",
      numberAddress: 32
    };

    const response = await request(app).post('/sign-up').send(userData);
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: expect.any(String),
      email: expect.any(String),
      token: expect.any(String),
    });

    server.close()
  });
});
