async function buscarCEP(){
    console.log("Acessou a função de busca")
    let cep = document.getElementById("cep").value
    let resposta = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
    )
    let dados = await resposta.json()

    document.getElementById("resultado").innerHTML =
    `
    <p>Rua: ${dados.logradouro}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>Cidade: ${dados.localidade}</p>
    <p>Estado: ${dados.uf}</p>
    `
    console.log(dados)
}