class Jogo{
    constructor(a, b, c, d){
        this.produto = a,
        this.genero = b,
        this.produtora = c,
        this.preco = d
    }

    Abrir(){
        console.log('Abrindo o jogo, aguarde...')
        setTimeout(() => {
            console.log('Bem-vindo!')
        }, 3000)
    }

    Info(){
        var { produto, genero, produtora, preco } = this;
        console.log({produto, genero, produtora, preco})
    }
}

var mc = new Jogo('Magic Campus', 'RPG', 'xcloud', 100)

async function principal(){
    await mc.Abrir();
    mc.Info();
}

principal();