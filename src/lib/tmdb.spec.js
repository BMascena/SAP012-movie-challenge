import { mockTeste, mockTeste2 } from '../teste/mock.js';
import { buscarDetalhes, buscarFilmes } from '../lib/tmdb.js';

// Simula a função fetch usando jest.fn()
global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockTeste) }));

describe('buscarFilmes', () => {
  it('deve chamar fetch com a URL correta', async () => {
    // Chama a função buscarFilmes
    await buscarFilmes();

    // Verifica se a função fetch foi chamada com a URL correta
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/list/8294392?language=pt-BR&page=1',
      expect.any(Object)
    );
  });
});

// Define o filmeId antes de usar no teste
const filmeId = '#123'; // Suponha que '#123' seja um exemplo de ID de filme

// Simula a função fetch usando jest.fn()
global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockTeste2) }));

describe('buscarDetalhes', () => {
  it('deve chamar fetch com a URL correta', async () => {

    // Chama a função buscarFilmes
    await buscarDetalhes(filmeId);

    // Verifica se a função fetch foi chamada com a URL correta
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/movie/${filmeId.slice(1)}?language=pt-BR`,
      expect.any(Object)
    );
  });
});