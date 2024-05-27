var entrada = require('readline-sync');
var escolha;

while (true){
    escolha = entrada.question('Digite a operacao (+ | - | * | / | ** | % | sair ):');

    if (escolha == 'sair'){
        console.log('Saindo...');
        break;
    }

    if(escolha == '+') {
        var num1 = parseFloat(entrada.question('1° Numero: '));
        var num2 = parseFloat(entrada.question('2° Numero: '));
        console.log(`Adição: ${num1 + num2}`);
    }else if(escolha == '-' ){
        var num1 = parseFloat(entrada.question('1° Numero: '));
        var num2 = parseFloat(entrada.question('2° Numero: '));
        console.log(`Subtração: ${num1 - num2}`);
    }else if(escolha == '*' ){    
        var num1 = parseFloat(entrada.question('1° Numero: '));
        var num2 = parseFloat(entrada.question('2° Numero: '));
    console.log(`Multiplicação: ${num1 * num2}`);
    }else if(escolha == '/' ){    
        var num1 = parseFloat(entrada.question('1° Numero: '));
        var num2 = parseFloat(entrada.question('2° Numero: '));
    console.log(`Divisão: ${num1 / num2}`);
    }else if(escolha == '**' ){    
        var num1 = parseFloat(entrada.question('1° Numero: '));
        var num2 = parseFloat(entrada.question('2° Numero: '));
    console.log(`Potenciação: ${Math.pow(num1,  num2)}`);
    }else if(escolha == '%' ){
        var num1 = parseFloat(entrada.question('1° Numero:'));
        console.log(`Radiciação: ${Math.sqrt}`);
    }else{
        console.log('Operação inválida!!!');
      }
    









}