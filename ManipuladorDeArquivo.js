// Composição

class Leitor{
    Ler(caminho){
        return "Conteúdo do arquivo"
    }
}

class Escritor{
    Escrever(arquivo, conteudo){
        console.log("Conteúdo escrito");
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo criado!");
    }
}

class CriadorDePdf{
    Criar(){
        console.log('Criando PDF...');
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo!");
    }
}

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();
    }
}

class GerenciadorDeUsuário{
    constructor(){
        this.criador = new CriadorDePdf();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuário(lista){
        this.criador.Criar('usuários.txt')
        this.escritor.Escrever('usuários.txt', lista)
    }
}

var manipulador = new ManipuladorDeArquivo();

manipulador.leitor.Ler("./");
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.destruidor.Deletar();

var usuários = new GerenciadorDeUsuário()

usuários.SalvarListaDeUsuário(['erick', 'santos'])

// Dividir as funções de ume classe muito grande em classes menores 
// favorece o reaproveitamento de código