
const tempAlunos = {
    nome: "Danilo",
    total: '300',
    media: '100',
    resultado: 'aprovado',
}
// Metodos de interação com o banco (Local Storage)
const getBancoAluno = () => JSON.parse(localStorage.getItem('dbAlunos')) ?? [];
const setBancoAluno = (bancoAlunos) => localStorage.setItem("dbAlunos", JSON.stringify(bancoAlunos));

// Monta a tabela notas com dados do banco


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

const salvarBancoAlunos = () => {
    const bancoAlunos = getTabeleAlunos();
    setBancoAluno(bancoAlunos); 
}


// Eventos
document.querySelector('#btnSalvar')
    .addEventListener('click',salvarBancoAlunos)
