export default function foo(){
    for(var i = 0; i<15;i++){
        var str='livro'+i;
        var livroAtual = document.getElementById(str);
        
        console.log(livroAtual.childNodes[0]);
    }
}