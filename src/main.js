import App from './components/App.js'; // Importa o primeiro componente
import App2 from './components/App2.js'; // Importa o segundo componente

// Adiciona os componentes ao elemento com o ID "root"
document.getElementById('root').appendChild(App());
document.getElementById('root').appendChild(App2());

const mudançaDePg = () => {
    // Adiciona um listener para detectar mudanças no hash da URL
    window.addEventListener('hashchange', () => {
        const main = document.getElementById('root'); // Obtém a referência ao elemento principal

        // Verifica se o hash da URL é "#"
        if (window.location.hash === "") {
            // Se o hash for vazio, adiciona o primeiro componente
            main.innerHTML = ''; // Limpa o conteúdo anterior
            main.appendChild(App()); // Adiciona o primeiro componente
        } 
        else if (window.location.hash === "#") {
            // Se o hash for "#", adiciona o segundo componente
            main.innerHTML = ''; // Limpa o conteúdo anterior
            main.appendChild(App2()); // Adiciona o segundo componente
        }
    });
};

// Chama a função para começar a ouvir as mudanças de hash
mudançaDePg();
