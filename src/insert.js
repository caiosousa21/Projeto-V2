import criarLivro from './criandoLivroN.js';

export default (categoria) => {

    const formInsert = document.getElementById('formInsert') ?
        document.getElementById('formInsert') : document.createElement('form');

    if (document.getElementById('formInsert')) {
        formInsert.remove();
    } else {


        formInsert.id = 'formInsert';
        let contentForm =
            `
            <input type='text' class='nomeNovo'></input>
            <input type='text' class='autorNovo'></input>
            <input type='text' class='editoraNovo'></input>
            <input type='date' class='dataNovo'></input>
            <br/>
        `;

        let buttonInserir = document.createElement('button');
        buttonInserir.innerHTML = 'Enviar';
        buttonInserir.className = 'buttonInserir';
        buttonInserir.addEventListener('click',()=>{
            criarLivro(categoria, formInsert);
        })

        formInsert.innerHTML = contentForm;
        formInsert.appendChild(buttonInserir);

        categoria.previousSibling.previousSibling.children[0].appendChild(formInsert);
    }
}

