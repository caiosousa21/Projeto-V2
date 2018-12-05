import criarModal from './modal.js'

export default function btnDescr(botaoDescr){
    
    for (let i = 0; i < botaoDescr.length; i++) {
        botaoDescr[i].addEventListener('click',()=>{          
            criarModal(botaoDescr[i].parentNode.parentNode.parentNode.children[i]);
        })
    }
}