import criarModal from './modal.js'

export default function btnDescr(botaoDescr, indice){
    
    for (let i = indice; i < botaoDescr.length; i++) {
        botaoDescr[i].addEventListener('click',()=>{          
            criarModal(botaoDescr[i].parentNode.parentNode.parentNode.children[i]);
        })
    }
}