export default function criandoCarrinho() {
    let btn = document.querySelector('button.carrinho')[document.addEventListener ? 'addEventListener' : 'attachEvent']('click', function () {
        this.style.height = this.style.height === '200px;' ?
            '50px' : '200px';
    });
}