// CEP de teste = 01310100
// async permite usar await dentro da função
// await faz o código esperar a resposta da API chegar

async function buscarCEP(){

    let cep = document.getElementById("cep").value

    // Faz requisição para a API ViaCEP usando o CEP digitado
    let resposta = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
    )

    // Converte a resposta da API para JSON
    let dados = await resposta.json()

    // Exibe os dados retornados pela API na tela
    document.getElementById("resultado").innerHTML =
    `
    <p>Rua: ${dados.logradouro}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>Cidade: ${dados.localidade}</p>
    <p>Estado: ${dados.uf}</p>
    `
}