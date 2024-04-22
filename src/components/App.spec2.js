import App2 from './App.js';
import { mockTeste2 } from '../teste/mock.js';
import { buscarDetalhes } from '../lib/tmdb.js'; 

// Simula a função buscarDetalhes do módulo '../lib/tmdb.js' para retornar uma promessa resolvida com o valor mockTeste2
jest.mock('../lib/tmdb.js', () => ({
  buscarDetalhes: jest.fn(() => Promise.resolve(mockTeste2)), // Aqui estamos simulando a função buscarDetalhes
}));

// Descreve um conjunto de testes para o componente App
describe('App2', () => {
  // Teste: Deve renderizar sem problemas
  it('Deve renderizar 1 card', async () => {
  
    // Chama a função App e armazena o resultado
    App2();

    // Verifica se a função buscarDetalhes foi chamada uma vez
    expect(buscarDetalhes).toHaveBeenCalledTimes(1);
  });
});