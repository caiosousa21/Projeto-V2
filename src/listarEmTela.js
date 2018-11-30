import buscarLivros from './buscarLista.js';
import criarCat from './criarCategoria.js';
import inserirValores from './inserirValoresLivro.js';
import buscarLista from './buscarListas.js';


export default function imprimindoNaTela(elemento){
    
    let listaListas = buscarLista();
    for (let i = 0; i < 4; i++) {//setei em 4, servidor da NYT bloqueia depois disso (429()) 
        let categoria = document.createElement('div');
        categoria.id = 'categoria';
        let headerCat = document.createElement('h2');

        let content = `${listaListas[i].titulo}`;
        headerCat.innerHTML = content;

        let regua = document.createElement('hr');
        
        let listaTitulos = buscarLivros(listaListas[i].nome);
        elemento.appendChild(headerCat);
        elemento.appendChild(regua);
        for (let i = 0; i < 15; i++) {
            criarCat(categoria, i);
            inserirValores(categoria.children[i], listaTitulos[i]);
        }
        elemento.appendChild(categoria);
    }

}