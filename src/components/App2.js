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
    img.className = 'imgApp2'; 
    img.innerHTML = `    
      <a href="#${filme.id}">
        <img class='img_App2' src="https://image.tmdb.org/t/p/w500${filme.backdrop_path}" alt="${filme.title}"></img>
      </a>`;
    containerApp2.appendChild(img);    

    const detalhes = document.createElement('div');
    detalhes.className = 'detalhes'; 
    detalhes.innerHTML += `    
      <h2 class='h2App2'>${filme.title}</h2>
      <span>${filme.release_date.slice(0,-6)}</span>
      <span>⭐${filme.vote_count}</span>
      <p>${generos.slice(0,-2)+'.'}</p>
      <p>${filme.overview}</p>
      <a href='/'>
      <button class=btn>VOLTAR</button>
      </a>`;
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