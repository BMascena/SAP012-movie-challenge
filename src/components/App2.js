import { buscarDetalhes } from '../lib/tmdb.js';

const App2 = (filmeId) => {

  const detalhes = document.createElement('div');  // Cria um elemento <div> para armazenar os cartões de filmes
  detalhes.className = 'container_App2'; // "className" em vez de "classname"

  // Chama a função buscarFilmes e processa os resultados
  buscarDetalhes(filmeId).then(filme => {

    let generos = ""
    filme.genres.forEach((genero) => {
      generos += `${genero.name}, `;
    });
      detalhes.innerHTML = `    
        <a href="#${filme.id}">
        <img class='img_App2' src="https://image.tmdb.org/t/p/w300${filme.backdrop_path}" alt="${filme.title}"></img>
        </a>
        <h1>
        ${filme.title}
        </h1>
        <span>
        ${filme.release_date.slice(0,-6)}
        </span>
        <span>
        ⭐${filme.vote_count}
        </span>
        <p>
        ${generos.slice(0,-2)+'.'}
        </p>
        <p>
        ${filme.overview}
        </p>
        <a href='/'> <button>VOLTAR</button> </a>
          `;
  });
  return detalhes;
};

export default App2;








// função para fazer as estrelas automaticas
// data.forEach((item) => {
//   const ratingValue = parseFloat(item.extraInfo.assessment);
//   const fullStars = Math.floor(ratingValue);
//   const emptyStars = 5 - fullStars;
  
//   const ratingStars = '\u2605'.repeat(fullStars)  + '\u2606'.repeat(emptyStars);