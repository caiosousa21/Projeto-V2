import buscarLivros from './buscarLista.js';
import criarCat from './criarCategoria.js';
import inserirValores from './inserirValoresLivro.js';
import buscarLista from './buscarListas.js';
import criarModal from './modal.js'
import inserir from './insert.js'
import search from './search.js';


export default function imprimindoNaTela(elemento){
    
    let listaListas = buscarLista();
    for (let i = 0; i < 4; i++) {//setei em 4, servidor da NYT bloqueia depois disso (429()) 
        let categoria = document.createElement('div');
        categoria.id = 'categoria';
        let headerCat = document.createElement('h2');

        let content = `${listaListas[i].titulo}`;
        headerCat.innerHTML = content;

        let regua = document.createElement('hr');
        
        let btnInserir = document.createElement('button');
        btnInserir.className = 'btnInserir';
        btnInserir.innerHTML = 'Inserir Livro';
        btnInserir.addEventListener('click',()=>{
            inserir(btnInserir.parentNode.nextSibling.nextSibling);
        });

        let btnBuscar = document.createElement('button');
        btnBuscar.className = 'btnBuscar';
        btnBuscar.innerHTML = 'Buscar Livro';
        btnBuscar.addEventListener('click',()=>{
            search(btnBuscar.parentNode.nextSibling.nextSibling);
        });

        let listaTitulos = buscarLivros(listaListas[i].nome);
        elemento.appendChild(headerCat);
        headerCat.appendChild(btnInserir);
        headerCat.appendChild(btnBuscar);
        elemento.appendChild(regua);
        for (let i = 0; i < 15; i++) {
            criarCat(categoria, i);
            inserirValores(categoria.children[i], listaTitulos[i]);
            categoria.children[i].children[0].addEventListener('click',()=>{
                criarModal(categoria.children[i]);
            })
        }
        elemento.appendChild(categoria);
    }
}