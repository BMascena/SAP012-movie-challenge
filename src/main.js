import App from './components/App.js'; // Importa o primeiro componente
import App2 from './components/App2.js'; // Importa o segundo componente

const root = document.getElementById('root')
// Adiciona os componentes ao elemento com o ID "root"
const home = root.appendChild(App()); // Obtém a referência ao elemento principal

const pgSecundaria = (filmeId) => {
    root.appendChild(App2(filmeId));
}

const mudançaDePg = () => { 
    // Adiciona um listener para detectar mudanças no hash da URL
    window.addEventListener('hashchange', () => {

        // Verifica o hash da URL
        if (window.location.hash === "") { // Se o hash for "", adiciona o primeiro componente
            root.innerHTML = '';
            home;
            
        } else  { // Se o hash for "#", adiciona o segundo componente
            // Limpa o conteúdo anterior
            root.innerHTML = '';
            pgSecundaria(window.location.hash);
        }
    }); 
};
// Chama a função para começar a ouvir as mudanças de hash
mudançaDePg();

