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
        console.log('Fechado')
    }
}