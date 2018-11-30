import './style.css'
import buscarLivros from './buscarLista'
import criarCat from './criarCategoria.js'
import inserirValores from './inserirValoresLivro.js'


function component() {
    let element = document.createElement('div');


    let headerCat = document.createElement('h2');
    headerCat.innerHTML = 'Header da categoria'

    let categoria = document.createElement('div');
    categoria.id = 'categoria';

    var listaTitulos = buscarLivros('hardcover-fiction');
    

    for (let i = 0; i < 15; i++) {
        criarCat(categoria, i);
        inserirValores(categoria.childNodes[i], listaTitulos[i]);
    }

    element.appendChild(headerCat);
    element.appendChild(categoria);
    return element;
}
document.body.appendChild(component());



