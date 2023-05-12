// Autor: Danilo Augusto

// fetch("header.html")
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById("header-container").innerHTML = data;
//   });

// Metodos de interação com o banco de dados (Local Storage)
const getBancoNoticias = () => JSON.parse(localStorage.getItem('dbNoticias')) ?? [];
const setBancoNoticias = (noticia) => localStorage.setItem("dbNoticias", JSON.stringify(noticia));

const getCategorias = (categoria) => {
    const bd = getBancoNoticias();
    const categoriaSelecionada = bd.filter(ele => ele.tag === categoria);

    if (categoria == undefined) {
        return bd
    } else {
        return categoriaSelecionada
    }
}

// Gera a data e hora no formato desejado
const dataAtual = () => {
    // Obtenha a data e hora atual
    const dataHoraAtual = new Date();

    const dia = String(dataHoraAtual.getDate()).padStart(2, '0');
    const mes = String(dataHoraAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataHoraAtual.getFullYear();
    const horas = String(dataHoraAtual.getHours()).padStart(2, '0');
    const minutos = String(dataHoraAtual.getMinutes()).padStart(2, '0');
    const segundos = String(dataHoraAtual.getSeconds()).padStart(2, '0');

    const dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
    return dataHoraFormatada // Saída: 01/05/2023 19:21:01
}


// Mostra na lateral do site as categorias que estao no banco de dados
const addCategorias = () => {
    const categorias = getBancoNoticias();
    const tags = [...new Set(categorias.map((ele) => ele.tag))];

    tags.forEach(tag => {
        const row = document.createElement('p');
        row.innerHTML = `
            <a href="#" class="link">${tag}</a>
        `;
        document.querySelector('#card-body-categorias').appendChild(row);
    });
}


// Mostra as noticias do site que estao no banco de dados
const mostrarNoticias = (categoria) => {
    const noticias = getCategorias(categoria);

    noticias.forEach(noticia => {
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
                <div class="card">
                    <img src="./assets/img/img-not-found.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <small class="text-body-secondary">${noticia.tempo}</small>
                        <small class="text-primary border border-primary-subtle p-1">${noticia.tag}</small>
                        <h5 class="card-title">${noticia.titulo.slice(0, 50)}...</h5>
                        <p class="card-text">${noticia.conteudo.slice(0, 150)}...</p>
                        <button type="button" class="btn btn-primary">
                            Ver mais
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        document.querySelector('#container-noticias').appendChild(div);
    });
}


// Pega os valores dos inputs do modal
const getInputNoticia = () => {
    const obj = {
        titulo: document.querySelector('#formNoticias .input-titulo').value,
        conteudo: document.querySelector('#formNoticias .input-texto').value,
        tag: document.querySelector('#formNoticias .input-tag').value,
        tempo: `${dataAtual()}`
    };
    return obj;
}

// Limpa os inputs do modal quando ela é fechada
const clearInputNoticia = () => {
    const inputs = getInputNoticia();
    document.querySelector('#formNoticias .input-titulo').value = "";
    document.querySelector('#formNoticias .input-texto').value = "";
    document.querySelector('#formNoticias .input-tag').value = "";
    location.reload();
}

// Salva as noticias do modal no banco
const salvarBancoAlunos = () => {
    const noticia = getInputNoticia();
    const bd = getBancoNoticias();
    bd.push(noticia);
    setBancoNoticias(bd);
}

addCategorias();
// mostrarNoticias();

document.querySelector('#btnAddNoticias')
    .addEventListener('click', salvarBancoAlunos);

document.getElementById('modalAddNoticias')
    .addEventListener('hidden.bs.modal', clearInputNoticia)

