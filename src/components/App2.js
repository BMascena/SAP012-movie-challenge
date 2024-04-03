import { buscarDetalhes } from '../lib/tmdb.js';

const App2 = (filmeId) => {
  // Cria um elemento <div> para armazenar os cartões de filmes
  const detalhes = document.createElement('div');
  detalhes.className = 'container_detalhes'; // "className" em vez de "classname"

  // Chama a função buscarFilmes e processa os resultados
  buscarDetalhes(filmeId).then(filme => {
      detalhes.innerHTML = `    
        <div>
        <a href="#${filme.id}">
        <img src="https://image.tmdb.org/t/p/w300${filme.backdrop_path}" alt="${filme.title}" class="img_card" />
        </a>
          <h1>${filme.title}</h1>
          <span>${filme.release_date}</span>
          <span>${filme.vote_count}</span>    
          <span>${filme.genres.name}</span>
          <p>${filme.overview}</p>
        </div>`;
  });
  return detalhes;
};

export default App2;

