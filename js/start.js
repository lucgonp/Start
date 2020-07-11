'use strict'
/**         Objetos         */
{
    const obj = {
        nome: "Lucas"
    }

    var nome = obj.nome;

}



/**         Variáveis         */
{
    var x = 5, y = 70;

}




/**         Funções         */

function apresentarNome() {
    console.log(`O nome do novo programador é ${nome}, seja bem vindo!`);
}
apresentarNome();

function somar() {
    let soma;
    soma = x + y;
    console.log(`O valor é: ${soma}`);
    
}
somar();

let f; /* Utilizando o Use Strict é necessário criar a variável F */
f = () => {
    console.log("Arrow Function");
}
f();



