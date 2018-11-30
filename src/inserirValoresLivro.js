export default function inserirValores(e, t) {
    e.childNodes[1].innerHTML = t.titulo;
    e.childNodes[2].innerHTML = t.autor;
    e.childNodes[3].innerHTML = t.editora;
    e.childNodes[4].innerHTML = t.data;
}