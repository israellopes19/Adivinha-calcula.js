var entrada = require('readline-sync');
var escolha;

while (true) {
    escolha = entrada.question('Digite a operação ( + | - | * | % | / | ** | sair ): ');

    if (escolha == 'sair') {
        console.log('Saindo...');
        break;
    }

    var num1 = parseFloat(entrada.question('1° Numero: '));
    var num2 = parseFloat(entrada.question('2° Numero: '));

    if (escolha == '+') {
        console.log(`Adição: ${num1 + num2}`);
    } else if (escolha == '-') {
        console.log(`Subtração: ${num1 - num2}`);
    } else if (escolha == '*') {
        console.log(`Multiplicação: ${num1 * num2}`);
    } else if (escolha == '/') {
        console.log(`Divisão: ${num1 / num2}`);
    } else if (escolha == '**') {
        console.log(`Potenciação: ${num1 ** num2}`);
    } else if (escolha == '%') {
        console.log(`Radiciação: ${num1 % num2}`);
    } else {
        console.log('Operação inválida');
    }
}