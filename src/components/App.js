import { buscarFilmes } from '../lib/tmdb.js';

const App = () => {

  const containerApp = document.createElement('div');   
  containerApp.classList.add('container_App');              

  const h1 = document.createElement('h1');      
  h1.classList.add('h1App');      
  h1.textContent = 'OS VINGADORES';
  containerApp.appendChild(h1);          

  const cartoes = document.createElement('ul');          
  containerApp.appendChild(cartoes);        

  buscarFilmes().then(listaDeFilmes => {
    listaDeFilmes.items.forEach(item => {      

      cartoes.innerHTML += `    
      <li>
        <a href="#${item.id}">
        <img class="img_App" src="https://image.tmdb.org/t/p/w300${item.poster_path}" alt="${item.title}">
        </a>
        <h2 class="h2App">
          ${item.title}
        </h2>
        <span>
          ${item.release_date.slice(0,-6)}
        </span>
      </li>
      `;
    })
  })
  return containerApp;   
};

export default App;
