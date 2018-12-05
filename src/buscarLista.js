export default function buscarLivros(nome) {
    var url = 'https://api.nytimes.com/svc/books/v3/lists.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list='+nome;
    function Get(urlLivros) {
        var Httpreq = new XMLHttpRequest();
        Httpreq.open('GET', urlLivros, false);
        Httpreq.send(null);
        return Httpreq.responseText;
    }
    var ListaLivros = JSON.parse(Get(url));

    function Livro(titulo, autor, editora, data){
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.data = data;
    }

    var lista = [];
    
    for (var i = 0; i < 15; i++) {
        let resultado = ListaLivros.results[i].book_details[0];
        lista[i] = (new Livro (resultado.title, resultado.author, resultado.publisher, ListaLivros.results[i].published_date));
    }

    
    return lista;
}