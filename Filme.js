class Filme{
    constructor(){
        this.titulo = '',
        this.ano = 0,
        this.genero = '',
        this.diretor = '',
        this.atores = [],
        this.duracao = 0
    }

    Reproduzir(){
        console.log('Reproduzindo')
    }

    Pausar(){
        console.log('pausar')
    }

    Avancar(){
        console.log('Avançar')
    }

    Fechar(){
        console.log('Fechar X')
    }
}

var vingadores = new Filme();
vingadores.titulo = "Vingadores 2"
vingadores.ano = 2014
vingadores.genero = "Ação"

console.log(vingadores.titulo, " ", vingadores.ano, " ", vingadores.genero)
 
var batman = new Filme();

batman.titulo = "Batman"
batman.ano = 2009;
batman.genero = "Ação"

console.log(batman.titulo, " ", batman.ano, " ", batman.genero)