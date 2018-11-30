export default function criarCat(categoria, i) {

    var livro = document.createElement('div');
    var str = 'livro' + i;
    livro.id = str;
    livro.className='livro';

    let content = 
        `<div class='card'>
        <div class='capa'>
            <p class="capa">Capa</p>
        </div>
        <p class="nome"></p>
        <p class="autor"></p>
        <p class="editora"></p>
        <p class="data"></p></div>
        <div class='botoes'>
            <button class='descr'>Descr</button>
            <button class='add'>Add</button>
        </div>`

    categoria.appendChild(livro);
    livro.innerHTML=content;
    
    
}