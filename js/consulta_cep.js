//Importa prompt-sync

const prompt = require('prompt-sync')();

//Função principal
function consultarCEP(){
    // 1. Solicitam o cep 2. Monta a URL 3. Faz a req (GET) 4. Retorna os dados
    let cep = prompt("Digite o CEP (Somente números): ");
    cep = cep.trim();

    const url = `https://viacep.com.br/ws/${cep}/json/`

fetch(url)
.then((resposta) => {
    //Converte a resposta em JSON
    return resposta.json();
})
.then((dados) =>{
    //CEP inválido?
    if (dados.erro) {
        console.log("CEP não encontrado! ");
        return;
    }
//Exibe os dados do CEP:
console.log("Dados do CEP: ");
console.log("CEP: ", dados.cep);
console.log("Logradouro: ", dados.logradouro);
console.log("Bairro: ", dados.bairro);
console.log("Cidade: ", dados.localidade);
console.log("UF: ", dados.uf);
}) 
.catch((erro) => {
    console.log("Erro ao acessar a API: ");
    console.log(erro.message);
})
}
consultarCEP()