import './style.css';
import imprimindoNaTela from './listarEmTela.js';

function component() {
    let element = document.createElement('div');
    let elemento = document.createElement('div');
    let barra = document.createElement('div');
    barra.className='barra';

    let content = 
        `
            <p class='Titulo'>Caio</p>
            <button class='carrinho'>Visualizar Carrinho</button>
        `
    barra.innerHTML=content;
    imprimindoNaTela(elemento);
    element.appendChild(barra);
    element.appendChild(elemento);
    return element;
}
document.body.appendChild(component());



