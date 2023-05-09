// Conectar com as apis
const apis = () => {
    const url0 = "https://www.mercadobitcoin.net/api/BTC/ticker/";
    const url1 = "https://www.mercadobitcoin.net/api/LTC/ticker/";
    const url2 = "https://www.mercadobitcoin.net/api/ETH/ticker/";
    const url3 = "https://www.mercadobitcoin.net/api/DOGE/ticker/";

    const promise0  = fetch(url0)
        .then((r) => {
            return r.json(0);
        });

    const promise1  = fetch(url1)
        .then((r) => {
            return r.json(0);
        });
    const promise2  = fetch(url2)
        .then((r) => {
            return r.json(0);
        });
    const promise3  = fetch(url3)
        .then((r) => {
            return r.json(0);
        });

    return Promise.all([promise0, promise1, promise2,promise3])
        .then(data =>{
            return {
                api0Data: data[0],
                api1Data: data[1],
                api2Data: data[2],
                api3Data: data[3],
            }
        });
}

// Seleciona os campos onde serão inseridos os valores
const tabelaCotacao = () => {
    const inputCripto = {
        bitcoin: document.querySelector("#valor-btc"),
        litecoin: document.querySelector("#valor-ltc"),
        ethereum: document.querySelector("#valor-eth"),
        dogecoin: document.querySelector("#valor-dgc"),
    }
    return inputCripto;
}

// pega os campos selecionado e insere os valores recebidos da API
const mostrar = () => {
    const tabela = tabelaCotacao();
    const conectaApi = apis();
    conectaApi
        .then(dados =>{
            tabela.bitcoin.innerHTML = dados.api0Data.ticker.buy;
            tabela.litecoin.innerHTML = dados.api1Data.ticker.buy;
            tabela.ethereum.innerHTML = dados.api2Data.ticker.buy;
            tabela.dogecoin.innerHTML = dados.api3Data.ticker.buy;

        });
        console.log("mostrou");
}

let count = 5;

const contador = () => {
    const cronometro = document.querySelector('#cronometro span');

    if (count >= 1) {
        console.log(count);
        cronometro.innerHTML = count
        count--
    }else{
        count = 5
    }

}

setInterval(contador, 800)
setInterval(mostrar, 5000)