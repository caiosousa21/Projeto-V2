import modalResultado from "./modalResultado";

export default (elemento, form)=>{
    let livros = elemento.children;
    for(let i = 0; i<livros.length;i++){
        let livrosNomes = livros[i].children[0].children[1].outerHTML;
        livrosNomes = livrosNomes.replace(/<p class="nome">/,'');
        livrosNomes = livrosNomes.replace('</p>','');
        if(livrosNomes.toUpperCase() == form.children[0].value.toUpperCase()){
            modalResultado(livros[i].children[0]);
            return;
        }
        if(i==livros.length-1)
            alert('Livro não encontrado nesta categoria.')
    }

    
}
