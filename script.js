// CEP de teste = 01310100
// async permite usar await dentro da função
// await faz o código esperar a resposta da API chegar


document
    .getElementById("cep")
    .addEventListener("keypress", function(event) {
        if (event.key === "Enter"){
            buscarCEP()
        }
    })

async function buscarCEP(){

    let cep = document.getElementById("cep").value

    //validação
    if(cep.length !== 8) {
        document.getElementById("resultado").innerHTML =
        `<p>Digite um CEP válido com 8 números</p>`
        return
    }
    // Faz requisição para a API ViaCEP usando o CEP digitado
    let resposta = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
    )

    // Converte a resposta da API para JSON
    let dados = await resposta.json()
    console.log(dados)
    // CEP não encontrado
    if (dados.erro) {
        document.getElementById("resultado").innerHTML =
            `<p>CEP não encontrado.</p>`
        return
    }
    // Exibe os dados retornados pela API na tela
    document.getElementById("resultado").innerHTML =
    `
    <p>Rua: ${dados.logradouro}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>Cidade: ${dados.localidade}</p>
    <p>Estado: ${dados.uf}</p>
    `
}