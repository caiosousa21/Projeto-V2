import buscarLivros from "./buscarLivros";

export default (categoria) => {
    const formSearch = document.getElementById('formSearch') ?
        document.getElementById('formSearch') : document.createElement('form');

    if (document.getElementById('formSearch')) {
        formSearch.remove();
    } else {
        formSearch.id = 'formSearch';
        let contentForm =
            `
            <input type='text' class='busca'></input>
            <br/>
        `;

        let buttonBuscar = document.createElement('button');
        buttonBuscar.innerHTML = 'Enviar';
        buttonBuscar.className = 'buttonBuscar';
        buttonBuscar.addEventListener('click',()=>{
            buscarLivros(buttonBuscar.parentNode.parentNode.parentNode.nextSibling.nextSibling, formSearch);
        })

        formSearch.innerHTML = contentForm;
        formSearch.appendChild(buttonBuscar);

        categoria.previousSibling.previousSibling.children[1].appendChild(formSearch);
    }
}

