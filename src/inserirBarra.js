export default function imprimindoBarra(barra){
    barra.className='barra';
    let content = 
        `
            <p class='Titulo'>Caio</p>
            <button class='carrinho'>Visualizar Carrinho</button>
        `
    barra.innerHTML=content;
}