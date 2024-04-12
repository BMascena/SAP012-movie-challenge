import { buscarFilmes } from '../lib/tmdb.js';

const App = () => {

  const divContainer = document.createElement('div');    // Cria uma div para envolver o h1 e a ul
  divContainer.classList.add('container_App');                // Adiciona uma classe CSS à div

  const h1 = document.createElement('h1');      // Cria e configura o elemento <h1>
  h1.classList.add('h1App');       // Adiciona uma classe CSS ao h1
  h1.textContent = 'OS VINGADORES';
  divContainer.appendChild(h1);          // Adiciona o h1 dentro da div

  const cartoes = document.createElement('ul');           // Cria um elemento <ul> para armazenar os cartões de filmes
  divContainer.appendChild(cartoes);         // Adiciona a ul dentro da div

  buscarFilmes().then(listaDeFilmes => {
    listaDeFilmes.items.forEach(item => {       // Manipula os dados recebidos da API
       // Para cada item na resposta, cria um cartão de filme e adiciona ao elemento <ul>
      cartoes.innerHTML += `    
      <li>
        <a href="#${item.id}">
        <img class="img_App" src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="${item.title}">
        </a>
        <h2>
          ${item.title}
        </h2>
        <span>
          ${item.release_date.slice(0,-6)}
        </span>
      </li>
      `;
    })
  })
  return divContainer;   // Retorna a div que envolve a ul
};

export default App;
