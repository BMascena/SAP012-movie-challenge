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

export const buscarDetalhes = (filmeId) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWFkOWM0YTFiNjIyNmVjOWM0ZjY4ODkxMzQ3ODI5MyIsInN1YiI6IjY1ZjQ2N2VhMjRmMmNlMDE4NTE3ZTM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xJ7C9y2opxIFXqaqf3sFoN8zSXUvOSt49Esa7rZNeE'
    }
  };
  const filmeDetalhes = fetch(`https://api.themoviedb.org/3/movie/${filmeId.slice(1)}?language=pt-BR`, options)
    .then(response => response.json())
    .then(response => {return response})
    .catch(err => {return err});
  return filmeDetalhes
};  
// criar função para retornar os detalhes do filme