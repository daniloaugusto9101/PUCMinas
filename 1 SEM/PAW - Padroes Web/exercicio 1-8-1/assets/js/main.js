// fetch("header.html")
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById("header-container").innerHTML = data;
//   });


const inputsNoticias = () => {
    const obj = {
        titulo: document.querySelector('#formNoticias .input-titulo').value,
        conteudo: document.querySelector('#formNoticias .input-texto').value,
        tag: document.querySelector('#formNoticias .input-tag').value,
    };    
    return obj;
}

const saveBanco = () => {
    localStorage.setItem('valor chave', "valroes");
}