import botoesCard from "./botoesCard.js";
import criarModal from "./modal.js";

export default (categoria, formInsert) => {
    var lista = categoria.childNodes;
    var livro = document.createElement('div');
    var str = 'livro' + lista.length;
    livro.id = str;
    livro.className = 'livro';

    let content =
        `<div class='card'>
            <div class='capa'>
                <p class="capa">Capa</p>
            </div>
            <p class="nome">${formInsert.children[0].value.toUpperCase()}</p>
            <p class="autor">${formInsert.children[1].value}</p>
            <p class="editora">${formInsert.children[2].value}</p>
            <p class="data">${formInsert.children[3].value}</p></div>
            <div class='botoes'>
                <button class='descr'>Descr</button>
                <button class='add'>Add</button>
            </div>
            `

    livro.innerHTML = content;
    categoria.appendChild(livro);
    botoesCard(lista.length - 1);
    categoria.children[lista.length - 1].children[0].addEventListener('click', () => {
        criarModal(categoria.children[lista.length - 1]);
    })
}