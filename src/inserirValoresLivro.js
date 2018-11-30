export default function inserirValores(e, t) {
    e.childNodes[2].innerHTML = t.titulo;
    e.childNodes[4].innerHTML = t.autor;
    e.childNodes[6].innerHTML = t.editora;
    e.childNodes[8].innerHTML = t.data;
}