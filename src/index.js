import './style.css'
import buscarLivros from './buscarLista'
import criarCat from './criarCategoria.js'


function component() {
    var element = document.createElement('div');


    var headerCat = document.createElement('h2');
    headerCat.innerHTML = 'Header da categoria'

    var categoria = document.createElement('div');
    categoria.id = 'categoria';

    for (var i = 0; i < 15; i++) {
        criarCat(categoria, i);
    }

    element.appendChild(headerCat);
    element.appendChild(categoria);
    return element;
}
document.body.appendChild(component());

