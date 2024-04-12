import { mockTeste } from '../teste/mock.js';
import { buscarFilmes } from '../lib/tmdb.js';

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