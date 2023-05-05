

const apiUrl = "https://api.example.com/data";

const getData = () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data); // faz algo com os dados recebidos
    })
    .catch(error => {
      console.error("Ocorreu um erro: ", error);
    });
};

const api = () => {
    const banco = [
        {valor: "R$ 50"},
        {valor: "R$ 60"},
        {valor: "R$ 80"},
        {valor: "R$ 90"},
    ]
    return banco
}

const tabelaCotacao = () =>{
    const inputCriptomoedas = {
        bitcoin: document.querySelector("#valor-btc"),
        litecoin: document.querySelector("#valor-ltc"),
        ethereum: document.querySelector("#valor-eth"),
        dogecoin: document.querySelector("#valor-dgc"),
    }
    return inputCriptomoedas;
}

const atualizarCotacao = () => {
    const cotacoes = api();
    const tabela = tabelaCotacao();

    tabela.bitcoin.innerHTML = cotacoes[0].valor
    tabela.litecoin.innerHTML = cotacoes[1].valor
    tabela.ethereum.innerHTML = cotacoes[2].valor
    tabela.dogecoin.innerHTML = cotacoes[3].valor
    
}

// setInterval(atualizarCotacao, 5000)