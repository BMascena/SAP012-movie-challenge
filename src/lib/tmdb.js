export const buscarFilmes = () => {
    const options = {
        method: 'GET',    // Método da requisição (neste caso, GET para recuperar dados)
        headers: {
          accept: 'application/json',       // Tipo de conteúdo aceito na resposta (JSON neste caso)    
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWFkOWM0YTFiNjIyNmVjOWM0ZjY4ODkxMzQ3ODI5MyIsInN1YiI6IjY1ZjQ2N2VhMjRmMmNlMDE4NTE3ZTM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xJ7C9y2opxIFXqaqf3sFoN8zSXUvOSt49Esa7rZNeE'
        }   
      };  
    const listaFilmes =  fetch('https://api.themoviedb.org/3/list/8294392?language=pt-BR&page=1', options)   // Realiza uma requisição à API usando fetch
      .then(response => response.json())    // Converte a resposta em JSON
      .then(response => {return response})
      .catch(err => {return err}); 
    return listaFilmes
};

// Define uma função chamada buscarDetalhes que recebe um parâmetro filmeId
export const buscarDetalhes = (filmeId) => {
  // Define as opções para a requisição HTTP
  const options = {
    method: 'GET', // Define o método HTTP como GET
    headers: {
      accept: 'application/json', // Define o cabeçalho 'accept' como 'application/json'
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWFkOWM0YTFiNjIyNmVjOWM0ZjY4ODkxMzQ3ODI5MyIsInN1YiI6IjY1ZjQ2N2VhMjRmMmNlMDE4NTE3ZTM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xJ7C9y2opxIFXqaqf3sFoN8zSXUvOSt49Esa7rZNeE' // Define o token de autorização
    }
  };
  // Faz uma requisição fetch para a API do The Movie DB para obter detalhes do filme
  const filmeDetalhes = fetch(`https://api.themoviedb.org/3/movie/${filmeId.slice(1)}?language=pt-BR`, options)
    .then(response => response.json()) // Converte a resposta para JSON
    .then(response => {return response}) // Retorna a resposta JSON
    .catch(err => {return err}); // Captura qualquer erro ocorrido durante a requisição
  // Retorna o resultado da requisição
  return filmeDetalhes  
};  
// criar função para retornar os detalhes do filme

//busca detalhes de um filme utilizando a API do The Movie DB. Ela recebe um ID de filme como parâmetro, 
//realiza uma requisição HTTP GET para a API com esse ID, e retorna os detalhes do filme em formato JSON.