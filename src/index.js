import './style.css'
import buscarLivros from './buscarLista.js'
import criarCat from './criarCategoria.js'
import inserirValores from './inserirValoresLivro.js'
import buscarLista from './buscarListas.js';

function component() {
    let element = document.createElement('div');


    let elemento = document.createElement('div');
    elemento.id = 'elemento';
    let listaListas = buscarLista();
    for (let i = 0; i < 4; i++) {//setei em 4, servidor da NYT bloqueia depois disso (429()) 
        let categoria = document.createElement('div');
        categoria.id = 'categoria';
        let headerCat = document.createElement('h2');
        headerCat.id = 'headerCategoria'
        
        headerCat.innerHTML = listaListas[i].titulo;
        let listaTitulos = buscarLivros(listaListas[i].nome);
        elemento.appendChild(headerCat);
        for (let i = 0; i < 15; i++) {
            criarCat(categoria, i);
            inserirValores(categoria.childNodes[i], listaTitulos[i]);
        }
        elemento.appendChild(categoria);
    }

    element.appendChild(elemento);
    return element;
}
document.body.appendChild(component());



