export default function botoesCard() {
    let botaoDescr = document.querySelectorAll('button.descr');
    let botaoAdd = document.querySelectorAll('button.add');
    let carrinho = document.querySelector('div.contentCarrinho');
    let titulo = document.querySelectorAll('p.nome');
    for (let i = 0; i < botaoAdd.length; i++) {
        botaoAdd[i].addEventListener('click',()=>{
            let str = titulo[i].outerHTML;
            str = str.replace(/<p class="nome">/g,'');
            str = str.replace('</p>','');
            let contCarrinho = document.createElement('div');
            contCarrinho.className = 'contCarrinho';
            contCarrinho.innerHTML = str;
            carrinho.appendChild(contCarrinho);
        })
    }
}