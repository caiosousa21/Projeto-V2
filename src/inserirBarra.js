export default function imprimindoBarra(barra){
    barra.className='barra';
    let content = 
        `
            <p class='Titulo'>Caio</p>
            <div class='canto'>
                <button class='carrinho'>Carrinho</button>
                <div class='contentCarrinho'></div>
            </div>
        `
    barra.innerHTML=content;
}