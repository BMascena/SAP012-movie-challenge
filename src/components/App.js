import { buscarFilmes } from '../lib/tmdb.js';

const App = () => {

  // Cria e configura o elemento <h1>
  const h1 = document.createElement('h1');
  h1.textContent = 'OS VINGADORES';
  
  // Cria uma div para envolver o h1 e a ul
  const divContainer = document.createElement('div');
  divContainer.classList.add('container'); // Adiciona uma classe CSS à div
  
  // Adiciona o h1 dentro da div
  divContainer.appendChild(h1);
  
  // Cria um elemento <ul> para armazenar os cartões de filmes
  const cartoes = document.createElement('ul');
  cartoes.classList.add('container_cartoes');   // Adiciona uma classe CSS ao elemento <ul>
  
  // Adiciona a ul dentro da div
  divContainer.appendChild(cartoes);

  buscarFilmes().then(listaDeFilmes => {
    listaDeFilmes.items.forEach(item => {   // Manipula os dados recebidos da API
       // Para cada item na resposta, cria um cartão de filme e adiciona ao elemento <ul>
      cartoes.innerHTML += `    
      <li class="container_li">
        <dl>
          <dt>
           <a href="#${item.id}"> <img  src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="${item.title}" itemprop="imageUrl" class="img_cards" /></a>
          </dt>
          <dt>${item.release_date}</dt>
          <dt>${item.title}</dt>
        </dl>
      </li> 
      `;
    })
   // Retorna a div que envolve a ul
  })
  
  return divContainer;
};

export default App;
