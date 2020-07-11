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
    var math = somar();

}




/**         Funções         */

function apresentarNome() {
    console.log(`O nome do novo programador é ${nome}, seja bem vindo!`);
}
apresentarNome();

function somar() {
    let soma;
    soma = x + y;
    return soma;

}

function valor() {
    math += 2;
    console.log(`O valor da soma é: ${math}`)
}
valor();

let f; /* Utilizando o Use Strict é necessário criar a variável F */
f = () => {
    math *= 5;
    console.log(`O valor da multiplicalçai é de ${math}`)
}
f();