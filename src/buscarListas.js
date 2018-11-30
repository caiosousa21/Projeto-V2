export default function buscarListas() {
    var url = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=b2359ea071d749d3ab3a35e4945853c2&list=';
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