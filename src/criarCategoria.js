export default function criarCat(categoria, i) {

    var livro = document.createElement('div');
    var str = 'livro' + i;
    livro.id = str;
    categoria.appendChild(livro);

    var imagem = document.createElement('div');
    imagem.className = 'capa'
    var nomeCapa = document.createElement('p');
    nomeCapa.innerHTML = 'Capa';
    nomeCapa.className = 'capa';
    imagem.appendChild(nomeCapa);

    var nome = document.createElement('p');
    nome.className = 'nome';
    var autor = document.createElement('p');
    autor.className = 'autor;'
    var editora = document.createElement('p');
    editora.className = 'editora';
    var data = document.createElement('p');
    data.className = 'data';


    livro.appendChild(imagem);
    livro.appendChild(nome);
    livro.appendChild(autor);
    livro.appendChild(editora);
    livro.appendChild(data);

}