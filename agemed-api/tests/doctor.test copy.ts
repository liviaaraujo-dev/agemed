import request from 'supertest';
import { app, server } from '../src/server';

describe('Teste de rotas relacionadas a Doctor', () => {
  const userData = {
    email: 'clinicatest1@gmail.com',
    password: '12345678'
  };
  let doctorId : string;

 
  
  it('Post Doctor', async () => {    
    const loginResponse  = await request(app).post('/sign-in').send(userData);
    
    const doctorData = {
      name: "Dr ana",
      crm: "110202/ce",
      specialties: ["oftalmologista"],
      phone: "(88) 992828282"
    }
    
    const response = await request(app)
    .post('/doctor')
    .set('Authorization', `Bearer ${loginResponse.body.token}`)
    .send(doctorData)
    expect(response.status).toBe(201);

    doctorId = response.body.id;

    server.close();
  });


});
