// Importa prompt-sync
const prompt = require('prompt-sync')();

// Função principal
function consultarFilme(){
    // 1. Solicita o nome do filme
    let filme = prompt("Digite o nome do filme: ");
    filme = filme.trim().replace(/ /g, "+");

    // 2. Monta a URL (coloque sua chave no lugar de SUA_CHAVE)
    const url = `http://www.omdbapi.com/?t=${filme}&apikey=bce0af7a`;

    // 3. Faz a requisição
    fetch(url)
    .then((resposta) => {
        // Converte para JSON
        return resposta.json();
    })
    .then((dados) =>{
        // Filme não encontrado?
        if (dados.Response === "False") {
            console.log("Filme não encontrado!");
            return;
        }

        // Exibe os dados
        console.log("Dados do filme:");
        console.log("Título:", dados.Title);
        console.log("Ano:", dados.Year);
        console.log("Gênero:", dados.Genre);
        console.log("Diretor:", dados.Director);
        console.log("Atores:", dados.Actors);
        console.log("Nota IMDb:", dados.imdbRating);
        console.log("Sinopse:", dados.Plot);
        console.log("Poster:", dados.Poster);
    }) 
    .catch((erro) => {
        console.log("Erro ao acessar a API:");
        console.log(erro.message);
    })
}

// Executa
consultarFilme();