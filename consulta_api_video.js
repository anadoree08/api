// Importa prompt-sync
const prompt = require('prompt-sync')();

// Função principal
function consultarVIDEO() {
    // 1. Solicita o texto de busca
    let busca = prompt("Digite o nome do vídeo: ");
    busca = busca.trim().replace(/ /g, "+"); // troca espaços por +

    // 2. Monta a URL corretamente
    const url = `https://abhi-api.vercel.app/api/search/yts?text=${busca}`;

    // 3. Faz a requisição
    fetch(url)
    .then((resposta) => resposta.json())
    .then((dados) => {
        // Verifica se veio resultado
        if (!dados.result || dados.result.length === 0) {
            console.log("Vídeo não encontrado!");
            return;
        }

        // Pega o primeiro vídeo da lista
        const video = dados.result[0];

        // Exibe os dados
        console.log("Dados do vídeo:");
        console.log("Título:", video.title);
        console.log("Duração:", video.duration);
        console.log("Views:", video.views);
        console.log("Publicado:", video.ago);
        console.log("Canal:", video.author.name);
        console.log("URL:", video.url);
        console.log("Thumbnail:", video.thumbnail);
    })
    .catch((erro) => {
        console.log("Erro ao acessar a API:");
        console.log(erro.message);
    });
}

// Executa a função
consultarVIDEO();