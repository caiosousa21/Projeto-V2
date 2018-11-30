export default function inserirValores(e, t) {
    e.childNodes[0].childNodes[3].innerHTML = t.titulo;
    e.childNodes[0].childNodes[5].innerHTML = t.autor;
    e.childNodes[0].childNodes[7].innerHTML = t.editora;
    e.childNodes[0].childNodes[9].innerHTML = t.data;
}