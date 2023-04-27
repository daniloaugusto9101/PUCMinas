

// Metodos de interação com o banco (Local Storage)
const getBancoAluno = () => JSON.parse(localStorage.getItem('dbAlunos')) ?? [];
const setBancoAluno = (bancoAlunos) => localStorage.setItem("dbAlunos", JSON.stringify(bancoAlunos));

const asd = document.querySelector("#aluno").value



const tempAlunos = {
    nome: document.querySelector("#aluno").value,
    total: document.querySelector("#notaHtml").value,
    media: document.querySelector("#notaCSS").value,
    resultado: document.querySelector("#notaJS").value,
}


// Monta a tabela notas com dados do banco
const tabelaNotas = () => {   

    // console.log(tabelaNotas);
}

// Pega todos os dados da tabela notas
const getTabeleAlunos = () => {
    const rows = document.querySelectorAll('#tbNotas tbody tr');
    const header = document.querySelectorAll('#tbNotas th');
    const vet = [];

    rows.forEach(row => {
        const obj = {};
        const column = row.querySelectorAll('td');
        column.forEach((ele,i) => {
            const heade = header[i].innerText
            obj[heade] = ele.innerText
        });
        vet.push(obj)
    });
    return vet
}

// Salva as notas no banco
const salvarBancoAlunos = () => {
    // const bancoAlunos = getTabeleAlunos();
    // setBancoAluno(bancoAlunos); 
    // tabelaNotas();
    console.log(tempAlunos);
}

// Eventos
document.querySelector('#btnSalvar')
    .addEventListener('click',salvarBancoAlunos)

document.querySelector('#adicionar')
    .addEventListener('click',tempAlunos)
