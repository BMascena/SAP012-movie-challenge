import App from './App.js';
import { buscarFilmes } from '../lib/tmdb.js';
import { mockTeste } from '../teste/mock.js';


jest.mock('../lib/tmdb.js',() => {
  return {
    buscarFilmes:() =>{
      return Promise.resolve(mockTeste)
    }
  }
})

console.log(buscarFilmes)

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    console.log(el)
    expect(el instanceof HTMLElement).toBe(true);
  });
});
