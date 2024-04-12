import App from './App.js';
import { mockTeste } from '../teste/mock.js';
import { buscarFilmes } from '../lib/tmdb.js'; 

// Simula a função buscarFilmes do módulo '../lib/tmdb.js' para retornar uma promessa resolvida com o valor mockTeste
jest.mock('../lib/tmdb.js', () => ({
  buscarFilmes: jest.fn(() => Promise.resolve(mockTeste)), // Aqui estamos simulando a função buscarFilmes
}));

// Descreve um conjunto de testes para o componente App
describe('App', () => {
  // Teste: Deve renderizar sem problemas
  it('Deve renderizar 4 cards', async () => {
  
    // Chama a função App e armazena o resultado
    App();

    // Verifica se a função buscarFilmes foi chamada uma vez
    expect(buscarFilmes).toHaveBeenCalledTimes(1);
  });
});