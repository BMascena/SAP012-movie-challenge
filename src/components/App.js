import {buscarFilmes} from '../lib/tmdb.js';

const App = () => {
  // Cria um elemento <ul> para armazenar os cartões de filmes
  const cartoes = document.createElement('ul');
  cartoes.classList.add('container_cartoes');   // Adiciona uma classe CSS ao elemento <ul>

  buscarFilmes().then(listaDeFilmes=>{
    listaDeFilmes.items.forEach(item => {   // Manipula os dados recebidos da API
       // Para cada item na resposta, cria um cartão de filme e adiciona ao elemento <ul>
      cartoes.innerHTML += `    
      <li class="container_li">
        <dl>
          <dt>
           <a href="#${item.id}"> <img  src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="${item.title}" itemprop="imageUrl" class="img_card" /></a>
          </dt>
          <dt>${item.release_date}</dt>
          <dt>${item.title}</dt>
        </dl>
      </li> 
      `;
    })
   // Retorna o elemento <ul> com os cartões de filmes
  })
    return cartoes;
};

export default App;

