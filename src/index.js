import './style.css'
import buscarLivros from './buscarLista'
import criarCat from './criarCategoria.js'


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
function inserirValores(e, t) {
    e.childNodes[1].innerHTML = t;
    console.log(e.childNodes[0]);
}
