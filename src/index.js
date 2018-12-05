import './style.css';
import imprimindoNaTela from './listarEmTela.js';
import imprimindoBarra from './inserirBarra.js';
import criandoCarrinho from './carrinhoCompras.js';
import botoesCard from './botoesCard.js';

function component() {
    let element = document.createElement('div');
    let elemento = document.createElement('div');
    let barra = document.createElement('div');
    let carrinho = document.createElement('div');

    // content = 
    //     `
    //         <p>Carrinho Vazio</p>
    //     `;
    // carrinho = content;
    
    setTimeout(()=>criandoCarrinho(), 1000);
    setTimeout(()=>botoesCard(), 1000);
    imprimindoBarra(barra);
    imprimindoNaTela(elemento);
    element.appendChild(barra);
    element.appendChild(elemento);
    return element;
}
document.body.appendChild(component());



