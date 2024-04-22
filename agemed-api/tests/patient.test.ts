import request from 'supertest';
import { app, server } from '../src/server';

describe('Teste de rotas relacionadas a Doctor', () => {
  let patientId : string;

  const userData = {
    email: 'clinicatest1@gmail.com',
    password: '12345678'
  };

  it('Get Patients', async () => {    
    const loginResponse  = await request(app).post('/sign-in').send(userData);

    const response = await request(app).get('/patients').set('Authorization', `Bearer ${loginResponse.body.token}`)
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();

    server.close();
  });
  
  it('Post Patient', async () => {    
    const loginResponse  = await request(app).post('/sign-in').send(userData);
    
    const patientData = {
      name: "Ana Livia",
      cpf: "082.041.301-93",
      phone: "(88) 992828282",
      email: "ana@gmail.com"
    }
    
    const response = await request(app)
    .post('/patient')
    .set('Authorization', `Bearer ${loginResponse.body.token}`)
    .send(patientData)
    expect(response.status).toBe(201);

    patientId = response.body.id;

    server.close();
  });

  it('Put Patient', async () => {    
    const loginResponse  = await request(app).post('/sign-in').send(userData);

    const patientData = {
      name: "ana Update"
    }
    
    const response = await request(app)
      .put(`/patient/${patientId}`)
      .set('Authorization', `Bearer ${loginResponse.body.token}`)
      .send(patientData)

      expect(response.status).toBe(200);

      server.close();
  });

  it('Delete Patient', async () => {    
    const loginResponse  = await request(app).post('/sign-in').send(userData);
    
    const response = await request(app)
      .delete(`/patient/${patientId}`)
      .set('Authorization', `Bearer ${loginResponse.body.token}`)

      expect(response.status).toBe(204);

      server.close();
  });
});
