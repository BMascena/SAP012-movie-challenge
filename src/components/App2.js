import {buscarFilmes} from '../lib/tmdb.js';

const App2 = () => {
  // Cria um elemento <ul> para armazenar os cartões de filmes
  const cartoes2 = document.createElement('ul');
  cartoes2.classList.add('container_cartoes2');   // Adiciona uma classe CSS ao elemento <ul>


// se ele escutar o click na imagem me retorna a lista abaixo 


  buscarFilmes().then(listaDeFilmes=>{
    listaDeFilmes.items.forEach(item => {   // Manipula os dados recebidos da API
       // Para cada item na resposta, cria um cartão de filme e adiciona ao elemento <ul>
      cartoes2.innerHTML += `    
      <li class="container_li2">
        <dl>
          <dt>
           <a href="#${item.id}"> <img  src="https://image.tmdb.org/t/p/w300${item.backdrop_path}" alt="${item.title}" itemprop="imageUrl" class="img_card" /></a>
          </dt>
          <dt>${item.title}</dt>
          <dt>${item.release_date}</dt>
          <dt>${item.vote_count}</dt>X    
          <dt>${item.genre_ids}</dt>
          <dt>${item.overview}</dt>
        </dl>
      </li> 
      `;
    })
   // Retorna o elemento <ul> com os cartões de filmes
  })
    return cartoes2;
};

export default App2;

