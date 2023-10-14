const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const utils = require('../src/utils/data')

describe('GET /rickandmorty/character/:id', () => {
    // Primer test
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200)
    });
  
    // Segundo test
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get('/rickandmorty/character/1')
      expect(response.body).toHaveProperty('id')
      expect(response.body).toHaveProperty('name')
      expect(response.body).toHaveProperty('species')
      expect(response.body).toHaveProperty('gender')
      expect(response.body).toHaveProperty('status')
      expect(response.body).toHaveProperty('origin')
      expect(response.body).toHaveProperty('image')
    })
  
    // Tercer test
    it('Si hay un error responde con status: 500', async () => {
      await agent.get('/rickandmorty/character/invalid_id').expect(500)
    })
})



describe('GET /rickandmorty/login', () => {
    it('Debería obtener access: true con información de login correcta', async () => {
      const userData = users[0];  // Tomamos el primer usuario
      const { email, password } = userData
  
      const response = await agent
        .get(`/rickandmorty/login?email=${email}&password=${password}`)
        .expect(200);
      expect(response.body).toEqual({ access: true })
    });
  
    it('Debería obtener access: false con información de login incorrecta', async () => {
      const incorrectEmail = 'incorrect@example.com'
      const incorrectPassword = 'wrongpassword'
      
      const response = await agent
        .get(`/rickandmorty/login?email=${incorrectEmail}&password=${incorrectPassword}`)
        .expect(200);
      expect(response.body).toEqual({ access: false })
    })
})

describe('POST /rickandmorty/fav', () => {
    it('Debería devolver un arreglo con el elemento enviado por body', async () => {
      const payload = { id: 1, name: 'Rick Sanchez' }
  
      const response = await agent
        .post('/rickandmorty/fav')
        .send(payload)
        .expect(200)
  
      expect(response.body).toEqual([payload])
    })
  
    it('Debería incluir un nuevo elemento enviado en un arreglo con elementos previamente enviados', async () => {
      const payload1 = { id: 1, name: 'Rick Sanchez' }
      const payload2 = { id: 2, name: 'Morty Smith' }
  
      await agent.post('/rickandmorty/fav').send(payload1)
  
      const response = await agent
        .post('/rickandmorty/fav')
        .send(payload2)
        .expect(200);
  
      expect(response.body).toEqual([payload1, payload2])
    })
})

describe('DELETE /rickandmorty/fav/:id', () => {
    it('Elimina un personaje existente por su ID', async () => {
      const idToDelete = 1
  
      const response = await agent.delete(`/rickandmorty/fav/${idToDelete}`)
  
      expect(response.status).toBe(200);
  
      const updatedFavorites = response.body;
      const deletedCharacter = characters.find(char => char.id === idToDelete);
      expect(updatedFavorites).not.toContainEqual(deletedCharacter);
    })
  
    it('Intenta eliminar un personaje no existente', async () => {
      const idToDelete = 9999
      const response = await agent.delete(`/rickandmorty/fav/${idToDelete}`);
  
      expect(response.status).toBe(200);
  
      const updatedFavorites = response.body;
      expect(updatedFavorites).toEqual(characters);
    })
  })