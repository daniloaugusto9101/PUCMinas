// Autor: Danilo Augusto





// Metodos de interação com o banco de dados (Local Storage)
const getBancoNoticias = () => JSON.parse(localStorage.getItem('bdNoticias')) ?? [];
const setBancoNoticias = (noticia) => localStorage.setItem("bdNoticias", JSON.stringify(noticia));

const getCategorias = (categoria) => {
    const bd = getBancoNoticias();
    const categoriaSelecionada = bd.filter(ele => ele.tag === categoria);

    return (categoria == undefined || categoria == "Todas as categorias")
        ? bd
        : categoriaSelecionada
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

// evento de clique nos links
const addClick = (id) => {
    const link = document.querySelectorAll(id);
    link.forEach(element => {
        element.addEventListener('click', event => {
            mostrarNoticias(event.target.textContent);
            console.log(event.target.textContent);
        })
    });
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
        const link = document.querySelector("a");
        document.querySelector('#card-body-categorias').appendChild(row);

    });
    // Adciiona o evento addEventListener quando a tag e crada
    addClick('#card-body-categorias a');
}

const getVerMaisNoticias = (id) => {
    const bd = getBancoNoticias();
    const materia = bd.find((ele, index)=>{
        return index == id
    });
    return materia
}


const verMaisNoticias = (id) => {
    const titulo = document.querySelector('#titulo-materia')
    const meteria = getVerMaisNoticias(id);
    titulo.innerHTML = `
        <h1>${meteria.titulo}</h1>
    `;

    const containerNoticias = document.querySelector('#container-noticias');
    containerNoticias.classList.remove("row-cols-md-2")
    containerNoticias.classList.add("row-cols-md-1")
    containerNoticias.innerHTML = `
    <div class="card">
        <img src="./assets/img/img-not-found.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <small class="text-body-secondary">${meteria.tempo}</small>
            <small class="text-primary border border-primary-subtle p-1">${meteria.titulo}</small>
            <h5 class="card-title">${meteria.titulo}</h5>
            <p class="card-text">${meteria.conteudo}</p>
        </div>
    </div>
`;

    console.log(meteria);
}


// Mostra as noticias do site que estao no banco de dados
const mostrarNoticias = (categoria) => {
    const noticias = getCategorias(categoria);
    const containerNoticias = document.querySelector('#container-noticias');
    containerNoticias.innerHTML = "";


    noticias.forEach((noticia, id) => {
        const div = document.createElement('div');
        div.classList.add('col');


        div.innerHTML = `
                <div class="card">
                    <img src="./assets/img/img-not-found.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <small class="text-body-secondary">${noticia.tempo}</small>
                        <small class="text-primary border border-primary-subtle p-1">${noticia.tag}</small>
                        <h5 class="card-title">${noticia.titulo.slice(0, 50)}</h5>
                        <p class="card-text">${noticia.conteudo.slice(0, 150)}...</p>
                        <button type="button" class="btn btn-primary btn-verNoticias" data-id-materia="${id}" id="btn-verNoticias">
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

        containerNoticias.appendChild(div);
    });

    document.querySelectorAll(".btn-verNoticias")
        .forEach(element => {
            element.addEventListener('click', ()=>{
                verMaisNoticias(element.getAttribute("data-id-materia"));
            })
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
const salvarBancoNoticias = () => {
    const noticia = getInputNoticia();
    const bd = getBancoNoticias();
    bd.push(noticia);
    setBancoNoticias(bd);
}

addCategorias();
mostrarNoticias();

document.querySelector('#btnAddNoticias')
    .addEventListener('click', salvarBancoNoticias);

document.getElementById('modalAddNoticias')
    .addEventListener('hidden.bs.modal', clearInputNoticia)

document.querySelector('#button-pesquisar')
    .addEventListener('click', () => {
        const inputPesquisa = document.querySelector('#input-pesquisar');
        mostrarNoticias(inputPesquisa.value);
    })




