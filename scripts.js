class heroi{

    constructor(nome, idade, tipo){

        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }

    atacar(){

        if(this.tipo === "mago"){

            console.log(`o ${this.tipo} atacou usando magia`)

        } else if(this.tipo === "guerreiro"){

            console.log(`o ${this.tipo} atacou usando uma espada`)

        } else if(this.tipo === "monge"){

            console.log(`o ${this.tipo} atacou usando artes marciais`)

        } else if(this.tipo === "ninja"){

            console.log(`o ${this.tipo} atacou usando shurikens`)

        }

    }

}

let heroiMago = new heroi("pedro" , 34 , "mago")
let heroiGuerreiro = new heroi("guilherme" , 28 , "guerreiro")

heroiMago.atacar();

heroiGuerreiro.atacar();