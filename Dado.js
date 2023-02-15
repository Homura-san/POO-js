// Desafio do cassino

class Dado{
    constructor(faces){
        this.faces = faces;
    }

    Rolar(){
        console.log(Math.floor(Math.random() * this.faces))
    }
}

var dado6 = new Dado(100);

dado6.Rolar()
