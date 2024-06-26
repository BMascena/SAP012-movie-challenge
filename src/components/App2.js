import { buscarDetalhes } from '../lib/tmdb.js';

const App2 = (filmeId) => {

  const containerApp2 = document.createElement('div'); 
  containerApp2.className = 'container_App2';  

  buscarDetalhes(filmeId).then(filme => {

    let generos = "";
    filme.genres.forEach((genero) => {
      generos += `${genero.name}, `;
    });

    const img = document.createElement('div');
    img.className = 'divImg'; 
    img.innerHTML = ` 
      <a href='/'>
      <button class=btn>&#8249</button>
      </a>
      <a href="#${filme.id}">
        <img class='imgApp2' src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="${filme.title}"></img>
      </a>`;
    containerApp2.appendChild(img);    

    const detalhes = document.createElement('div');
    detalhes.className = 'detalhes'; 
    detalhes.innerHTML += `    
      <h2 class='h2App2'>${filme.title}</h2>
      <span>(${filme.release_date.slice(0,-6)})</span>
      <span>⭐${filme.vote_count}</span>
      <p class='generos'>${generos.slice(0,-2)}.</p>
      <br>
      <p>${filme.overview}</p>
`;
    containerApp2.appendChild(detalhes);

  });

  return containerApp2;
};

export default App2;







// função para fazer as estrelas automaticas
// data.forEach((item) => {
//   const ratingValue = parseFloat(item.extraInfo.assessment);
//   const fullStars = Math.floor(ratingValue);
//   const emptyStars = 5 - fullStars;
  
//   const ratingStars = '\u2605'.repeat(fullStars)  + '\u2606'.repeat(emptyStars);