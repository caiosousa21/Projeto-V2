import './style.css';
import imprimindoNaTela from './listarEmTela.js';
import imprimindoBarra from './inserirBarra.js';
import criandoCarrinho from './carrinhoCompras.js';
import botoesCard from './botoesCard.js';

function component() {
    let element = document.createElement('div');
    element.className = 'element';
    let elemento = document.createElement('div');
    let barra = document.createElement('div');

    setTimeout(()=>criandoCarrinho(), 1000);
    setTimeout(()=>botoesCard(), 1000);

    imprimindoBarra(barra);
    imprimindoNaTela(elemento);
    element.appendChild(barra);
    element.appendChild(elemento);
    return element;
}
document.body.appendChild(component());



