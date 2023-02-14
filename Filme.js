class Filme{
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo,
        this.ano = ano,
        this.genero = genero,
        this.diretor = diretor,
        this.duracao = duracao,
        this.atores = []
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

var vingadores = new Filme("Vingadores 2", 2014, 'Ação', 'fulano', '2h');
console.log(vingadores.titulo, " ", vingadores.ano, " ", vingadores.genero)
 
var batman = new Filme("Batman", 2009, "Ação", "fulano 2", "1h");
console.log(batman.titulo, " ", batman.ano, " ", batman.genero)

