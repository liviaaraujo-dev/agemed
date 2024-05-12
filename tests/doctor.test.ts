import request from 'supertest';
import { app, server } from '../src/server';

describe('Teste de rotas relacionadas a Doctor', () => {
  const userData = {
    email: 'clinicatest1@gmail.com',
    password: '12345678'
  };
  let doctorId : string;

  it('Get Doctors', async () => {    
    const loginResponse  = await request(app).post('/sign-in').send(userData);

    const response = await request(app).get('/doctors').set('Authorization', `Bearer ${loginResponse.body.token}`)
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();

    server.close();
  });
  
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

  it('Put Doctor', async () => {    
    const loginResponse  = await request(app).post('/sign-in').send(userData);

    const doctorData = {
      name: "Dr ana Update"
    }
    
    const response = await request(app)
      .put(`/doctor/${doctorId}`)
      .set('Authorization', `Bearer ${loginResponse.body.token}`)
      .send(doctorData)

      expect(response.status).toBe(200);

      server.close();
  });

  it('Delete Doctor', async () => {    
    const loginResponse  = await request(app).post('/sign-in').send(userData);
    
    const response = await request(app)
      .delete(`/doctor/${doctorId}`)
      .set('Authorization', `Bearer ${loginResponse.body.token}`)

      expect(response.status).toBe(204);

      server.close();
  });
});
