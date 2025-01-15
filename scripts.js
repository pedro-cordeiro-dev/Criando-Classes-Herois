class heroi{

    constructor(nome, idade, tipo){

        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }

    atacar(){

        if(tipo == "mago"){

            console.log(`o ${tipo} atacou usando magia`)

        } else if(tipo == "guerreiro"){

            console.log(`o ${tipo} atacou usando uma espada`)

        } else if(tipo == "monge"){

            console.log(`o ${tipo} atacou usando artes marciais`)

        } else if(tipo == "ninja"){

            console.log(`o ${tipo} atacou usando shurikens`)

        }

    }

}