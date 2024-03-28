import App from './components/App.js';

document.getElementById('root').appendChild(App());

// const main = document.getElementById('root')

// const mudançaDePg = () => {
//     window.addEventListener('hashchange', () =>{
//         switch(window.location.hash){
//             case "":
//                 main.appendChild(App());
//                 break;
//             case "${item.id}":
//                 main.appendChild(pgSecundaria());
//         }
//     })
// }


// window.addEventListener('load', () => {
//     main.appendChild(pgPrincipal());   //vai adcionar o as informações da segunda página
//   });