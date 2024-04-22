import App from './components/App.js';              // Importa o primeiro componente
import App2 from './components/App2.js';            // Importa o segundo componente

const root = document.getElementById('root')        // Adiciona os componentes ao elemento com o ID "root"

const pgSecundaria = (filmeId) => {
    root.appendChild(App2(filmeId));
}

window.addEventListener('load', () => {
    
    // Verifica o hash da URL
    if (window.location.hash === "") {          // Se o hash for "", adiciona o primeiro componente
        root.innerHTML = '';                    // Limpa o conteúdo anterior
        root.appendChild(App());

    } else {                                   // Se o hash for "#", adiciona o segundo componente
        root.innerHTML = '';                    // Limpa o conteúdo anterior
        pgSecundaria(window.location.hash);
    }
})

const mudançaDePg = () => {

    window.addEventListener('hashchange', () => {   // detecta mudanças no hash da URL

        // Verifica o hash da URL
        if (window.location.hash === "") {          // Se o hash for "", adiciona o primeiro componente
            root.innerHTML = '';                    // Limpa o conteúdo anterior
            root.appendChild(App());

        } else {                                   // Se o hash for "#", adiciona o segundo componente
            root.innerHTML = '';                    // Limpa o conteúdo anterior
            pgSecundaria(window.location.hash);
        }
    });
};

mudançaDePg();                                      // Chama a função para começar a ouvir as mudanças de hash


