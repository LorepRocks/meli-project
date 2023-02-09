import request from 'supertest';
import app from '../../../../app';

describe('Request for Items', () => {
  test('GET /items 200', async () => {
    const response = await request(app).get('/api/v1/items').query({ q: 'computer' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('author');
    expect(response.body).toHaveProperty('categories');
    expect(Array.isArray(response.body.categories)).toBe(true);
    expect(response.body).toHaveProperty('items');
    expect(Array.isArray(response.body.items)).toBe(true);
  });

  test('GET /items 400', async () => {
    const response = await request(app).get('/api/v1/items');
    expect(response.status).toBe(400);
    expect(response.text).toEqual(JSON.stringify({ error: 'Missing query parameter in request' }));
  });

  test('GET /items/:id 200', async () => {
    const response = await request(app).get('/api/v1/items/MLA872722335');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('author');
    expect(response.body).toHaveProperty('item');
  });

  test('GET /items/:id 400', async () => {
    const response = await request(app).get('/api/v1/items');
    expect(response.status).toBe(400);
  });
});
