export default function criarCat(categoria, i) {

    var livro = document.createElement('div');
    var str = 'livro' + i;
    livro.id = str;
    livro.className='livro';

    let content = 
        `<div class='capa'>
            <p class="capa">Capa</p>
        </div>
        <p class="nome"></p>
        <p class="autor"></p>
        <p class="editora"></p>
        <p class="data"></p>`

    categoria.appendChild(livro);
    livro.innerHTML=content;
    
    
}