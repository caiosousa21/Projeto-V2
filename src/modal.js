export default function criarModal(div){
    let card = div.children[0].outerHTML;
    let element = document.querySelector('div.element');
    let modal = document.createElement('div');
    let modalConteudo = document.createElement('div');
    let btnModal = document.createElement('button');
    modal.className = 'modal';
    modalConteudo.className = 'modalConteudo';
    btnModal.className = 'btnModal';
    
    let contentModal = card;
    contentModal = contentModal.replace(/"card"/,'"cardModal"');
    contentModal = contentModal.replace(/"capa"/g,'"capaModal"');
    contentModal = contentModal.replace(/"nome"/,'"nomeModal"');
    contentModal = contentModal.replace(/"autor"/,'"autorModal"');
    contentModal = contentModal.replace(/"editora"/,'"editoraModal"');
    contentModal = contentModal.replace(/"data"/,'"dataModal"');
    
    modalConteudo.innerHTML = contentModal;

    btnModal.addEventListener('click',()=>{
        modal.parentNode.removeChild(modal);
    });
              
    modal.appendChild(modalConteudo);
    modalConteudo.appendChild(btnModal);
    element.appendChild(modal);
}