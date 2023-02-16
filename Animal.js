// Herança

class Animal {
    constructor(nome, idade, preço){
        this.nome = nome;
        this.idade = idade;
        this.preço = preço;
    }

    ChecarEstoque(){
        return 10;
    }

    Conferir(){
        console.log('Um método da classe mãe');
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, preço, raça, peso){
        super(nome, idade, preço);
        this.raça = raça;
        this.peso = peso;
    }
    
    Latir(){
        console.log('Rolf! Rolf!');
    }

    ChecarEstoque(){
        return 67;
    }

    Conferir(){
        console.log('Classe dos dogs');
        super.Conferir()
        console.log("Funcionalidade exclusiva do filho!");
    }
}

// Herança em Múltiplos níveis - Não rcomendado

class PastorAlemao extends Cachorro {
    //
}

class PastorAlemaoMAcho extends PastorAlemao {
    //
}


// var dog = new Cachorro('Dogão', 5, 250, 'golden', 5.5)

// console.log(dog.ChecarEstoque());
// dog.Latir()
// dog.Conferir()