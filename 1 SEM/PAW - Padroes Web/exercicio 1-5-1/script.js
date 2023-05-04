// =========================================================================================
// INICIO - métodos interaçãoes do banco para a tabela resultado de notas
// =========================================================================================

// Metodos de interação com o banco de dados (Local Storage)
const getBancoAluno = () => JSON.parse(localStorage.getItem('dbAlunos')) ?? [];
const setBancoAluno = (bancoAlunos) => localStorage.setItem("dbAlunos", JSON.stringify(bancoAlunos));

// Pega todos os dados da tabela notas
const getTabeleAlunos = () => {
    const rows = document.querySelectorAll('#tbNotas tbody tr');
    const header = document.querySelectorAll('#tbNotas th');
    const vet = [];

    rows.forEach(row => {
        const obj = {};
        const column = row.querySelectorAll('td');
        column.forEach((ele,i) => {
            const heade = header[i].innerText.toLowerCase();
            obj[heade] = ele.innerText;
        });
        vet.push(obj);
    });
    return vet;
}


// Salva as notas no banco
const salvarBancoAlunos = () => {
    const bancoAlunos = getTabeleAlunos();
    setBancoAluno(bancoAlunos); 
}


// Pega os dados do banco e monta a tabela alunos
const montaTabela = () =>{
    const bancoALunos = getBancoAluno();
    bancoALunos.forEach(newRow)    
}
// =========================================================================================
// FIM - métodos interaçãoes do banco para a tabela resultado de notas
// =========================================================================================




// =========================================================================================
// INICIO - métodos interaçãoes do formulario adicionar notasde aluno para a tabela resultado notas
// =========================================================================================

// Verifica a media e rotorna o resultao
const resultadoNota = (numero) => (numero >= 70) ? "Aprovado" : "Reprovado"; 


// cria linhas
const newRow = (aluno) =>{
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${aluno.aluno}</td>
        <td>${aluno.notaHtml+aluno.notaCSS+aluno.notaJS}</td>
        <td>${(aluno.notaHtml+aluno.notaCSS+aluno.notaJS)/3}</td>
        <td>${resultadoNota((aluno.notaHtml+aluno.notaCSS+aluno.notaJS)/3)}</td>
        `;
    document.querySelector('#tbNotas tbody').appendChild(row);
}

// seleciona as notas inseridas nos inputs
const alunosNotas = () =>{
    const aluno = {
        aluno: document.querySelector('#aluno').value,
        notaHtml: parseInt(document.querySelector('#notaHtml').value),
        notaCSS: parseInt(document.querySelector('#notaCSS').value),
        notaJS: parseInt(document.querySelector('#notaJS').value),
    };
    return aluno   
}

// Verifica se todos os input forma preenchidos
const isValidInput = () => {
    const formNotas = document.querySelector('#formNotas')
    return true
}

// Adiciona linha na tabela com os dados dos inputs
const addRow = () =>{
    if (isValidInput()) {
        const aluno = alunosNotas();
        newRow(aluno);  
    }else{
        alert("Todos os campos devem ser preenchidos");
    }
};
// =========================================================================================
// FIM - métodos interaçãoes do formulario adicionar notas para a tabela notas
// =========================================================================================

montaTabela();

// Eventos
document.querySelector('#adicionar')
    .addEventListener('click',addRow);

document.querySelector('#btnSalvar')
    .addEventListener('click',salvarBancoAlunos);

