export default function criandoCarrinho() {
    let btn = document.querySelector('button.carrinho');
    btn.onclick = function(){
        let carrinho = document.querySelector('div.contentCarrinho');
        if(carrinho.style.visibility === 'visible')
            carrinho.style.visibility = 'hidden';
        else{
            carrinho.style.visibility = 'visible' 
            carrinho.style.zIndex = '1';
        }
    }    
}