import btnAdd from './botaoAdd.js'
import btnDescr from './botaoDescr.js'

export default function botoesCard() {
    let botaoDescr = document.querySelectorAll('button.descr');
    let botaoAdd = document.querySelectorAll('button.add');
    let carrinho = document.querySelector('div.contentCarrinho');
    let titulo = document.querySelectorAll('p.nome');
    btnAdd(botaoAdd, carrinho, titulo);
    btnDescr(botaoDescr);
   
}