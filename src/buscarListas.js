export default function buscarListas() {
    var url = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=';
    function Get(urlLista) {
        var Httpreq = new XMLHttpRequest();
        Httpreq.open('GET', urlLista, false);
        Httpreq.send(null);
        return Httpreq.responseText;
    }
    var ListaLivros = JSON.parse(Get(url));

    function Categoria(titulo, nome){
        this.titulo = titulo;
        this.nome = nome;
    }

    var lista = [];
    
    for (var i = 0; i < 15; i++) {
        let resultado = ListaLivros.results[i];
        lista[i] = (new Categoria (resultado.list_name, resultado.list_name_encoded));
    }

    
    return lista;
}